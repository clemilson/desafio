import { GeocalizationApi } from "../__commons/axios/geocalization";
import { curvatureKilometerEarthDegree } from "../__commons/helpers/constants";
export class SearchDistanceAdressesService {
  async GetListAddress(adressesInput: string) {
		const dataAdressesReturn = {
			closer: {},
			away: {},
			adresses: []
		}
		let adressesAndGeocalization = []

		try {
			const listGeocalizationAdresses = await GeocalizationApi.searchDataAdresses(adressesInput)

			listGeocalizationAdresses.data.results.map((addressGeolocation) => {
				const dataAddressAndGeolocation = {
					address: addressGeolocation.formatted_address,
					coordinates: addressGeolocation.geometry.location
				}
				adressesAndGeocalization.push(dataAddressAndGeolocation)
			})


			for(let i = 0; i < adressesAndGeocalization.length; i++) {
				for(let j = i; j < adressesAndGeocalization.length - 1; j++) {

					const differencex1Xx2 = adressesAndGeocalization[i]. coordinates.lat - adressesAndGeocalization[j + 1].coordinates.lat
					const differencey1Xy2 = adressesAndGeocalization[i].coordinates.lng - adressesAndGeocalization[j + 1].coordinates.lng

					const sumSquareDifference = Math.pow(differencex1Xx2, 2) + Math.pow(differencey1Xy2, 2)

					const rootSquare = Math.sqrt(sumSquareDifference)

					const distanceKm = parseFloat((rootSquare * curvatureKilometerEarthDegree).toFixed(2))

					dataAdressesReturn.adresses.push({
						from: adressesAndGeocalization[i].address,
						to: adressesAndGeocalization[j + 1].address,
						distanceKm: distanceKm
					})
				}
			}


			const away = dataAdressesReturn.adresses.reduce((prevAddress, currentAddress)=> {
				return (prevAddress.distanceKm > currentAddress.distanceKm) ? prevAddress : currentAddress
		  })

			const closer = dataAdressesReturn.adresses.reduce((prev, current)=> {
				return (prev.distanceKm < current.distanceKm) ? prev : current
		  })

			dataAdressesReturn.closer = closer
		  dataAdressesReturn.away = away

			return dataAdressesReturn

		} catch (error) {
			throw error
		}
	}
}
