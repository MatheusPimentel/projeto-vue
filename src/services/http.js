import Axios from 'axios'
import Constantes from '../util/constants'

const client = Axios.create({
  baseURL: Constantes.API_URL,
  timeout: 9000
})
export default client
