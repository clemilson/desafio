"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const searchDistanceAdressesController_1 = require("../controllers/searchDistanceAdressesController");
exports.default = (router) => {
    router.get('/searchDistanceAdresses', new searchDistanceAdressesController_1.SearchDistanceAdressesControllers().handle);
};
