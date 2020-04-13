import  express  from "express";
import dotenv  from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "It's working" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 listening on ${PORT}`)
  console.log(`APIs available at http://localhost:${PORT}`)
});
