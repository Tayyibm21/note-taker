const express = require("express");

const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));