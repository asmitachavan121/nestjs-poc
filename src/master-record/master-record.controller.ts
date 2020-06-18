import {Controller, Get, Post, Body, UseInterceptors, UploadedFile, Patch, Delete, Param, ValidationPipe, UsePipes, ParseUUIDPipe} from '@nestjs/common';
import {MasterRecordService} from "./master-record.service";
import { FileInterceptor } from "@nestjs/platform-express";
import { CreateMasterRecordDto } from '../Dto/create-master-record.dto'
import { UpdateMasterRecordDto } from '../Dto/update-master-record.dto';
import { MasterStudentEntity } from 'src/model/master-student.entity';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
// import { genderEnum } from "../model/master-student.entity"


@ApiTags('master-record')
@Controller('master-record')
export class MasterRecordController {
    constructor(private readonly masterRecordService: MasterRecordService) {}

    @Get()
    @ApiResponse({ status: 200, description: 'The record has been successfully fetched.'})
    @ApiResponse({ status: 500, description:'Internal server error'})
    getMasterRecord() {      

        // const mygender: genderEnum =  genderEnum.Female
        // console.log(mygender)
        return this.masterRecordService.getMasterRecords();

    }

    @Get(':id')
    @ApiResponse({ status: 200, description: 'The record has been successfully fetched.'})
    @ApiResponse({ status: 500, description:'Internal server error'})
    getMasterRecordById(@Param('id', ParseUUIDPipe) id: string) {

        return this.masterRecordService.getMasterRecordById(id)
    }
    @Post('upload')
    @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 500, description:'Internal server error'})
    @UsePipes(ValidationPipe)
    // @ApiResponse({ status: 201, description: 'The record has been successfully created.'})
    async uploadData( @Body(ValidationPipe) data: CreateMasterRecordDto): Promise<MasterStudentEntity> {
        try {
           return this.masterRecordService.insertData(data);

        }catch(error) {
            return error
        }
        // return data
    }

    @Patch('update/:id')
    @ApiResponse({ status: 200, description: 'The record has been successfully updated.'})
    @ApiResponse({ status: 500, description:'Internal server error'})
    @UsePipes(ValidationPipe)
    updateData(@Param('id', ParseUUIDPipe) id:string, @Body() data: UpdateMasterRecordDto) {

        // console.log('data is = ',data)
        return this.masterRecordService.updateData(id, data)
    }

    @Delete('delete/:id')
    @ApiResponse({ status: 200, description: 'The record has been successfully deleted.'})
    @ApiResponse({ status: 500, description:'Internal server error'})
    deleteData(@Param('id', ParseUUIDPipe) id: string) {
        return this.masterRecordService.deleteData(id)
    }


    @Post('uploadfile')
    @ApiResponse({ status: 200, description: 'The record has been successfully created.'})
    @ApiResponse({ status: 500, description:'Internal server error'})
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
