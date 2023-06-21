import { Body, Controller, Get, Post } from "@nestjs/common";
import { TagsService } from "./tags.service";
import { CreateTagDto } from "./dto/create-tag.dto";

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
}