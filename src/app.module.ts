import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MasterRecordController } from './master-record/master-record.controller';
// import { MasterRecordService } from './master-record/master-record.service';
import { MulterModule } from '@nestjs/platform-express';
import { configService } from './config/config.service';
import { MasterRecordModule } from './master-record/master-record.module';

@Module({
  imports: [
    MulterModule.register({dest: './files',}),
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    MasterRecordModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
