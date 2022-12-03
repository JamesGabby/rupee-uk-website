import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import logo from '../../images/Rupee-logo-dark.png'
import { Link } from 'react-router-dom';

const pages = [
  { title: 'Accounting Teams', link: "/accounting" }, { title: 'Accounting Firms', link: "/business" }
];

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      primary: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      primary?: string;
    };
  }
}

const blackHeaderTheme = createTheme({
  palette: {
    primary: {
      main: 'rgba(201, 76, 76, 0);',
    },
  },
});

const darkBlueHeaderTheme = createTheme({
  palette: {
    primary: {
      main: '#12263A',
    },
  },
});

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [hasScrolled, setHasScrolled] = React.useState<null | boolean>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const reForm = () =>
    window.scrollY >= 50 ? setHasScrolled(true) : setHasScrolled(false);

  window.addEventListener('scroll', reForm);

  return (
    <ThemeProvider theme={hasScrolled ? darkBlueHeaderTheme : blackHeaderTheme}>
      <AppBar position="fixed" elevation={hasScrolled ? 2 : 0}>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={hasScrolled ? {height: '5rem', transition: 'height 0.7s'} : {height: '7rem', transition: 'height 0.7s'}}>
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 7.5,
                display: { xs: 'none', md: 'flex' }
              }}
            >
              <div>
                <Link to="/"><img className='w-32' src={logo} alt='logo' /></Link>
                <p className='text-white text-right' style={{ fontSize: '.4rem'}}>Solutions</p>
              </div>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center"><Link to={page.link}>{page.title}</Link></Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 4,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1
              }}
            >
              <div>
                <img className='w-32' src={logo} alt='logo' />
                <p className='text-white text-right text-xs'>Solutions</p>
              </div>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 4, mr: 1.5, color: '#fff', display: 'block', textTransform: 'capitalize', fontSize: 18, fontFamily: 'Roboto',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7],
                    },
                  }}
                >
                  <Link to={page.link}>{page.title}</Link>
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
