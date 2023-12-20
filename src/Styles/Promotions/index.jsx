import { Box } from "@mui/system";
import { Colors } from "../Theme";
import { Typography } from "@mui/material";
import {styled} from "@mui/material/styles";

export const PromotionsContainer =styled(Box)(({theme})=>({
    [theme.breakpoints.up('md')]:{
        padding:"40px 0px 40px 0px"
    },
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:'20px 0px 20px 0px',
    overflow:'hidden',
    background: Colors.secondary
}))

export const MessageText =styled(Typography)(({theme})=>({
    fontFamily:'"Rubik", "Sans Srif"',
    [theme.breakpoints.up('md')]:{
        fontSize:'3em',
    },
    color: Colors.white,
    fontSize:'1.5em',
}))