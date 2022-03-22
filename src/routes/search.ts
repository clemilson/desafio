import { Router } from "express";
export default (router: Router): void => {
	router.get('/teste', () => console.log('##teste##'))
}
