import { Box } from "@mui/material"
import { Outlet } from "react-router"
import { Banner } from "../pages/Banner"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = () =>{
    return (
        <Box>
            <Banner/>
            <Header/>
            <Outlet/>
            <Footer/>
        </Box>
    )
}