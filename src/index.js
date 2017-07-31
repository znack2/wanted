// import React, { Component } from 'react'
// import ReactDOM 			      from 'react-dom'
// import Router               from 'universal-router'
// import routes               from 'pages/routes'
// import createBrowserHistory from 'history/createBrowserHistory'
//
// process.env.REACT_APP_BROWSER
//
// const history = createBrowserHistory()
// const container = document.getElementById('root')
// const router = new Router(routes)
// let currentLocation = history.location
//
// async function onLocationChange(location, action) {
//   currentLocation = location
//
//   try {
//     const route = await router.resolve({
//       path: location.pathname,
//       query: queryString.parse(location.search),
//       context,
//     })
//
//     if (currentLocation.key !== location.key) return
//
//     if (route.redirect) {
//       history.replace(route.redirect)
//       return
//     }
//
//     ReactDOM.render(
//       <App context={ context }>{ route.component }</App>,
//       container
//     )
//   } catch (error) {
//     console.error(error)
//   }
// }
//
// history.listen(onLocationChange)
// onLocationChange(currentLocation)