import { GeocalizationApi } from "../__commons/axios/geocalization";
import { curvatureKilometerEarthDegree } from "../__commons/helpers/constants";
import { dataAdresses } from "../__commons/protocols/dataAdresses";

export class SearchDistanceAdressesService {
  async distanceAdresses(adressesInput: string) {
		const dataAdresses: dataAdresses = {
			adresses: []
		}

		let adressesAndGeocalization = []

		if(adressesInput.split(';').length < 3) {
			throw {
				status: 400,
				message: 'É necessário ter no minímo 3 endereços'
			}
		}

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

					dataAdresses.adresses.push({
						from: adressesAndGeocalization[i].address,
						to: adressesAndGeocalization[j + 1].address,
						distanceKm: distanceKm
					})
				}
			}

			dataAdresses.closer = this.addressCloser(dataAdresses)
		  dataAdresses.away = this.addressAway(dataAdresses)

			return dataAdresses

		} catch (error) {
			throw error
		}
	}

	addressCloser(dataAdresses: dataAdresses) {
		return dataAdresses.adresses.reduce((prevAddress, currentAddress)=> {
			return (prevAddress.distanceKm < currentAddress.distanceKm) ? prevAddress : currentAddress
		})
	}

	addressAway(dataAdressesReturn: dataAdresses) {
		return dataAdressesReturn.adresses.reduce((prevAddress, currentAddress)=> {
			return (prevAddress.distanceKm > currentAddress.distanceKm) ? prevAddress : currentAddress
		})
	}
}
