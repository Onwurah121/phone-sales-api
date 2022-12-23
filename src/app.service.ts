import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createUser() {
    return 'User created Successfully'
  }

  getUser() {
    return 'All users gotten successfully'
  }

  addUser() {
    return 'User has been added successfully'
  }
}
