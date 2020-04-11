import Login from './Login'
import SignUp from   './Signup'
var routes = [
    {
        path:'/login',
        component: Login,
        props:true,
        meta: { requiresAuth: false }
    },
    {
        path:'/signup',
        component: SignUp,
        props:true,
        meta: { requiresAuth: false }
    }

]
export default routes