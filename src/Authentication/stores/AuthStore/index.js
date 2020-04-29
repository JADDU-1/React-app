/* eslint-disable default-case */
import { observable, action, computed} from 'mobx'
import { API_INITIAL } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import {setAccessToken,clearUserSession} from '../../../utils/StorageUtils'

class AuthStore {  
  @observable getUserSignInAPIStatus
  @observable getUserSignInAPIError
  @observable authAPIService
  constructor(authService) {
      this.authAPIService = authService
      this.init()
    }
    
    @action.bound
    init() {
      this.getUserSignInAPIStatus = API_INITIAL
      this.getUserSignInAPIError = null
    }

    @action.bound
  userSignIn() {
    const AuthPromise = this.authAPIService.signInAPI()
    return bindPromiseWithOnSuccess(AuthPromise)
    .to(this.setGetUserSignInAPIStatus,this.setUserSignInAPIResponse)
    .catch(this.setGetUserSignInAPIError)
  }

  @action.bound
  setUserSignInAPIResponse(response) {
      response.map(token=>setAccessToken((token.access_token)))
      return response
  }

  @action.bound
  setGetUserSignInAPIError(error) {
    this.getUserSignInAPIError = error
  }

  @action.bound
  setGetUserSignInAPIStatus(apiStatus) {
    this.getUserSignInAPIStatus = apiStatus
  }
  @action.bound
    signOut(){
    clearUserSession()
  }
}

export default AuthStore;