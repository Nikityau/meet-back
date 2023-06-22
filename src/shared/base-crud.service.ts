import { Injectable } from "@nestjs/common";
import { Model } from "sequelize-typescript";


// need to think about it
@Injectable()
export class BaseCrudService {

  // by pk
  async get(rep: any, pk: any ) {
    return await rep.findByPk(pk)
  }


  async create() {

  }


  async update() {

  }

  async delete() {

  }
}