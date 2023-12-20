import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Typography,
  } from "@mui/material";
  import {
    NavbarContainer,
    NavbarHeader,
    MyList,
  } from "../../Styles/Navbar";
  import PersonIcon from "@mui/icons-material/Person";
  import FavoriteIcon from "@mui/icons-material/Favorite";
  import SearchIcon from "@mui/icons-material/Search";
  import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
  import Actions from "./Actions";
  import { useUIContext } from "../../Context/UI";
  

export default function NavbarDT({matches})  {
  const {setShowSearchBox}= useUIContext()
   return(
   <NavbarContainer>
      <NavbarHeader variant="h4">PZL</NavbarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories"/>
        <ListItemText primary="Products" />
        <ListItemText primary="About us" />
        <ListItemText primary="Community"/>
        
        <ListItemButton>
          <ListItemIcon>
            <SearchIcon onClick={()=>setShowSearchBox(true)}/>
          </ListItemIcon>
        </ListItemButton>
          </MyList>
       <Actions matches={matches} />   
    </NavbarContainer>
  )
}

