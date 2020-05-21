import { Injectable, ConflictException, InternalServerErrorException, NotAcceptableException, Options } from '@nestjs/common';
import { client } from './dbconnect.service';
import { MasterStudentEntity } from 'src/model/master-student.entity';
import { createConnection } from 'net';
// import { Db } from 'typeorm';

@Injectable()
export class MasterRecordService {



    async getMasterRecords() {


        // createConnection(Options)
        // return result

        const myquery = 'SELECT * FROM "MasterStudents";'
        // console.log(DbConnectionService)
        try {
            const res = await client.query(myquery)
            // const client = this.DbConnection.getClient()
            // await client.query(myquery)
            // console.log(res.rows) // Hello world!
            // await client.end()
            return res
            // return "Data fetched successfully!"
        } catch(error) {
            console.log('error occured while querying',error)
        }
        // return "Hello world!";
    }

    async getMasterRecordById(id: number) {

        const query = `SELECT * FROM "MasterStudents" WHERE id='${id}';`
        const res = await client.query(query)
        return res
    }
    async insertData(data: any) {

        // console.log(data.coeStatus)  
        const { id, coeStatus, 
            providerStudentID,firstName, 
            familyName, gender, dateOfBirth, 
            nationality, courseName, 
            proposedStartDate, proposedEndDate, 
            visaEffectiveDate, enrolmentComments, 
            locationName, studentType, 
            lastChangedDateTime, createDateTime }  = data  

        const query = `INSERT INTO "MasterStudents" VALUES(
            ${id},'${coeStatus}',${providerStudentID},'${firstName}',
            '${familyName}','${gender}','${dateOfBirth}','${nationality}',
            '${courseName}','${proposedStartDate}','${proposedEndDate}','${visaEffectiveDate}',
            '${enrolmentComments}','${locationName}','${studentType}','${lastChangedDateTime}',
            '${createDateTime}'
            );`

        try {
            const res = await client.query(query)
            res 
            // console.log(res) // Hello world!
            // await client.end()
            return 'Data inserted successfully!'

        } catch(e) {
            // console.log('error occured!', e)
            if(e.code && e.code == 23505)
                throw new ConflictException()
            else  if(e.code && e.code == '22P02'){
                throw new NotAcceptableException('Input not accepted!')
            }
                
            throw new InternalServerErrorException()

        }
    }

     async deleteData(id: number) {

        const query = `DELETE FROM "MasterStudents" WHERE id='${id}';`
        try {
            const res = await client.query(query)
            // console.log(res)
            return res.command

        } catch(e){
            console.log('error occured',e)
            throw new Error('Internal error')
        }
     }
}
