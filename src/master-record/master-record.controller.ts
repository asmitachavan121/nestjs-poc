import {Controller, Get, Post, Body, UseInterceptors, UploadedFile, Patch, Delete, Param, ValidationPipe, UsePipes} from '@nestjs/common';
import {MasterRecordService} from "./master-record.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateMasterRecordDto } from 'src/Dto/create-master-record.dto';
import { UpdateMasterRecordDto } from './pipe/update-master-record.dto';
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
    getMasterRecordById(@Param('id') id: string) {

        return this.masterRecordService.getMasterRecordById(id)
    }
    @Post('upload')
    @UsePipes(ValidationPipe)
    // @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    async uploadData(@Body(ValidationPipe) data: CreateMasterRecordDto) {
        // console.log(data)
        try {
           return this.masterRecordService.insertData(data);

        }catch(error) {
            return error
        }
        // return data
    }

    @Patch('update/:id')
    @UsePipes(ValidationPipe)
    updateData(@Param('id') id:string, @Body() data: UpdateMasterRecordDto) {

        return this.masterRecordService.updateData(id, data)
    }

    @Delete('delete/:id')
    deleteData(@Param('id') id: number) {


        // console.log(id)
        return this.masterRecordService.deleteData(id)
    }


    @Post('uploadfile')
    @UseInterceptors(FileInterceptor('file'))
        uploadFile(@UploadedFile() file) {
        console.log(file);
    }


    // @Post('uploadfile')
    // @UseInterceptors(FileInterceptor('file'))
    // uploadFile(@UploadedFile() file) {

        
    //     console.log(file);
    //     return file
    // }
}
