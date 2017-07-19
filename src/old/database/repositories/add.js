
function addInstructor(instructorData) {
    return instructorModel.create(instructorData)
        .then((instructor) => {
            let coursesIds = _.map(instructorData.courses, c => c.id);

            instructor.setCourses(coursesIds);
            
            return instructor.save();
        });
}

function saveOfficeAssignment(officeAssignment, instructorId) {
  return getOfficeAssignmentByInstructorId(instructorId)
    .then((office) => {
      if (office) {
        office.location = officeAssignment.location;

        return office.save();
      }

      if (!office && officeAssignment.location) {
        office = {
          location: officeAssignment.location,
          instructorId: instructorId
        };

        return officeAssignmentModel.create(office);
      }

      return Promise.resolve(null);
    });
}
