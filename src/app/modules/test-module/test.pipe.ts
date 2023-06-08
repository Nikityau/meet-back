import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class TestTransformPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    console.log(value, metadata);

    value['title'] = '????';

    return value;
  }
}

@Injectable()
export class TestValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata): any {
    if (!('id' in value)) {
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST, {
        cause: new Error('id is not defined'),
        description: 'ok',
      });
    }

    return value;
  }
}
