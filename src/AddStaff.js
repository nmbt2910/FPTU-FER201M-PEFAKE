import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AddStaff = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [avatar, setAvatar] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (name.trim().split(' ').length < 2) {
      alert('Name must contain at least 2 words');
      return;
    }

    if (!avatar.trim().startsWith('http')) {
      alert('Avatar URL must start with http');
      return;
    }

    if (!createdAt) {
      alert('Please provide the created date');
      return;
    }

    try {
      await axios.post('https://6535dff3c620ba9358ecb96d.mockapi.io/staffManagement', {
        name,
        age,
        address,
        avatar,
        createdAt: new Date(createdAt)
      });
      navigate('/dashboard');
    } catch (error) {
      console.error('Error adding staff:', error);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
      <Box maxWidth={400} width="100%" p={2} border="1px solid #ccc" borderRadius={4} bgcolor="#ffffff" marginTop={-20}>
        <Typography variant="h5" align="center" gutterBottom>
          Add Staff
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} required fullWidth margin="normal" />
          <TextField label="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} required fullWidth margin="normal" />
          <TextField label="Address" value={address} onChange={(e) => setAddress(e.target.value)} required fullWidth margin="normal" />
          <TextField label="Avatar URL" value={avatar} onChange={(e) => setAvatar(e.target.value)} required fullWidth margin="normal" />
          <TextField
            label="Created At"
            type="date"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            required
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default AddStaff;