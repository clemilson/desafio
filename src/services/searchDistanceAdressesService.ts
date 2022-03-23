import { GeocalizationApi } from "../__commons/axios/geocalization";

export class SearchDistanceAdressesService {
  async GetListAddress(adressesInput) {
		const adresses = []

		try {

			let adressesAndGeocalization = []

			const listGeocalizationAdresses = await GeocalizationApi.searchDataAdresses(adressesInput.adresses)

			listGeocalizationAdresses.data.results.map((addressGeolocation) => {
				const dataAddressAndGeolocation = {
					address: addressGeolocation.formatted_address,
					coordinates: addressGeolocation.geometry.location
				}
				adressesAndGeocalization.push(dataAddressAndGeolocation)
			})


			for(let i = 0; i < adressesAndGeocalization.length; i++) {
				for(let j = i; j < adressesAndGeocalization.length - 1; j++) {

					adresses.push({
						from: adressesAndGeocalization[i],
						to: adressesAndGeocalization[j + 1]
					})
				}
			}

			return adresses

		} catch (error) {
			throw error
		}
	}
}
