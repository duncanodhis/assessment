import { Controller, Get } from '@nestjs/common';
import {AppService} from "./app.service";

@Controller('hacker')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('news')
getWeatherForecasts() {
   return this.appService.getHackerNews();
}
}
