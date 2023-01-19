import encodeRouter from "./routers/encode";
import decodeRouter from "./routers/decode";
import cors = require("cors");
import express = require("express");


const app = express();
const port = 8000;

app.use(express.json());
app.use(cors())

app.use("/encode", encodeRouter);
app.use("/decode", decodeRouter);

app.listen(port, () => {
	console.log(`Server started on ${port} port!`);
});