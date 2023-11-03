import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import HomeIcon from '@mui/icons-material/Home';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const Title = styled(Typography)({
  flexGrow: 1,
  marginRight: '16px',
});

const NavbarContainer = styled(AppBar)`
  position: static;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Toolbar>
        <Title variant="h6">
          My App
        </Title>
        <Button component={Link} to="/" color="inherit">
          <HomeIcon />
          Home
        </Button>
        <Button component={Link} to="/dashboard" color="inherit">
          <ContentPasteIcon />
          Dashboard
        </Button>
        <Button component={Link} to="/contact" color="inherit">
          <ContactSupportIcon />
          Contact
        </Button>
      </Toolbar>
    </NavbarContainer>
  );
};

export default Navbar;