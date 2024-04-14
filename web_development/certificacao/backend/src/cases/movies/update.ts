import { Request, Response } from "express";
import MoviesModel from "../../models/Movies";
import { RestResponse } from "../../helpers/RestResponse";

const update = async (req: Request, res: Response) => {
  try {
    const body = req.body

    if (!body) {
      throw Error
    }

    await MoviesModel.updateOne(body)

    return RestResponse.success(res, "SUCESSO AO ATUALIZAR FILME")
  } catch (err) {
    return RestResponse.error(res, "FALHA AO ATUALIZAR FILME")
  }
};

export default update;
