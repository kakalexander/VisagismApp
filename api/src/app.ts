// src/app.ts
import express from 'express';
// import usuarioRoutes from './routes/usuarioRoutes';

const app = express();

// Middleware para JSON
app.use(express.json());

// Rotas
// app.use('/api/usuarios', usuarioRoutes);

// Exporta o app para ser usado no server.ts
export default app;
