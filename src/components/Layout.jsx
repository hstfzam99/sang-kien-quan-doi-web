import { Box, OutlinedInput } from "@mui/material"
import { Banner } from "../pages/Banner"
import { DesktopHeader } from "./Header"
import { Outlet } from "react-router"
import { Footer } from "./Footer"

export const Layout = () =>{
    return (
        <Box>
            <Banner/>
            <DesktopHeader/>
            <Outlet/>
            <Footer/>
        </Box>
    )
}