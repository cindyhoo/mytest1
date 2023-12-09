import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return '안녕 별똥별의 우주!';
  }
}
