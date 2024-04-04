import { Request, Response } from "express";
import MoviesModel from "../../models/Movies";
import { RestResponse } from "../../helpers/RestResponse";

const index = async (req: Request, res: Response) => {
    try {
        const body = req.body

        if (!body) {
            throw Error
        }

        await MoviesModel.deleteOne(body)

        return RestResponse.success(res, "SUCESSO AO DELETAR FILME")
    } catch (err) {
        return RestResponse.error(res, "FALHA AO DELETAR FILME")
    }
};

export default index;
