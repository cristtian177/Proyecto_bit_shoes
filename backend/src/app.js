const express = require("express");
const cors = require("cors");

const app = express();
const port = 5000;

require("./database");

app.use(cors());
app.use(express.json());

app.use("/shoes", require("./routes/shoes"));
app.use("/user", require("./routes/users"));
 
app.listen(port, () => {
  console.log("Puerto de conexion", port);
});
