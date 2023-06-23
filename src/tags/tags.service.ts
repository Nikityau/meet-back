import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CreateTagDto } from "./dto/create-tag.dto";
import { InjectModel } from "@nestjs/sequelize";
import { TagsModel } from "./tags.model";
import { BaseCrudService } from "../shared/base-crud.service";
import { UpdTagDto } from "./dto/upd-tag.dto";

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
    const tagF = await this.tagRep.findOne({
      where: {
        tag
      }
    })

    if(!tagF) {
      throw new HttpException(`tag:${tag} not found`, HttpStatus.NOT_FOUND)
    }

    return tagF
  }

  async updTag(dto: UpdTagDto) {
    const tag = await this.tagRep.findByPk(dto.tagId)
    if(!tag) {
      throw new HttpException('tag not found', HttpStatus.NOT_FOUND)
    }

    await tag.update({
      tag: dto.value
    })

    return dto
  }
}