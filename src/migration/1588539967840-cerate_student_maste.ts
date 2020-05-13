import {
    MigrationInterface,
    QueryRunner,
    Table
} from "typeorm";

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class cerateStudentMaste1588539967840 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "MasterStudents",
            columns: [
                {
                    name: "id",
                    type: "varchar",
                    isPrimary: true,
                    generationStrategy: "uuid"
                },
                {
                    name: "coeStatus",
                    type: "enum",
                    enum: ['Studying', 'Approved'],
                    enumName: 'coeStatusEnum'
                },
                {
                    name: "providerStudentID",
                    type: "int8",
                    isUnique: true,
                    isNullable: false
                },
                {
                    name: "firstName",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "familyName",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "gender",
                    type: "enum",
                    enum: ['Male', 'Female', 'Other'],
                    enumName: 'genderEnum',
                    isNullable: false
                },
                {
                    name: "dateOfBirth",
                    type: "date",
                    isNullable: false
                },
                {
                    name: "nationality",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "courseName",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "proposedStartDate",
                    type: "date",
                    isNullable: false
                },
                {
                    name: "proposedEndDate",
                    type: "date",
                    isNullable: false
                },
                {
                    name: "visaEffectiveDate",
                    type: "date",
                    isNullable: false
                },
                {
                    name: "enrolmentComments",
                    type: "varchar",
                    isNullable: true
                },
                {
                    name: "locationName",
                    type: "varchar",
                    isNullable: false
                },
                {
                    name: "studentType",
                    type: "enum",
                    enum: ['Commencing'],
                    enumName: 'studentTypeEnum',
                    isNullable: false
                },
                {
                    name: "lastChangedDateTime",
                    type: "date",
                },
                {
                    name: "createDateTime",
                    type: "date",
                }
            ]
        }), true);
    }
    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("MasterStudents");
    }

}
