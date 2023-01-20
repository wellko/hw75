import express = require("express");

const Vigenere = require('caesar-salad').Vigenere;
const encodeRouter = express.Router();

encodeRouter.post('/', async (req, res) => {
    const Cipher = await Vigenere.Cipher(req.body.password).crypt(req.body.message);
    res.send({"encoded": Cipher});
});

export default encodeRouter;