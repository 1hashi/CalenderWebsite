import cors from "cors";
import express, { Express } from "express";

const app: Express = express();
const port: number = 8080;

// TODO @since 08/06/2026 -- 23:34
app.use(cors({ origin: "*" }));

app.use(express.json());

app.listen(port, async () => {
    console.log(`API is running on http://localhost:${port}`);
});