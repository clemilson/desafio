"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchDistanceAdressesControllers = void 0;
const searchDistanceAdressesService_1 = require("../services/searchDistanceAdressesService");
class SearchDistanceAdressesControllers {
    async handle(req, res, next) {
        try {
            const service = new searchDistanceAdressesService_1.SearchDistanceAdressesService();
            const distanceAdresses = await service.distanceAdresses(req.query.adresses);
            return res.json(distanceAdresses);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.SearchDistanceAdressesControllers = SearchDistanceAdressesControllers;
