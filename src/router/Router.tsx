import { createBrowserRouter } from "react-router-dom"
import Login from "../_auth/forms/Login"
import Signup from "../_auth/forms/Signup"
import { Home } from "../_root/pages"
import AuthLayout from "../_auth/AuthLayout"
import RootLayout from "../_root/RootLayout"

const router = createBrowserRouter([
    {
        element: <AuthLayout />,
        children: [
            {
                element: <Login />,
                path: '/login'
            },
            {
                element: <Signup />,
                path: '/sign-up'
            },
        ]
    },
    {
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
                path: '/'
            }
        ]
    }
])

export default router