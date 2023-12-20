import { useUIContext } from "../../Context/UI";
import { SearchBoxContainer, SearchField } from "../../Styles/Search";
import { IconButton, Slide } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import CloseIcon from "@mui/icons-material/Close"

export default function SearchBox(){
    const {showSearchBox, setShowSearchBox}= useUIContext()
    
    return(
        <Slide direction="down" in={showSearchBox} timeout={500}>
            <SearchBoxContainer>
                <SearchField
                color="secondary"
                variant="standard"
                fullWidth
                placeholder="See what's new..."/>

               <IconButton>
                <SearchIcon sx={{
                    fontSize:{xs:'2rem', md:'3rem'}
                }}
                color="secondary"/>
                </IconButton> 

                <IconButton 
                onClick={()=>setShowSearchBox(false)}
                sx={{
                    position:"absolute",
                    top:10,
                    right:10
                }}>
                    <CloseIcon sx={{fontSize:'4rem'}} color='secondary'/>
                </IconButton>

            </SearchBoxContainer>
        </Slide>
    )
}