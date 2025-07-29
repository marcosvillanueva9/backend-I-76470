import express from 'express';
import mongoose from 'mongoose';
import estudiantesRouter from './routes/estudiantes.router.js';

const app = express();
const PORT = 8080;

mongoose.connect('mongodb://localhost:27017/colegio')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('MongoDB connection error:', error);
});

app.use(express.json());
app.use('/api/estudiantes', estudiantesRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});