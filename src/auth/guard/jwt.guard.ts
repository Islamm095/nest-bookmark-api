import { AuthGuard } from '@nestjs/passport';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class jwtGuard extends AuthGuard('jwt') {
  constructor() {
    super();
  }
}
