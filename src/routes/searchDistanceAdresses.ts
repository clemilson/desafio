import { Router } from "express";
import { SearchDistanceAdressesControllers } from "../controllers/searchDistanceAdressesController";
export default (router: Router): void => {
	router.get('/searchDistanceAdresses', new SearchDistanceAdressesControllers().handle)
}
