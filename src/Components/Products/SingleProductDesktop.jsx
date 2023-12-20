import { Stack } from "@mui/material";
import { Product, ProductActionButton, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from "../../Styles/Products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite"
import ShareIcon from "@mui/icons-material/Share"
import FitScreenIcon from "@mui/icons-material/FitScreen"
import useDialogModal from "../../Hooks/useDialogModal";
import ProductDetail from "../ProductDetail";
import { useState } from "react";


export default function SingleProductDesktop({product, matches}){
     const [showOptions,setShowOptions]=useState(false)

     const handleMouseEnter=()=>{
        setShowOptions(true)
     }

     const handleMouseLeave=()=>{
        setShowOptions(false)
     }

     
     const[ProductDetailDialog, showProductDetailDialog,closeProductDetailDialog]
     =useDialogModal(ProductDetail)
    return (
       <>
           <Product onMouseEnter={handleMouseEnter}  onMouseLeave={handleMouseLeave}>
            <ProductImage src= {product.image}/>
            <ProductFavButton isFav={0}>
                <FavoriteIcon/>
            </ProductFavButton>

             {showOptions && (<ProductAddToCart 
             show={showOptions} variant="contained">
             Add to Cart
             </ProductAddToCart> )}            
            
            <ProductActionsWrapper show={showOptions}>
                <Stack direction="column">
                    <ProductActionButton>
                        <ShareIcon color="primary"/>
                    </ProductActionButton>
                    <ProductActionButton onClick={()=>showProductDetailDialog()}>
                        <FitScreenIcon color="primary"/>
                    </ProductActionButton>
                </Stack>
            </ProductActionsWrapper>
        </Product>
        <ProductMeta product={product} matches={matches}/>
        <ProductDetailDialog product={product}/>  
       </>
    
    )
}