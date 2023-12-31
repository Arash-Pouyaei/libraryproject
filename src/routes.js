import AdminForm from "./components/admin/AdminForm";
import {AdminPanel} from "./components/admin/AdminPanel";
import { Landing } from "./Landing";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import {UserPanel} from "./components/login/PanelUser";
import { Cart } from "./components/Cart";
import { EditInformation } from "./components/EditInformation";


export const routes = [
    {
        path:"/",
        label:"home",
        component: Landing,
        routes:[

            {
                path:"/admin",
                label:"admin",
                component:AdminForm,
                routes:[
                    {
                        path:"/adminpanel",
                        label:"adminpanel",
                        component:AdminPanel,
                    }
                ]
            },
        ]
    },
    {
        path:"/login",
        label:"login",
        component:Login,
        routes:[
            {
                path:"/userpanel",
                label:"userpanel",
                component:UserPanel,
                routes:[
            {
                path:"/information",
                label:"information",
                component:EditInformation,
            },
            {
                path:"/cart",
                label:"cart",
                component:Cart,
              
            }
                ]
            },

        ]
    },
    {
        path:"/register",
        label:"register",
        component:Register,
        routes:[
            {
                path:"/userpanel",
                label:"userpanel",
                component:UserPanel,
            }
        ]
    },

]
