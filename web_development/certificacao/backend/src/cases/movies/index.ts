import { Request, Response } from "express";
import MoviesModel from "../../models/Movies";
import { RestResponse } from "../../helpers/RestResponse";

const index = async (req: Request, res: Response) => {
    try {
        const body = req.body

        if (!body) {
            throw Error
        }

        return RestResponse.success(res, "SUCESSO AO INSERIR FILME", await MoviesModel.find({}))
    } catch (err) {
        return RestResponse.error(res, "FALHA AO INSERIR FILME")
    }
};

export default index;
