import { NextFunction, Request, Response } from "express";
import { SearchDistanceAdressesService } from "../services/searchDistanceAdressesService";

export class SearchDistanceAdressesControllers {
  async handle(req: Request, res: Response, next: NextFunction) {
		try {

			const service = new SearchDistanceAdressesService()

			const list = await service.GetListAddress(req.query)

			return res.json(list);

		} catch (error) {
			next(error)
		}
  }
}
