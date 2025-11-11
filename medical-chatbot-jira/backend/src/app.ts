import express from 'express';
import bodyParser from 'body-parser';
import chatRoutes from './routes/chat';

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/chat', chatRoutes);

// Health check route
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default app;