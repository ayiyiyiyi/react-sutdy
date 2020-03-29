import React, {Fragment} from 'react'
import {Cart } from './components'

export default function App(props) {
  return (
   <Fragment>
       <Cart store={props.store}/>
   </Fragment>
  )
}
