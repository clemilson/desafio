import { GeocalizationApi } from "../__commons/axios/geocalization"

export class SearchService {
  async GetListAddress(listAdressesInput) {
		try {

			const listGeocalization = await GeocalizationApi.searchGeocalization(listAdressesInput.adresses)

			return listGeocalization.data.results


		} catch (error) {

			throw error
		}
  }
}
