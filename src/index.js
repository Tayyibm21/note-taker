const express = require("express");
const path = require("path");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.join(__dirname, "../public")));

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log(`Navigate to http://localhost:${PORT}`));