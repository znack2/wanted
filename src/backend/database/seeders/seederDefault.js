import { toArray }          from 'lodash';
import Promise              from 'bluebird';
import moment               from 'moment';

import path                 from '../../helpers/pathHelper';
import user                 from './user';


async function seedData(db) {
    let seedPath = path.getDataRelative('seed/seedData.json');
    let seedData = require(seedPath);

    // await seedUsers(db, seedData.users);
    // await seedInstructors(db, seedData.instructors);
    // await seedOfficeAssignments(db, seedData.officeAssignments);
    // await seedDepartments(db, seedData.departments);
    // await seedCourses(db, seedData.courses);
    // await seedStudents(db, seedData.students);
    // await seedEnrollments(db, seedData.enrollments);

    await postImportRoutine(db);
    
    console.log('DB was seeded!');
}

function postImportRoutine(db) {
    if (db.sequelize.dialect.name === 'postgres') {
        return Promise.resolve(toArray(db.models))
            .map(model => {
                return updatePostgresSequence(model, db);
            });
    }

    return Promise.resolve(null);
}

function updatePostgresSequence(model, db) {
    let tableName = model.tableName;
    let idField = model.autoIncrementField;
    let sql = `SELECT setval('${tableName}_id_seq', (SELECT MAX(${idField}) FROM ${tableName}));`;
    return db.sequelize.query(sql);
}

export default {
  seedData
};
