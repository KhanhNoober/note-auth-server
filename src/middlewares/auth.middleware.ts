import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  
  constructor(private authService: AuthService) {}

  async use(req: any, res: any, next: () => void) {
    let idToken = req.headers['authorization'];
    if(idToken == undefined) {
      console.log('Unauthorized');
      res.status(401).send('Unauthorized');
      return;
    }
    let verifiedToken = await this.authService.verifyToken(idToken);
    if(verifiedToken == null) {
      console.log('Permission denied');
      res.status(401).send('Permission denied');
      return;
    }
    req.user = verifiedToken;
    next();
  }
}
