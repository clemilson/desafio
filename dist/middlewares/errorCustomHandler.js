"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorCustomHandler = void 0;
const errorCustomHandler = (err, req, res, next) => {
    if (err.status) {
        res.status(err.status).json({ msg: err.message });
    }
    else {
        res.status(500).json({ erro: 'Houve um erro interno', msg: err.message });
    }
};
exports.errorCustomHandler = errorCustomHandler;
