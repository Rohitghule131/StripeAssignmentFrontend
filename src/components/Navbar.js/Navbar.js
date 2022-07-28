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
const Navbar = () => {
  const [aboutProduct, setAboutProduct] = React.useState(true)
  const boxstyle = {
    "boxShadow":"0px 2px 4px -1px rgb(0 0 0 / 7%), 0px 4px 5px 0px rgb(0 0 0 / 3%), 0px 1px 10px 0px rgb(0 0 0 / 0%)",
  }

  return (
    <AppBar position="static" sx={{"backgroundColor":"white"}} style={boxstyle}>
      <Container style={{"background":"white","color":"black"}}>
          {aboutProduct?
        <div style={{"display":"flex"}}>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }} style={{"marginTop":"30px"}}>
          <img style={{"height":"60px","marginRight":"45px",}} src={logo}/>
        <Typography
            variant="p"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex'},
              flexGrow: 1,
              fontWeight:500,
              fontSize:'large',
              color: 'inherit',
              textDecoration: 'none',
              margin:'auto'
            }}
          >
            Laptops
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex'},
              flexGrow: 1,
              fontWeight:500,
              fontSize:'large',
              color: 'inherit',
              textDecoration: 'none',
              margin:'auto'
            }}
          >
            Desktop PCs
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex'},
              flexGrow: 1,
              fontWeight:500,
              fontSize:'large',
              color: 'inherit',
              textDecoration: 'none',
              margin:'auto'
            }}
          >
            Networking Devices
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex'},
              flexGrow: 1,
              fontWeight:500,
              fontSize:'large',
              color: 'inherit',
              textDecoration: 'none',
              margin:'auto'
            }}
          >
            Printer Scanner
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex'},
              flexGrow: 1,
              fontWeight:500,
              fontSize:'large',
              color: 'inherit',
              textDecoration: 'none',
              margin:'auto'
            }}
          >
            PC Parts
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex'},
              flexGrow: 1,
              fontWeight:500,
              fontSize:'large',
              color: 'inherit',
              textDecoration: 'none',
              margin:'auto'
            }}
          >
            All Other Products
          </Typography>
          <Typography
            variant="p"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex'},
              flexGrow: 1,
              fontWeight:500,
              fontSize:'large',
              color: 'inherit',
              textDecoration: 'none',
              margin:'auto'
            }}
          >
            Repairs
          </Typography>
        </Box>
                 
        </div>:<></>
}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }} style={{"marginBottom":"2rem","marginTop":"3rem"}}>
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
