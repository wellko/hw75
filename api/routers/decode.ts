import express = require("express");

const Vigenere = require('caesar-salad').Vigenere;
const decodeRouter = express.Router();

decodeRouter.post('/', async (req, res) => {
	const message = await Vigenere.Decipher(req.body.password).crypt(req.body.message);
	res.send({"decoded": message});
});

export default decodeRouter;