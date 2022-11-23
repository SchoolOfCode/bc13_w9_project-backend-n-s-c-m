import app from "./app.js";

const port = 3500;

app.listen(port, () => {
	console.log(`Server is now listening on http://localhost:${port}`);
});

app.listen(80, function () {
	console.log("CORS-enabled web server listening on port 80");
});
