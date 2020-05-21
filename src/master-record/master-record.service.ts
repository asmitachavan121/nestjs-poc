import { Injectable, ConflictException, InternalServerErrorException, NotAcceptableException, Options, NotFoundException } from '@nestjs/common';
import { client } from './dbconnect.service';
import { MasterStudentEntity } from 'src/model/master-student.entity';
import { createConnection } from 'net';
import { getRepository } from 'typeorm';
// import { Db } from 'typeorm';

@Injectable()
export class MasterRecordService {

    // studentRepo = MasterStudentEntity.getRepository()

    async getMasterRecords() {


        // createConnection(Options)
        // return result

        // const myquery = 'SELECT * FROM "MasterStudents";'
        // console.log(DbConnectionService)
        try {

            const studentRepo = MasterStudentEntity.getRepository()
            
            const result = await studentRepo.find()
            console.log(result)
            // const res = await client.query(myquery)
            // const client = this.DbConnection.getClient()
            // await client.query(myquery)
            // console.log(res.rows) // Hello world!
            // await client.end()
            return result
            // return "Data fetched successfully!"
        } catch(error) {
            console.log('error occured while querying',error)
            throw new InternalServerErrorException()
        }
        // return "Hello world!";
    }

    async getMasterRecordById(id: string) {

        const studentRepo = MasterStudentEntity.getRepository()
        const res = await studentRepo.findOne(id)

        if(!res) {
            throw new NotFoundException()
        }
        return res

        // const query = `SELECT * FROM "MasterStudents" WHERE id='${id}';`
        // const res = await client.query(query)
        // return res
    }
    async insertData(data: any) {

        try {

            const studentRepo = MasterStudentEntity.getRepository()
            const res = await studentRepo.save(data)
            // const res = await client.query(query)
            return res.id

        } catch(e) {
            // console.log('error occured!', e)
            // if(e.code && e.code == 23505)
            //     throw new ConflictException()
            // else  if(e.code && e.code == '22P02'){
            //     throw new NotAcceptableException('Input not accepted!')
            // }
                
            throw new InternalServerErrorException(e)

        }
    }

    async updateData(id: string, data: any) {

        const studentRepo = MasterStudentEntity.getRepository()
        const newdata = await this.getMasterRecordById(id)
        const res = await studentRepo.update(id, data)
        return newdata.id
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
