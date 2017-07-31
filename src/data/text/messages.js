export default (payload = {}) => {
  const { fromJSONFile } = payload
  if (fromJSONFile) {
    return require(fromJSONFile)
  }

  return {
      "errors": {
      "app": {
        "error": "Server error",
          "request_validation": "Request validation failed: ${validationMessage}",
          "department_not_found": "Department not found.",
          "course_not_found": "Course not found.",
          "instructor_not_found": "Instructor not found.",
          "student_not_found": "Student not found."
      },
      "auth": {
        "email_taken": "This email is already registered.",
          "already_logged_in": "Log out before signing up.",
          "user_not_found": "User not found.",
          "wrong_password": "Wrong password.",
          "account_not_activated": "Your account is not activated yet. Please check your email for activation letter or sign up again to get a new one.",
          "email_activated": "This email is already activated.",
          "activation:no_token": "No activation token provided.",
          "activation:wrong_token": "Wrong activation token.",
          "activation:expired_token": "Activation token has expired. New activation email was send.",
          "reset_password:no_token": "No reset token provided.",
          "reset_password:wrong_token": "Wrong reset password token.",
          "reset_password:token_expired": "Reset password token has expired. New activation email was send.",
          "forgot_password:no_email": "There is no user with provided email."
      }
    },
      "info": {
      "auth": {
        "activation_email_confirmation": "Activation email was send. Please, check you inbox.",
          "reset_password_email_confirmation": "We've just dropped you an email. Please check your mail to reset your password. Thanks!",
          "reset_password_success": "Your password was reset successfully.",
          "activation_success": "Activation was successful! Please, login."
      }
    },
      "warning": {
      "auth": {
        "required_field": "Please fill the ${name} field.",
          "email_not_valid": "Email is not valid.",
          "passwords_not_match": "Passwords do not match.",
          "password_length": "Your password must be 8-16 characters."
      }
    }
  }
}
