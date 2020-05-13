import { Injectable, ConflictException, InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
// import { Client } from 'pg';
import { client } from "./dbconnect.service"

@Injectable()
export class MasterRecordService {

    async getMasterRecords() {

        const myquery = 'SELECT * FROM "MasterStudents";'
        try {
            // const res = await client.query(myquery)
            await client.query(myquery)
            // console.log(res.rows) // Hello world!
            // await client.end()
            return "Data fetched successfully!"
        } catch(error) {
            console.log('error occured while querying',error)
        }
        // return "Hello world!";
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
