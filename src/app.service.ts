import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      status: 'ok',
      service: 'oraculo-api',
      timestamp: new Date(),
    };
  }
}
