import NavConfig from './nav.config.js'
import Demo from './demos.vue'

const registerRoute = (config) => {
  const route = []
  config.map(nav =>
    nav.list.map(page =>
      route.push({
        name: page.name,
        path: page.path,
        component: () => import(`./pages${page.path}`),
        meta: {
          title: page.title || page.name,
          description: page.description,
        },
      })))

  return { route, navs: config }
}

const route = registerRoute(NavConfig)

route.route.push({
  path: '/',
  component: Demo,
})

export const navs = route.navs
export default route.route
