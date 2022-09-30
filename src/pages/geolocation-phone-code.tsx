import { phoneCodes } from "assets";
import axios from "axios";
import React, { useEffect, useState } from "react";

const GeolocationPhoneCode = ({
	onPhoneCodeFound,
}: {
	onPhoneCodeFound: (phoneCode: string) => void;
}) => {
	const [ip, setIp] = useState("");
	useEffect(() => {
		if ("geolocation" in navigator) {
			// navigator.geolocation.getCurrentPosition((position) => {
			// 	const options = {
			// 		method: 'GET',
			// 		url: 'https://google-maps-geocoding.p.rapidapi.com/geocode/json',
			// 		params: {latlng: `${position.coords.latitude},${position.coords.longitude}`, language: 'en'},
			// 		headers: {
			// 			'X-RapidAPI-Host': 'google-maps-geocoding.p.rapidapi.com',
			// 			'X-RapidAPI-Key': '515a9d360dmsh09faedd588478bap1a5a13jsnc9e4ff616554'
			// 		  }
			// 	  };

			// 	  axios.request(options).then(function (response) {
			// 		  console.log(response.data);
			// 	  }).catch(function (error) {
			// 		  console.error(error);
			// 	  });

			//   });

			axios.get("https://api.ipify.org/?format=json").then((response) => {
				axios.get(`https://ipapi.co/${response.data.ip}/json/`).then((result) => {
					const countryPhoneCode = phoneCodes.find(
						(e) => e.value === result.data.country_name
					);

					if (!countryPhoneCode) return null;

					onPhoneCodeFound(
						// @ts-ignore
						countryPhoneCode?.label
					);
				});
			});
		} else {
			// console.log(false);
		}
	}, []);

	return null;
};

export default GeolocationPhoneCode;
