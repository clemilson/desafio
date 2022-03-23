import api from './base'
import utf8 from 'utf8'

export class GeocalizationApi {
  static searchDataAdresses (data: string) {
    return api.post(`${utf8.encode(data)}&key=${process.env.key}`)
  }
}
