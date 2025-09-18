import React from 'react'
import { Routes, Route } from 'react-router-dom'

type RoutesType = {
  path: string
  element: React.ReactNode
}
const Home = React.lazy(() => import('../../pages/home/Home'))
const About = React.lazy(() => import('../../pages/about/About'))
const ContactUs = React.lazy(() => import('../../pages/contact-us/ContactUs'))
const NotFound = React.lazy(() => import('../../pages/not-found/Not-Found'))

const routes: RoutesType[] = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact-us', element: <ContactUs /> },
  { path: '*', element: <NotFound /> }
]

const Body = () => (
  <Routes>
    {routes.map((route) => <Route key={route.path} path={route.path} element={route.element} />)}
  </Routes>
)

export default Body