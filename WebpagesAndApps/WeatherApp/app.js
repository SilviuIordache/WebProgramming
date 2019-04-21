window.addEventListener('load', () => {
	let long;
	let lat;

	let temperatureDescription = document.querySelector(".temperature-description");
	let temperatureDegree = document.querySelector(".temperature-degree");
	let locationTimezone = document.querySelector(".location-timezone");

	let temperatureSection = document.querySelector('.temperature');
	const temperatureSpan = document.querySelector('.temperature span');

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat = position.coords.latitude;
			const proxy = 'https://cors-anywhere.herokuapp.com/';
			const api = `${proxy}https://api.darksky.net/forecast/ffd253d26ee6a2690d79b74747cb6c6d/${lat},${long}`;


			fetch(api)
				.then(response => {
					return response.json();
				})
				.then(data => {
					const { temperature, summary, icon } = data.currently;
					const {timezone} = data;
					//Set DOM Elements from the API
					temperatureDegree.textContent = temperature;
					temperatureDescription.textContent = summary;
					locationTimezone.textContent = timezone;

					//Formula for C to F conversion
					let celsius = (temperature - 32) * (5 / 9);

					//Set Icon
					setIcons(icon, document.querySelector(".icon"));

					//Change temperature to Celsius/Farneheit
					temperatureSection.addEventListener('click', () => {
						if (temperatureSpan.textContent === "F°") {
							temperatureSpan.textContent = "C°";
							temperatureDegree.textContent = Math.floor(celsius);
						} else {
							temperatureSpan.textContent = "F°";
							temperatureDegree.textContent = Math.floor(temperature);
						}
					})

				})
		});


	}

	function setIcons(icon, iconID) {
		const skycons = new Skycons({ color: "white" });
		const currentIcon = icon.replace(/-/g, "_").toUpperCase();
		skycons.play();
		return skycons.set(iconID, Skycons[currentIcon]);
	}
});