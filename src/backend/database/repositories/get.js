
function getList() {
  return departmentModel.findAll({
    include: instructorModel
  });
}

function getById(id) {
  return departmentModel.findById(id, {
    include: instructorModel
    // include: [{model: enrollmentModel, include: [courseModel]}]
  });
}

function getStudentStatistics() {
    let queryString = 'SELECT enrollment_date, COUNT(*) AS "studentCount" FROM students GROUP BY enrollment_date';

    return db.sequelize.query(queryString)
        .then((data) => {
            return data[0];
        });
}

function getStudents(search, sortOrder, pageNumber, pageSize) {
    let orderParams = getSortOrder(sortOrder);

    let options = {
        where: {
            $or: [
                {firstName: {$like: `%${search}%`}},
                {lastName: {$like: `%${search}%`}}
            ]
        },
        offset: (pageNumber - 1) * pageSize,
        limit: pageSize,
        order: [[orderParams.order, orderParams.direction]]
    };

    return studentModel.findAndCountAll(options);
}




function getEnrollmentsByCourseId(courseId) {
  let options = {
    where: {courseId: courseId},
    include: studentModel
  };

  return enrollmentModel.findAll(options);
}


function getInstructors() {
  let instructors = [];

  return instructorModel.findAll({
    include: [
      //include Course with Department
      {
        model: courseModel, include: [departmentModel]
      },
      officeAssignmentModel
    ]
  });
}

function getInstructorById(id) {
  let options = {
    include: [
      {
        model: courseModel, include: [departmentModel]
      },
      officeAssignmentModel
    ]
  };

  return instructorModel.findById(id, options);
}
function getSortOrder(sortOrder) {
  let result = {};

  switch (sortOrder) {
    case 'name':
      result = {order: 'lastName', direction: 'ASC'};
      break;
    case 'date':
      result = {order: 'enrollmentDate', direction: 'ASC'};
      break;
    case 'date_desc':
      result = {order: 'enrollmentDate', direction: 'DESC'};
      break;
    default:
      result = {order: 'lastName', direction: 'DESC'};
      break;
  }

  return result;
}

function getCourses(departmentId) {
  let options = {
    include: departmentModel,
    where: {}
  };

  if (departmentId) {
    options.where = {departmentId: departmentId};
  }

  return courseModel.findAll(options);
}

function getOfficeAssignmentByInstructorId(instructorId) {
  let options = {
    where: {instructorId: instructorId}
  };

  return officeAssignmentModel.findOne(options);
}
