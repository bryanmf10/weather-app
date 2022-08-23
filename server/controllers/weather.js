import express from 'express';
import Weather from '../models/weather.js';

const router = express.Router();

export const deleteAll = async(req, res) => {
    await Weather.remove();
    res.json({ message: "Deleted succesfully" });
}

export const createWeather = async(req, res) => {
    try {
        const { id, date, location, hourly_temperature } = req.body;
        const newWeather = new Weather({ id, date, location, hourly_temperature });
        await newWeather.save();
        res.status(201).json(newWeather);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getAll = async(req, res) => {
    try {
        const weather = await Weather.find();
        res.status(200).json(weather);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getWeather = async(req, res) => {
    try {
        const { date, location } = req.body;
        const myQuery = {
            "date": date,
            "location.city": location.city,
            "location.country": location.country
        }
        const weather = await Weather.find(myQuery);
        res.status(200).json(weather);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export default router;