import { Request, Response } from "express";
import MoviesModel from "../../models/Movies";
import { RestResponse } from "../../helpers/RestResponse";

const create = async (req: Request, res: Response) => {
  try {
    const body = req.body

    if (!body) {
      throw Error
    }

    await MoviesModel.create(body)

    return RestResponse.success(res, "SUCESSO AO INSERIR FILME")
  } catch (err) {
    return RestResponse.error(res, "FALHA AO INSERIR FILME")
  }
};

export default create;
