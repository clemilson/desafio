import { ErrorRequestHandler } from 'express'

export const handler : ErrorRequestHandler = (err, req, res, next) => {
	if(err.status) {
		res.status(err.status).json({ msg: err.message })
	} else {
		res.status(500).json({ erro: 'Houve um erro interno', msg: err.message})
	}
}
