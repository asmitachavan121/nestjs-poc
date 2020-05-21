import { IsIn, IsNotEmpty, IsOptional } from 'class-validator'
import { coeStatusEnum, genderEnum, studentTypeEnum } from '../../model/master-student.entity'
import { Type } from 'class-transformer'

export class UpdateMasterRecordDto {
    @IsOptional()
    @IsIn([
        coeStatusEnum.Approved,
        coeStatusEnum.Studying
    ])
    coeStatus: coeStatusEnum

    @IsOptional()
    coeType: string

    @IsOptional()
    providerStudentID: number

    @IsOptional()
    firstName: string

    @IsOptional()
    familyName: string

    @IsOptional()
    @IsIn([
        genderEnum.Female,
        genderEnum.Male,
        genderEnum.Other
    ])
    gender: genderEnum

    @IsOptional()
    @Type(() => Date)
    dateOfBirth: Date

    @IsOptional()
    nationality: string

    @IsOptional()
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
    enrolmentComments: string;

    @IsOptional()
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