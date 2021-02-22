let weatherApp = new Vue({
    el: '#app',
    data: {
        sunrise: '',
        sunset: '',
        pressure: '',
        humidity: '',
        visibility: '',
        timezone: '',
        timezone_offset: '',
        temp: '',
        feels_like: '',
        latitude: '',
        longitude: '',
        seen:false

    },
    methods: {
        getUpdate() {
            console.log("latitude is" + this.latitude);
            console.log("longitude is" + this.longitude);
            let url = "http://localhost:3000/climate?latitude=" + this.latitude + "&longitude=" + this.longitude;
            axios
                .get(url)
                .then(response => {
                    console.log(response.data);
                    this.temp = response.data.current.temp;
                    this.humidity = response.data.current.humidity;
                    this.pressure = response.data.current.pressure;
                    this.feels_like = response.data.current.feels_like;
                    this.sunrise = response.data.current.sunrise;
                    this.sunset = response.data.current.sunset;
                    this.visibility = response.data.current.visibility;
                    this.timezone = response.data.timezone;
                    this.timezone_offset = response.data.timezone_offset;
                    this.seen = true;

                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
   

});