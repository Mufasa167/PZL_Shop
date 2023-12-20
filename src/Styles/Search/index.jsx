import {styled} from "@mui/system";
import { Colors } from "../Theme";
import {  TextField } from "@mui/material";
import {Box} from "@mui/system";

export const SearchBoxContainer = styled(Box)(({theme})=>({

    position:'absolute',
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    background: Colors.primary,
    display:'flex',
    justifyContent:'center',
    zIndex:1999,
    opacity:0.5

}));


export const SearchField=styled(TextField)(({theme})=>({
    ".MuiInput;abe;-root":{
        color:Colors.secondary
    },
    ".MuiInput-root":{
        fontSize:'1rem',
        [theme.breakpoints.up('md')]:{
            fontSize:'2rem'
        }, 
        color:Colors.secondary
    },

     ".MuiInput-root::before":{
        borderBottom:`1px solid ${Colors.secondary}`

     },   
     padding:'0 0 40px'
    
    }))