import { Body, Controller, Get, Post, Put, UsePipes } from "@nestjs/common";
import { TagsService } from "./tags.service";
import { CreateTagDto } from "./dto/create-tag.dto";
import { ValidationDataPipe } from "../helpers/pipes/validation-data.pipe";
import { UpdTagDto } from "./dto/upd-tag.dto";

@Controller('tags')
export class TagsController {

  constructor(
    private tagsService: TagsService
  ) {
  }


  @Post('create')
  async create(@Body() dto: CreateTagDto) {
    return await this.tagsService.create(dto);
  }


  @Get('all')
  async getAll() {
    return await this.tagsService.getAll()
  }

  @Put('upd')
  async upd(@Body() dto: UpdTagDto) {
    return await this.tagsService.updTag(dto)
  }
}