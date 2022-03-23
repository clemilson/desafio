import { GeocalizationApi } from "../__commons/axios/geocalization";

export class SearchDistanceAdressesService {
  async GetListAddress(adressesInput) {
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


			return adressesAndGeocalization


		} catch (error) {
			throw error
		}
  }
}
