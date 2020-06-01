import { IsIn, IsOptional, IsDate, IsString, IsAlpha, IsNumber, IsAlphanumeric} from 'class-validator'
import { coeStatusEnum, studentTypeEnum } from "../model/master-student.entity";
import { genderEnum } from "../model/master-student.entity";
import { Type } from "class-transformer";
export class UpdateMasterRecordDto {

    @IsOptional()
    @IsIn([
        coeStatusEnum.Approved,
        coeStatusEnum.Studying
    ])
    coeStatus: coeStatusEnum

    @IsOptional()
    @IsAlpha()
    coeType: string

    @IsOptional()
    @IsNumber()
    providerStudentID: number

    @IsOptional()
    @IsAlpha()
    firstName: string

    @IsOptional()
    @IsAlpha()
    familyName: string

    @IsOptional()
    @IsIn([
        genderEnum.Female,
        genderEnum.Male,
        genderEnum.Other
    ])
    gender: genderEnum

    @IsOptional()
    @IsDate()
    @Type(() => Date)
    dateOfBirth: Date

    @IsOptional()
    @IsAlpha()
    nationality: string

    @IsOptional()
    @IsAlpha()
    courseName: string;

    @IsOptional()
    @Type(() => Date)
    proposedStartDate: Date;

    @IsOptional()
    @Type(() => Date)
    proposedEndDate: Date;

    @IsOptional()
    @Type(() => Date)
    visaEffectiveDate: Date;

    @IsOptional()
    @IsAlphanumeric()
    enrolmentComments: string;

    @IsOptional()
    @IsAlphanumeric()
    locationName: string;

    @IsOptional()
    @IsIn([
        studentTypeEnum.Commencing
    ])
    studentType: studentTypeEnum;

    @IsOptional()
    @Type(() => Date)
    lastChangedDateTime: Date;
    

    @IsOptional()
    @Type(() => Date)
    createDateTime: Date;

}