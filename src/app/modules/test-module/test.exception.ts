import {
  Catch,
  HttpException,
  ExceptionFilter,
  ArgumentsHost,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { filter, of } from 'rxjs';

@Catch()
export class TestHttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): any {
    console.log(host.getType());

    const obs = of(host).pipe(filter((el) => el.getType() == 'http'));
    obs.subscribe((v) => {
      const ctx = v.switchToHttp();
      const res = ctx.getResponse<Response>();
      const req = ctx.getRequest<Request>();
      const status = exception.getStatus();

      res.status(status).json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: req.url,
        cause: exception.message,
      });
    });
  }
}
