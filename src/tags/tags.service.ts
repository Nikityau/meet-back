import { Injectable } from "@nestjs/common";
import { CreateTagDto } from "./dto/create-tag.dto";
import { InjectModel } from "@nestjs/sequelize";
import { TagsModel } from "./tags.model";
import { BaseCrudService } from "../shared/base-crud.service";

@Injectable()
export class TagsService {

  constructor(
    @InjectModel(TagsModel) private tagRep: typeof TagsModel,
    private baseCrud: BaseCrudService
  ) {

  }

  async create(dto: CreateTagDto) {
    return await this.tagRep.create(dto)
  }

  async getAll() {
    return await this.tagRep.findAll()
  }

  async getTag(tag: string) {
    return await this.tagRep.findOne({
      where: {
        tag
      }
    })
  }
}