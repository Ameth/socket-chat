const express = require("express");
const { createServer } = require("http");
const path = require("path");
const cookieParser = require("cookie-parser");
const realTimeServer = require("./realTimeServer.js");

const app = express();
const httpServer = createServer(app);

// Configuraciones
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.use(cookieParser());

// Rutas
app.use(require("./routes"));

// Public
app.use(express.static(path.join(__dirname, "public")));

// Iniciar servidor
httpServer.listen(app.get("port"), () => {
  console.log("Servidor corriendo en el puerto " + app.get("port"));
});

// Llamar al servidor de Socket.io
realTimeServer(httpServer);
