const api_url = "http://localhost:5000/weather";

export default class WeatherController {
    static getAll = () => {
        let obj = {
            method: "GET",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Host': 'Host'
            })
        };
        return new Promise((resolve, reject) => {
            fetch(api_url, obj)
                .then(data => data.json())
                .then(datos => {
                    resolve(datos);
                })
                .catch(err => {
                    reject(err);
                });
        });
    }
}