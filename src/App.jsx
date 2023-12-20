
import { ThemeProvider } from "@mui/system"
import { useEffect } from "react"
import {Box, Button, Container, Drawer, Typography } from "@mui/material"
import theme from "./Styles/Theme"
import Navbar from "./Components/Navbar"
import Banner from "./Components/Banner"
import Promotions from "./Components/Promotions"
import Products from "./Components/Products"
import Footer from "./Components/Footer"
import AppDrawer from "./Components/Drawer/Drawer"
import { UIProvider } from "./Context/UI"
import SearchBox from "./Components/Search"




function App() {

useEffect(()=>{
  document.title= "PZL Shop - Home"
},[])

  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth="xl"
    sx={{
      background:'#fff'
    }}
    >
    <UIProvider>
    <Navbar/> 
    <Banner/>
    <Promotions/>
    <Box display="flex"
        justifyContent={"center"}
        sx={{p:4}}    
    >
      <Typography variant="h4">Peoples Products</Typography>
    </Box>
    <Products/>
    <Footer/>
    <AppDrawer/>
    <SearchBox/>
    </UIProvider> 
    
    </Container>
    </ThemeProvider>      
  )
}

export default App
