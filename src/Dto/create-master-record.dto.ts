import { IsNotEmpty, IsIn, IsOptional, IsDate, IsAlpha, NotContains, IsUUID, IsString, IsNumber} from 'class-validator'
import { coeStatusEnum, studentTypeEnum } from "../model/master-student.entity";
import { genderEnum } from "../model/master-student.entity";
import { Type } from "class-transformer";
import { ApiProperty } from '@nestjs/swagger';
export class CreateMasterRecordDto {

    @ApiProperty({
        type: String,
        // description: 'id of the master student'
    })
    @IsOptional()
    @IsUUID()
    id: string

    @ApiProperty({
        enum: coeStatusEnum,
        // description: 'coeStatus of the master student'
    })
    @IsNotEmpty()
    @IsIn([
        coeStatusEnum.Approved,
        coeStatusEnum.Studying
    ])
    coeStatus: coeStatusEnum

    @ApiProperty({ 
        type: String,
        // description: 'coeType of the master student'
    })
    @IsString()
    @IsNotEmpty()
    @IsAlpha()
    coeType: string

    @ApiProperty({
        type: Number,
        // description: 'providerStudentID of the master student'
    })
    @IsNotEmpty()
    @IsNumber()
    providerStudentID: number

    @ApiProperty({
        type: String,
        // description: 'firstName of the master student'
    })
    @IsNotEmpty()
    @IsAlpha()
    firstName: string

    @ApiProperty({
        type: String,
    })
    @IsAlpha()
    @IsNotEmpty()
    familyName: string

    @ApiProperty({
        enum: genderEnum
    })
    @IsNotEmpty()
    @IsIn([
        genderEnum.Female,
        genderEnum.Male,
        genderEnum.Other
    ])
    gender: genderEnum

    @ApiProperty({
        type: Date
    })
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    dateOfBirth: Date

    @ApiProperty({
        type: String
    })
    @IsString()
    @IsNotEmpty()
    @IsAlpha()
    nationality: string

    @ApiProperty({
        type: String,
    })
    
    @IsNotEmpty()
    @IsString()
    @IsAlpha()
    courseName: string;

    @ApiProperty({
        type: Date
    })
    @IsNotEmpty()
    @Type(() => Date)
    proposedStartDate: Date;

    @ApiProperty({
        type: Date
    })
    @IsNotEmpty()
    @Type(() => Date)
    proposedEndDate: Date;

    @ApiProperty({
        type: Date,
    })
    @IsNotEmpty()
    @Type(() => Date)
    visaEffectiveDate: Date;

    @ApiProperty({
        type: String,
    })
    @IsOptional()
    @IsString()
    enrolmentComments: string;

    @ApiProperty({
        type: String,
    })
    @IsNotEmpty()
    @IsString()
    locationName: string;

    @ApiProperty({
        enum: studentTypeEnum
    })
    @IsNotEmpty()
    @IsIn([
        studentTypeEnum.Commencing
    ])
    studentType: studentTypeEnum;

    @ApiProperty({
        type: Date
    })
    @IsNotEmpty()
    @Type(() => Date)
    lastChangedDateTime: Date;
    

    @ApiProperty({
        type: Date
    })
    @IsNotEmpty()
    @Type(() => Date)
    createDateTime: Date;

}