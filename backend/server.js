const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

const BattleRoutes= require('./routes/battleRoutes')
const BattleTheme = require('./routes/battleThemeRoutes')
const Quiz = require("./routes/QuizRoutes.js")


app.use(express.json({limit:'25mb'}));
app.use(express.urlencoded({limit:'25mp'}))
app.use(cors());
// app.unsubscribe(routes);
// app.get("/", (req, res) => {
//   res.send("hello");
// });
app.use('/battle',BattleRoutes)
app.use('/battleTheme',BattleTheme);
app.use('/quiz',Quiz)

const PORT = process.env.port || 200;
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log(`Connected to MongoDB...`))
  .catch((err) => console.log(err));
app.listen(PORT, () => {
  console.log(`Listen at port no. ${PORT}`);
});
