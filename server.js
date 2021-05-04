const express = require("express");
var cors = require('cors')

const app = express();

// parse requests of content-type - application/json
app.use(express.json());

app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Portfolio-Server." });
});

require("./app/routes/pupil.routes.js")(app);
require("./app/routes/teacher.routes.js")(app);
require("./app/routes/schedule.routes.js")(app);
require("./app/routes/announcement.routes.js")(app);
require("./app/routes/perfomance.routes.js")(app);
require("./app/routes/achievement.routes.js")(app);
require("./app/routes/olympiad.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
