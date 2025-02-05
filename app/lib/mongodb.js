import mongoose from 'mongoose';

export default async function connectDB() {
  if (mongoose.connections[0].readyState) {
    console.log('Already Connected!!');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Not Connected', error);
    throw new Error(error);
  }
}
