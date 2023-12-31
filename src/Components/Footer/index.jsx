
import {Box, Grid, Typography,Stack,Button, Container,List, ListItemText} from "@mui/material"
import { FooterTitle,SubscribeTf } from "../../Styles/Footer"
import {Colors} from "../../Styles/Theme"
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
export default function Footer(){
   
    return(
        <Box
         sx={{
            background: Colors.shaft,
            color:Colors.white,
            p: { xs: 4, md: 10 },
            pt: 12,
            pb: 12,
            fontSize: { xs: '12px', md: '14px' }
         }
         }
        >
            <Grid 
            container
            spacing={2}
            justifyContent="center"
            >
             <Grid item md={6} lg={4}>
                <FooterTitle variant="body1">About the PZL</FooterTitle>
                <Typography variant="caption2">
                    The aim of the PZL platform is to allow for creative people to engage support and sell/buy products that catch the eye.
                    In this early development we want to reveal the potential this platform could hold, where in the future it could a community for learning and creating different crafts and handmade products.
                </Typography>
                <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
          </Grid>
          <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item md={6} lg={4}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeTf
              color="primary"
              label="Email address"
              variant="standard"
            />
             <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              sx={{ mt: 4, mb: 4 }}
              variant="contained"
            >
              Subscribe
            </Button>
          </Stack>
        </Grid>
            </Grid>
        </Box>
    )

}