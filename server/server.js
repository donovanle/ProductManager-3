const express = require("express")
const cors = require('cors');
const app = express()

require("./config/mongoose.config")

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

require("./routes/products.routes")(app);


app.listen(8000, () => console.log("the server is on port 8000"));   