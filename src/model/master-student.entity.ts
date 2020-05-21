import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, CreateDateColumn, BaseEntity } from 'typeorm';

enum coeStatusEnum {
    Studying = 'Studying',
    Approved = 'Approved'
}

enum genderEnum {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other'
}

enum studentTypeEnum {Commencing ='Commencing'}

@Entity()
export  class MasterStudentEntity extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('enum', { name: 'coeStatusEnum', enum: coeStatusEnum, nullable: false })
    coeStatus: coeStatusEnum;

    @Column({ type: 'varchar', length: 300, nullable: false })
    coeType: string;

    @Column({ type: 'varchar', length: 300, nullable: false })
    providerStudentID: number;

    @Column({ type: 'varchar', length: 300, nullable: false })
    firstName: string;

    @Column({ type: 'varchar', length: 300, nullable: false })
    familyName: string;

    @Column('enum',{ name: 'genderEnum', enum: genderEnum, nullable: false })
    gender: genderEnum;

    @Column({ type: 'timestamptz', nullable: false})
    dateOfBirth: Date;

    @Column({ type: 'varchar', length: 300, nullable: false })
    nationality: string;

    @Column({ type: 'varchar', length: 300, nullable: false })
    courseName: string;

    @Column({ type: 'timestamptz', nullable: false})
    proposedStartDate: Date;

    @Column({ type: 'timestamptz', nullable: false})
    proposedEndDate: Date;

    @Column({ type: 'timestamptz', nullable: false})
    visaEffectiveDate: Date;

    @Column({ type: 'varchar', length: 300, nullable: true })
    enrolmentComments: string;

    @Column({ type: 'varchar', length: 300, nullable: false })
    locationName: string;

    @Column('enum', { name: 'studentTypeEnum', enum: studentTypeEnum, nullable: false })
    studentType: studentTypeEnum;

    @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    lastChangedDateTime: Date;

    @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
    createDateTime: Date;
}

export {coeStatusEnum, genderEnum, studentTypeEnum}