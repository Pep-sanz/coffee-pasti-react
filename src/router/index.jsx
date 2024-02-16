import { createBrowserRouter } from "react-router-dom";
import HeroSection from "../pages/HeroSection";
import RootLayout from "./layout/rootLayout";
import MenuSection from "../pages/MenuSection";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/',
                element: <HeroSection/>
            },
            {
                path: '/menu',
                element: <MenuSection/>
            },
            
        ]

    }
])