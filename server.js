import app from "./app.js";

const port = 3500;

app.listen(port, () => {
	console.log(`Server is now listening on http://localhost:${port}`);
});
