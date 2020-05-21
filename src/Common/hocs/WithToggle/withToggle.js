import React from 'react'
import { observer } from 'mobx-react'
import { observable, action } from 'mobx'

export function withToggle(WrappedComponent) {
   @observer
   class Component extends React.Component {
      @observable
      toggleStatus
      constructor(props) {
         super(props)
         this.toggleStatus = false
      }
      @action.bound
      onToggle() {
         this.toggleStatus = !this.toggleStatus
      }
      render() {
         const { toggleStatus, onToggle } = this
         return (
            <WrappedComponent toggleStatus={toggleStatus} onToggle={onToggle} />
         )
      }
   }
   return Component
}
