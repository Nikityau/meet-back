import {
  Body,
  Controller,
  ForbiddenException,
  Get,
  GoneException,
  HttpException,
  HttpStatus,
  NotImplementedException,
  ParseIntPipe,
  Query,
  UseFilters,
  UsePipes,
} from '@nestjs/common';
import { TestHttpExceptionFilter } from './test.exception';
import { TestDTO } from './test.dto';
import { TestTransformPipe, TestValidatePipe } from './test.pipe';

@Controller('test')
export class TestController {
  @Get('error')
  @UseFilters(new TestHttpExceptionFilter())
  getError() {
    throw new NotImplementedException();
  }

  @Get('status')
  getInfo() {
    return {
      'controller-type': 'test',
      status: 'ok',
    };
  }

  @Get('pipe')
  @UseFilters(new TestHttpExceptionFilter())
  @UsePipes(TestTransformPipe)
  @UsePipes(TestValidatePipe)
  getPipe(@Body() testDTO: TestDTO) {
    console.log(testDTO);

    return {
      id: '???',
    };
  }
}
