const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const routes = require("./routes");

// Conexao com server mongoDB
mongoose.connect('mongodb+srv://chrigor:admin@cluster0-dfduy.mongodb.net/week10?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(cors()); // permite acesso de outros endereços
app.use(express.json());
app.use(routes);

var port = process.env.PORT || 8080;
app.listen(port);
