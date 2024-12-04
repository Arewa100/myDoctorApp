import LandingPage from "../components/LandingPage"
import Login from "../auth/login"
import Signup from "../auth/signup"

const routes = [
    {
        path: "/home",
        element: <LandingPage/>
    },

    {
        path: "/login",
        element: <Login/>
    },

    {
        path: "/signup",
        element: <Signup/> 
    }
]

export default routes