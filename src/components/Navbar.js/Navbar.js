import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import OrderButton from '../ProductScreen/OrderButton/OrderButton';
import logo from '../../Logo/image.png'
import "./Navbar.css"

const Navbar = () => {
  const [aboutProduct, setAboutProduct] = React.useState(true)
  const boxstyle = {
    "boxShadow":"0px 2px 4px -1px rgb(0 0 0 / 7%), 0px 4px 5px 0px rgb(0 0 0 / 3%), 0px 1px 10px 0px rgb(0 0 0 / 0%)",
  }

  return (
    <AppBar position="static" sx={{"backgroundColor":"white"}} style={boxstyle}>
      <Container style={{"background":"white","color":"black"}}>

        {/* if about product is true so render href link in navbar if its get false so render none component */}

          {aboutProduct?
        <div style={{"display":"flex"}}>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }} style={{"marginTop":"30px"}}>
          <img style={{"height":"7vh","marginRight":"45px"}} src={logo}/>
        <Typography
        className='link'
            variant="p"
            component="a"
            sx={{
              textDecoration: 'none',
              margin:'0px',
              marginLeft:'14px'
            }}
          >
            Laptops
          </Typography>
          <Typography
          className='link'
            variant="p"
            component="a"
            sx={{
              textDecoration: 'none',
              margin:'0px',
              marginLeft:'14px'
            }}
          >
            Desktop PCs
          </Typography>
          <Typography
          className='link'
            variant="p"
            component="a"
            sx={{
              textDecoration: 'none',
              margin:'0px',
              marginLeft:'14px'
            }}
          >
            Networking Devices
          </Typography>
          <Typography
          className='link'
            variant="p"
            component="a"
            sx={{
              textDecoration: 'none',
              margin:'0px',
              marginLeft:'14px'
            }}
          >
            Printer Scanner
          </Typography>
          <Typography
          className='link'
            variant="p"
            component="a"
            sx={{
              textDecoration: 'none',
              margin:'0px',
              marginLeft:'14px'
            }}
          >
            PC Parts
          </Typography>
          <Typography
          className='link'
            variant="p"
            component="a"
            sx={{
              textDecoration: 'none',
              margin:'0px',
              marginLeft:'14px'
            }}
          >
            All Other Products
          </Typography>
          <Typography
          className='link'
            variant="p"
            component="a"
            sx={{
              textDecoration: 'none',
              margin:'0px',
              marginLeft:'14px'
            }}
          >
            Repairs
          </Typography>
        </Box>
                 
        </div>:<>{/* this is None component */}</>
}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }} style={{"marginBottom":"2rem","marginTop":"3rem"}}>

          {/* pass the props of aboutProduct and setAboutProduct to Order Button in there manipulapte the state*/}

          <OrderButton aboutProduct={aboutProduct} setAboutProduct={setAboutProduct}/>
          
        </Box>
        <Toolbar disableGutters sx={{flexGrow:1, display:{xs:"block",md:'none'}}}>
        <img style={{"height":"60px"}} src={logo}/>

            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              style={{"float":"right"}}
            >
              <MenuIcon />
            </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
