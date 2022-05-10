import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { IUser, IItem } from "hacker-news-api-types";
import fetch from "node-fetch";
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class AppService {
    constructor(private httpService: HttpService) {}
    async getHackerNews() {
      const response = this.httpService
  .get('https://hacker-news.firebaseio.com/v0/item/17205865.json')
  .pipe(
    map((response) => response.data as IItem),

  );

return response;
    }
}





