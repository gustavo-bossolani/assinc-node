import { Request, Response, NextFunction } from 'express';
import { ExpressMiddlewareInterface } from 'routing-controllers';

export class LogRequestMiddleware implements ExpressMiddlewareInterface {
  use(request: Request, _: Response, next: NextFunction) {
    console.log('HEADERS', request.headers);
    console.log(request.method);
    console.log(request.baseUrl);
    console.log('BODY', request.body);
    console.log('PARAMS', request.params);
    console.log('QUERY', request.query);
    next();
  }
}