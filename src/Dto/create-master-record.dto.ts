import { IsNotEmpty, IsIn, IsOptional, IsDate, IsAlpha, NotContains} from 'class-validator'
import { coeStatusEnum, studentTypeEnum } from "../model/master-student.entity";
import { genderEnum } from "../model/master-student.entity";
import { Type } from "class-transformer";
export class CreateMasterRecordDto {

    @IsOptional()
    @NotContains("!@#$%^&*()")
    id: string

    @IsNotEmpty()
    @IsIn([
        coeStatusEnum.Approved,
        coeStatusEnum.Studying
    ])
    coeStatus: coeStatusEnum

    @IsNotEmpty()
    coeType: string

    @IsNotEmpty()
    providerStudentID: number

    @IsNotEmpty()
    @IsAlpha()
    firstName: string

    @IsNotEmpty()
    familyName: string

    @IsNotEmpty()
    @IsIn([
        genderEnum.Female,
        genderEnum.Male,
        genderEnum.Other
    ])
    gender: genderEnum

    @IsNotEmpty()
    @IsDate()
    @Type(() => Date)
    dateOfBirth: Date

    @IsNotEmpty()
    nationality: string

    @IsNotEmpty()
    courseName: string;

    @IsNotEmpty()
    @Type(() => Date)
    proposedStartDate: Date;

    @IsNotEmpty()
    @Type(() => Date)
    proposedEndDate: Date;

    @IsNotEmpty()
    @Type(() => Date)
    visaEffectiveDate: Date;

    @IsOptional()
    enrolmentComments: string;

    @IsNotEmpty()
    locationName: string;

    @IsNotEmpty()
    @IsIn([
        studentTypeEnum.Commencing
    ])
    studentType: studentTypeEnum;

    @IsNotEmpty()
    @Type(() => Date)
    lastChangedDateTime: Date;
    

    @IsNotEmpty()
    @Type(() => Date)
    createDateTime: Date;

}