import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ContactIcon from '@mui/icons-material/ContactPhone';

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
          <ContactIcon />
          Home
        </Button>
        <Button component={Link} to="/dashboard" color="inherit">
          <ContactIcon />
          Dashboard
        </Button>
        <Button component={Link} to="/contact" color="inherit">
          <ContactIcon />
          Contact
        </Button>
      </Toolbar>
    </NavbarContainer>
  );
};

export default Navbar;