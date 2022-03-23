import { NextFunction, Request, Response } from "express";
import { SearchDistanceAdressesService } from "../services/searchDistanceAdressesService";

export class SearchDistanceAdressesControllers {
  async handle(req: Request, res: Response, next: NextFunction) {
		try {
			const service = new SearchDistanceAdressesService()
			const distanceAdresses = await service.distanceAdresses(req.query.adresses as string)
			return res.json(distanceAdresses);

		} catch (error) {
			next(error)
		}
  }
}
