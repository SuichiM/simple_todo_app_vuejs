import TodoDetails from './TodoDetails'
import TodoIndex from   './TodoIndex'
var routes = [
    {
        path:'/todos',
        component: TodoIndex,
        props:true
    },
    {
        path:'/todos/:id',
        component: TodoDetails,
        props:true
    }

]
export default routes