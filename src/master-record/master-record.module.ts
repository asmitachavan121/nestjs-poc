import { Module, NestModule, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { MasterRecordController } from "./master-record.controller";
import { MasterRecordService } from "./master-record.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express';
import { configService } from '../config/config.service';
@Module({
    imports: [
        MulterModule.register({dest: './files',}),
        TypeOrmModule.forRoot(configService.getTypeOrmConfig())
      ],
    controllers: [MasterRecordController],
    providers: [MasterRecordService]
})

export class MasterRecordModule  {}

// export class MasterRecordModule implements NestModule {
//     configure(consumer: MiddlewareConsumer) {
//         consumer
//         .apply( MasterRecordMiddleware )
//         .forRoutes({path: '/*', method: RequestMethod.DELETE})
//     }

// }
