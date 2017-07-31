import React                from 'react'

import Layout               from '../helpers/Layout'
import Subsystem            from '../helpers/Subsystem'

import PageHome             from '../pages/PageHome'
import PageLanding          from '../pages/PageLanding'
import PageIndex            from '../pages/PageIndex'
import PageOne              from '../pages/PageOne'
import PageForm             from '../pages/PageForm'
import NotFound             from '../pages/NotFound'


export default {
  path: '/',
  children: [

      PageHome:[
        path: '/home',
        action({ context, params }) {
          return {
            title:`Home`,
            component:
            <Subsystem context={ context }>
              <Layout>
                <View title={ title } />
              </Layout>
            </Subsystem>
          }
        }
      ],
      PageLanding:[
        path: '/landing',
        action({ context, params }) {
          return {
            title:`Landing`,
            component:
            <Subsystem context={ context }>
              <Layout>
                <View title={ title } />
              </Layout>
            </Subsystem>
          }
        }
      ],
      PageIndex:[
        path: '/index',
        action({ context, params }) {
          return {
            title:`Index`,
            component:
            <Subsystem context={ context }>
              <Layout>
                <View title={ title } />
              </Layout>
            </Subsystem>
          }
        }
      ],
      PageOne:[
        path: '/index/:id',
        action({ context, params }) {
          const { id } = params
          return {
            title:`One`,
            component:
            <Subsystem context={ context }>
              <Layout>
                <View title={ title } id={ id }/>
              </Layout>
            </Subsystem>
          }
        }
      ],
      PageForm:[
        path: '/forms/:id',
        action({ context, params }) {
          const { id } = params
          return {
            title:`Form`,
            component:
            <Subsystem context={ context }>
              <Layout>
                <View title={ title } id={ id }/>
              </Layout>
            </Subsystem>
          }
        }
      ],
      PageProfile:[
        path: '/users/:id',
        action({ context, params }) {
          const { id } = params
          return {
            title:`Profile`,
            component:
            <Subsystem context={ context }>
              <Layout>
                <View title={ title } id={ id }/>
              </Layout>
            </Subsystem>
          }
        }
      ],
      PageNotFound:[
        path: '*',
        action() {
          return {
            title:`NotFound`,
            component: <NotFound title={ title } />,
            status: 404,
          }
        }
      ]
    ]
  }

  async action({ next }) {
    const route = await next()

    route.title = `${ route.title }`
    route.description = ``

    return route
  }
}