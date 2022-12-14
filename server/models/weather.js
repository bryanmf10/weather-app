import Mongoose from 'mongoose';
const { Schema, model } = Mongoose;
const WeatherSchema = Schema({
    id: Number,
    date: String,
    location: {
        city: String,
        country: String
    },
    hourly_temperature: [Number],
});

export default model("weathers", WeatherSchema);