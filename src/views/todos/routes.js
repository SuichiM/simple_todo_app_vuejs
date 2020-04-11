import TodoDetails from './TodoDetails'
import TodoIndex from   './TodoIndex'
var routes = [
    {
        path:'/todos',
        component: TodoIndex,
        props:true,
        meta: { requiresAuth: true }
    },
    {
        path:'/todos/:id',
        component: TodoDetails,
        props:true,
        meta: { requiresAuth: true }
    }

]
export default routes