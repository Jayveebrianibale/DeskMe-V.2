import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://johmmackfaeldonia:uEt4sknwh5bseKnr@cluster0.smcs02p.mongodb.net/booking')
    .then(() => {
        console.log('MongoDB connected successfully');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });


// Define a simple schema and model
const Schema = mongoose.Schema;
const demoSchema = new Schema({
    name: String,
    age: Number
});
const DemoModel = mongoose.model('Demo', demoSchema);

// Define routes
app.get('/api/demo', async (req, res) => {
    try {
        const demos = await DemoModel.find();
        res.json(demos);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.post('/api/demo', async (req, res) => {
    try {
        const newDemo = new DemoModel(req.body);
        await newDemo.save();
        res.status(201).json(newDemo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
