function updateDepartment(departmentData) {
  return departmentModel.findById(departmentData.id)
    .then((department) => {
      if (!department) throw new AppError('app', 'department_not_found');

      department.name = departmentData.name;
      department.budget = departmentData.budget;
      department.startDate = departmentData.startDate;
      department.instructorId = departmentData.instructorId;

      // db.sequelize.transaction(tr => {
      //   let options = {transaction: tr};
      //   let coursesIds = _.map(instructorData.courses, c => c.id);
      //
      //   return Promise.all([
      //     instructor.save(options),
      //     instructor.setCourses(coursesIds, options)
      //   ]);
      // });

      return department.save();
    });
}







