import cors from "cors";
import express from "express";
import prisma from "./config/prisma.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.get("/api/database/health", async (_request, response) => {
  try {
    await prisma.$queryRaw`SELECT 1`;

    response.status(200).json({
      success: true,
      message: "Conexión con SQLite establecida correctamente",
    });
  } catch (error) {
    console.error(error);

    response.status(500).json({
      success: false,
      message: "No fue posible conectar con SQLite",
    });
  }
});

export default app;