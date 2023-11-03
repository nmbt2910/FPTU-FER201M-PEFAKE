import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Typography, Box, TextField, Button, Container, styled, Avatar } from '@mui/material';

const UpdateStaff = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [staff, setStaff] = useState({ name: '', age: '', address: '', avatar: '' });

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get(`https://6535dff3c620ba9358ecb96d.mockapi.io/staffManagement/${id}`);
        setStaff(response.data);
      } catch (error) {
        console.error('Error fetching staff:', error);
      }
    };

    fetchStaff();
  }, [id]);

  const updateStaff = async () => {
    try {
      await axios.put(`https://6535dff3c620ba9358ecb96d.mockapi.io/staffManagement/${id}`, staff);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating staff:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStaff({ ...staff, [name]: value });
  };

  const StyledContainer = styled(Container)({
    marginTop: '2rem',
    textAlign: 'center',
  });

  const StyledTypography = styled(Typography)({
    marginBottom: '2rem',
    fontWeight: 'bold',
    fontSize: '2rem',
  });

  const StyledBox = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  });

  const StyledTextField = styled(TextField)({
    marginBottom: '1rem',
  });

  const StyledButton = styled(Button)({
    backgroundColor: '#1976d2',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  });

  const StyledAvatar = styled(Avatar)({
    width: '100px',
    height: '100px',
    marginBottom: '1rem',
    marginLeft: 'auto',
    marginRight: 'auto',
  });

  return (
    <StyledContainer maxWidth="md">
      <StyledTypography variant="h1" component="h1" gutterBottom>
        Update Staff Member
      </StyledTypography>
      <StyledBox>
        <StyledAvatar src={staff.avatar} alt="Avatar" />
        <StyledTextField
          label="Name"
          name="name"
          value={staff.name}
          onChange={handleInputChange}
        />
        <StyledTextField
          label="Age"
          name="age"
          value={staff.age}
          onChange={handleInputChange}
        />
        <StyledTextField
          label="Address"
          name="address"
          value={staff.address}
          onChange={handleInputChange}
        />
        <StyledTextField
          label="Avatar URL"
          name="avatar"
          value={staff.avatar}
          onChange={handleInputChange}
        />
        <StyledButton variant="contained" onClick={updateStaff}>
          Update
        </StyledButton>
      </StyledBox>
    </StyledContainer>
  );
};

export default UpdateStaff;