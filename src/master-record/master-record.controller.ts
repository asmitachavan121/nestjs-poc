import {Controller, Get, Post, Body, UseInterceptors, UploadedFile, Patch, Delete, Param} from '@nestjs/common';
import {MasterRecordService} from "./master-record.service";
import { FileInterceptor } from "@nestjs/platform-express";
// import { genderEnum } from "../model/master-student.entity"

@Controller('master-record')
export class MasterRecordController {
    constructor(private readonly masterRecordService: MasterRecordService) {}

    @Get()
    getMasterRecord() {      

        // const mygender: genderEnum =  genderEnum.Female
        // console.log(mygender)
        return this.masterRecordService.getMasterRecords();

    }

    @Get(':id')
    getMasterRecordById(@Param('id') id: number) {

        return this.masterRecordService.getMasterRecordById(id)
    }
    @Post('upload')
    // @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    async uploadData(@Body() data: any) {
        // console.log(data)
        try {
           return this.masterRecordService.insertData(data);

        }catch(error) {
            return error
        }
        // return data
    }

    @Patch('update')
    updateData(@Body() data: any) {
        console.log(data.title)
        return data
    }

    @Delete('delete/:id')
    deleteData(@Param('id') id: number) {


        // console.log(id)
        return this.masterRecordService.deleteData(id)
    }


    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file) {

        
        // const mygender: genderEnum =  genderEnum.Female
        // console.log(mygender)
        console.log(file);
    }
}
