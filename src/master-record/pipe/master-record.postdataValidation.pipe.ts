import { Injectable, PipeTransform, BadRequestException } from "@nestjs/common";
import { coeStatusEnum } from "src/model/master-student.entity";

@Injectable()
export class MasterRecordPostValidationPipe implements PipeTransform{


    transform(value: any) {

        const myobj: object = {
            'coeStatus':'Studying',
            'firstName':'Martin'
        }
        if(!coeStatusEnum[value.coeStatus]) {
            throw new BadRequestException('invalid coeStatus')
        }
        console.log(myobj)
        throw new Error("Method not implemented.");
    }

    
}