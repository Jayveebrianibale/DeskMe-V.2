import mongoose from 'mongoose';

async function connect() {
    try {
        const uri = 'mongodb+srv://johmmackfaeldonia:uEt4sknwh5bseKnr@cluster0.smcs02p.mongodb.net/booking'; // Replace with your MongoDB URI
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

connect();
