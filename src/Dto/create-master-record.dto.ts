import { IsNotEmpty, IsIn, IsOptional, IsDate, IsAlpha, NotContains} from 'class-validator'
import { coeStatusEnum, studentTypeEnum } from "../model/master-student.entity";
import { genderEnum } from "../model/master-student.entity";
import { Type } from "class-transformer";
import { ApiProperty } from '@nestjs/swagger';
export class CreateMasterRecordDto {

    @ApiProperty()
    @IsOptional()
    @NotContains("!@#$%^&*()")
    id: string

    @ApiProperty()
    @IsNotEmpty()
    @IsIn([
        coeStatusEnum.Approved,
        coeStatusEnum.Studying
    ])
    coeStatus: coeStatusEnum

    @ApiProperty()
    @IsNotEmpty()
    coeType: string

    @ApiProperty()
    @IsNotEmpty()
    providerStudentID: number

    @ApiProperty()
    @IsNotEmpty()
    @IsAlpha()
    firstName: string

    @ApiProperty()
    @IsNotEmpty()
    familyName: string

    @ApiProperty()
    @IsNotEmpty()
    @IsIn([
        genderEnum.Female,
        genderEnum.Male,
        genderEnum.Other
    ])
    gender: genderEnum

    @ApiProperty()
    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    dateOfBirth: Date

    @ApiProperty()
    @IsNotEmpty()
    nationality: string

    @ApiProperty()
    @IsNotEmpty()
    courseName: string;

    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Date)
    proposedStartDate: Date;

    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Date)
    proposedEndDate: Date;

    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Date)
    visaEffectiveDate: Date;

    @ApiProperty()
    @IsOptional()
    enrolmentComments: string;

    @ApiProperty()
    @IsNotEmpty()
    locationName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsIn([
        studentTypeEnum.Commencing
    ])
    studentType: studentTypeEnum;

    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Date)
    lastChangedDateTime: Date;
    

    @ApiProperty()
    @IsNotEmpty()
    @Type(() => Date)
    createDateTime: Date;

}