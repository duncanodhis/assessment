import {Module} from "@nestjs/common";
import { HttpModule } from '@nestjs/axios';
import { AppService } from './app.service';
import { AppController } from './app.controller';

@Module({
  imports: [
    HttpModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}