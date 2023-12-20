
import { Typography, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from '../../Styles/Banner'


export default function Banner() {
    const theme= useTheme()
    const matches= useMediaQuery(theme.breakpoints.down('md'))
    

    return(
        <BannerContainer>
            <BannerImage src="/images/banner/banner1.png"/>
        <BannerContent>
            <Typography variant='h6'>Huge Collection</Typography>
             <BannerTitle variant='h2'>New Crafts</BannerTitle>
        
        <BannerDescription variant='subtitle'>
        Yo! new hot crafts in stock be ready for the festive seasons everyone!
        </BannerDescription>
        <BannerShopButton color='secondary'>Shop Now</BannerShopButton>
        </BannerContent>
        </BannerContainer>
    )
}