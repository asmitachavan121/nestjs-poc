import { Controller, Delete } from '@nestjs/common';
import { JobsService } from './jobs.service';

@Controller('jobs')
export class JobsController {

    constructor(private readonly JobsService:JobsService) {}

   @Delete(':id')
   deleteJob(id):string {

    this.JobsService.deleteJobs(id)

    return 'deleted job successfully!'
   }
}
