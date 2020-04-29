import AuthStore from './AuthStore'
import AuthService from '../services/AuthService'
const authService = new AuthService()
const authStores = new AuthStore(authService)
export default {
 authService,
 authStores
}
