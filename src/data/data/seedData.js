export default ({ fromJSONFile }) => {
  if (fromJSONFile) {
    return require(fromJSONFile)
  }

  return {
    "users": [
    ],
    "courses": [
      {
        "id": 1,
        "number": 1045,
        "title": "Calculus",
        "credits": 4,
        "departmentId": 2,
        "instructorsIds": [2]
      },
      {
        "id": 2,
        "number": 1050,
        "title": "Chemistry",
        "credits": 3,
        "departmentId": 3,
        "instructorsIds": [3, 4]
      },
      {
        "id": 3,
        "number": 2021,
        "title": "Composition",
        "credits": 3,
        "departmentId": 1,
        "instructorsIds": [1]
      },
      {
        "id": 4,
        "number": 2042,
        "title": "Literature",
        "credits": 4,
        "departmentId": 1,
        "instructorsIds": [1]
      },
      {
        "id": 5,
        "number": 3141,
        "title": "Trigonometry",
        "credits": 4,
        "departmentId": 2,
        "instructorsIds": [3]
      },
      {
        "id": 6,
        "number": 4022,
        "title": "Microeconomics",
        "credits": 3,
        "departmentId": 4,
        "instructorsIds": [5]
      },
      {
        "id": 7,
        "number": 4041,
        "title": "Macroeconomics",
        "credits": 3,
        "departmentId": 4,
        "instructorsIds": [5]
      }
    ],
    "departments": [
      {
        "id": 1,
        "name": "English",
        "budget": 350000.00,
        "startDate": "09/01/2007",
        "instructorId": 1
      },
      {
        "id": 2,
        "name": "Mathematics",
        "budget": 100000.00,
        "startDate": "09/01/2007",
        "instructorId": 2
      },
      {
        "id": 3,
        "name": "Engineering",
        "budget": 350000.00,
        "startDate": "09/01/2007",
        "instructorId": 3
      },
      {
        "id": 4,
        "name": "Economics",
        "budget": 100000.00,
        "startDate": "09/01/2007",
        "instructorId": 4
      }
    ],
    "students": [
      {
        "id": 1,
        "firstName": "Carson",
        "lastName": "Alexander",
        "enrollmentDate": "09/01/2010"
      },
      {
        "id": 2,
        "firstName": "Meredith",
        "lastName": "Alonso",
        "enrollmentDate": "09/01/2012"
      },
      {
        "id": 3,
        "firstName": "Anand",
        "lastName": "Arturo",
        "enrollmentDate": "09/01/2013"
      },
      {
        "id": 4,
        "firstName": "Gytis",
        "lastName": "Barzdukas",
        "enrollmentDate": "09/01/2012"
      },
      {
        "id": 5,
        "firstName": "Peggy",
        "lastName": "Justice",
        "enrollmentDate": "09/01/2011"
      },
      {
        "id": 6,
        "firstName": "Li",
        "lastName": "Yan",
        "enrollmentDate": "09/01/2012"
      },
      {
        "id": 7,
        "firstName": "Norman",
        "lastName": "Laura",
        "enrollmentDate": "09/01/2013"
      },
      {
        "id": 8,
        "firstName": "Olivetto",
        "lastName": "Nino",
        "enrollmentDate": "09/01/2005"
      }
    ],
    "enrollments": [
      {
        "id": 1,
        "courseId": 3,
        "studentId": 2,
        "grade": "B"
      },
      {
        "id": 2,
        "courseId": 3,
        "studentId": 6,
        "grade": "B"
      },
      {
        "id": 3,
        "courseId": 4,
        "studentId": 5,
        "grade": "B"
      },
      {
        "id": 4,
        "courseId": 1,
        "studentId": 2,
        "grade": "B"
      },
      {
        "id": 5,
        "courseId": 2,
        "studentId": 1,
        "grade": "A"
      },
      {
        "id": 6,
        "courseId": 2,
        "studentId": 3,
        "grade": null
      },
      {
        "id": 7,
        "courseId": 2,
        "studentId": 4,
        "grade": "B"
      },
      {
        "id": 8,
        "courseId": 5,
        "studentId": 2,
        "grade": "B"
      },
      {
        "id": 9,
        "courseId": 6,
        "studentId": 1,
        "grade": "C"
      },
      {
        "id": 10,
        "courseId": 6,
        "studentId": 3,
        "grade": "B"
      },
      {
        "id": 11,
        "courseId": 7,
        "studentId": 1,
        "grade": "B"
      }
    ],
    "instructors": [
      {
        "id": 1,
        "firstName": "Kim",
        "lastName": "Abercrombie",
        "hireDate": "11/03/1995",
        "coursesIds": [3, 4]
      },
      {
        "id": 2,
        "firstName": "Fadi",
        "lastName": "Fakhouri",
        "hireDate": "06/07/2002",
        "coursesIds": [1]
      },
      {
        "id": 3,
        "firstName": "Roger",
        "lastName": "Harui",
        "hireDate": "01/07/1998",
        "coursesIds": [2, 5]
      },
      {
        "id": 4,
        "firstName": "Candace",
        "lastName": "Kapoor",
        "hireDate": "01/15/2001",
        "coursesIds": [2]
      },
      {
        "id": 5,
        "firstName": "Roger",
        "lastName": "Zheng",
        "hireDate": "12/02/2004",
        "coursesIds": [6, 7]
      }
    ],
    "officeAssignments": [
      {
        "id": 1,
        "location": "Smith 17",
        "instructorId": 2
      },
      {
        "id": 2,
        "location": "Gowan 27",
        "instructorId": 3
      },
      {
        "id": 3,
        "location": "Thompson 304",
        "instructorId": 4
      }
    ]
  }
}