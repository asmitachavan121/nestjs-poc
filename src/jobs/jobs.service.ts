import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {

    deleteJobs(id:string) {
        
        return `deleted job ${id}`
    }
}
