import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'
import { PRODUCT_PATH } from '../../Products/constants/RouteConstants'
import SignInPage from '../components/SignInPage/index'
import { API_FETCHING } from '@ib/api-constants'

@inject('authStores')
@observer
class SignInRoute extends React.Component {
   @observable username = ''
   @observable password = ''
   @observable errorMessage = ''

   signInFormRef = React.createRef()
   // userNameRef=React.createRef()
   // passwordRef=React.createRef()
   componentDidMount() {
      this.signInFormRef.current.userNameRef.current.focus()
   }

   @action.bound
   onChangeUsername(e) {
      this.username = e.target.value
      // this.passwordRef.current.focus()
   }

   @action.bound
   onChangePassword(e) {
      this.password = e.target.value
   }

   onSignInSuccess = () => {
      const { history } = this.props
      history.replace(PRODUCT_PATH)
   }

   @action.bound
   onSignInFailure() {
      const { getUserSignInAPIError: apiError } = this.props.authStores
      if (apiError !== null && apiError !== undefined) {
         this.errorMessage = apiError
      }
   }

   onSubmitForm = e => {
      const { userSignIn } = this.props.authStores
      e.preventDefault()
      if (this.username === '' || this.username === undefined) {
         this.errorMessage = 'Please enter username'
         this.signInFormRef.current.userNameRef.current.focus()
         return
      } else if (this.password === '' || this.password === undefined) {
         this.errorMessage = 'Please enter password'
         this.signInFormRef.current.passwordRef.current.focus()
         return
      } else {
         this.errorMessage = ''
         userSignIn(
            {
               username: this.username,
               password: this.password
            },
            this.onSignInSuccess,
            this.onSignInFailure
         )
      }
   }

   render() {
      const loading =
         this.props.authStores.getUserSignInAPIStatus === API_FETCHING
      return (
         <SignInPage
            ref={this.signInFormRef}
            errorMessage={this.errorMessage}
            username={this.username}
            password={this.password}
            onChangeUsername={this.onChangeUsername}
            onChangePassword={this.onChangePassword}
            onSubmitForm={this.onSubmitForm}
            loading={loading}
            // userNameRef={this.userNameRef}
            // passwordRef={this.passwordRef}
         />
      )
   }
}
export default SignInRoute
