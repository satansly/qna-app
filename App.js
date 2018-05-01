import React from 'react'
import { Provider } from 'react-redux'
// import MainView from './App/containers/main'
import store from './App/store'
import MainNavigation from './App/navigation/main'
export default class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    )
  }
}
