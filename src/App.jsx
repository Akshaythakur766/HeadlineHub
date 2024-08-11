import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import Categories from './Pages/Categories'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />,
    children: [
      // {
      //   path: "/",
      //   element: <Hero />
      // },
      {
        path: "/",
        element: <Categories category={"general"} />
      },
      {
        path: "/business",
        element: <Categories category={"business"} />
      },
      {
        path: "/health",
        element: <Categories category={"health"} />
      },
      {
        path: "/entertainment",
        element: <Categories category={"entertainment"} />
      },
      {
        path: "/sports",
        element: <Categories category={"sport"} />
      },
      {
        path: "/stocks",
        element: <Categories category={"stock"} />
      },
      {
        path: "/technology",
        element: <Categories category={"technology"} />
      }
    ]
  }
])

function LayoutComponent() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

const App = () => {
  return <RouterProvider router={router} />
}

export default App
