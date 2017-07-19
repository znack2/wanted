
function deleteInstructor(id) {
  return instructorModel.findById(id)
    .then((instructor) => {
      if (!instructor) throw new AppError('app', 'instructor_not_found');

      return instructor.destroy();
    });
}

function deleteOfficeAssignmentByInstructorId(id) {
  return getOfficeAssignmentByInstructorId(id)
    .then((office) => {
      if (office) {
        return office.destroy();
      }

      return Promise.resolve(null);
    });
}