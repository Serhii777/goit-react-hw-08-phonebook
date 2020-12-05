import { lazy } from "react";

export default [
    {
        path: "/",
        label: "Home",
        exact: true,
        component: lazy(() => import('./View/HomeView')),
        private: false,
        restricted: false,
    },{
        path: "/register",
        label: "Register",
        exact: true,
        component: lazy(() => import('./View/RegisterView')),
        private: false,
        restricted: true,
    },
    {
        path: "/login",
        label: "Login",
        exact: true,
        component: lazy(() => import('./View/LoginView')),
        private: false,
        restricted: true,
    },
    {
        path: "/contacts",
        label: "Contacts",
        exact: true,
        component: lazy(() => import('./View/ContactsView')),
        private: true,
        restricted: false,
    },
]
