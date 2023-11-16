import fs from "fs";
import jsonServer from "json-server";
import path from "path";
import "dotenv/config";

const __dirname = path.resolve();
const server = jsonServer.create();
const router = jsonServer.router(
  path.resolve(__dirname, "./json-server/db.json")
);

const port = process.env.JSON_SERVER_PORT || 8000;

server.use(jsonServer.defaults({}));
server.use(jsonServer.bodyParser);

// Нужно для небольшой задержки, чтобы запрос проходил не мгновенно, имитация реального апи
server.use(async (req, res, next) => {
  await new Promise((res) => {
    setTimeout(res, 800);
  });
  next();
});

// Эндпоинт для логина
server.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;
    const db = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, "db.json"), "UTF-8")
    );
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFromBd) {
      return res.json(userFromBd);
    }

    return res.status(403).json({ message: "User not found" });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: e.message });
  }
});

// проверяем, авторизован ли пользователь
server.use((req, res, next) => {
  // console.log("req", req.url);

  // const urlWithAuth = ["/profile", "/comments"];

  // if (!req.headers.authorization) {
  //   return res.status(403).json({ message: "AUTH ERROR" });
  // }

  next();
});

server.use(router);

// запуск сервера
server.listen(process.env.JSON_SERVER_PORT, () => {
  console.log("server is running on " + port + " port");
});
