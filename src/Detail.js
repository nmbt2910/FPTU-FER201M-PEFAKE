import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Typography } from '@mui/material';

const Detail = () => {
  const { id } = useParams();
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://6535dff3c620ba9358ecb96d.mockapi.io/staffManagement/${id}`
        );
        setStaff(response.data);
      } catch (error) {
        console.error('Error fetching staff details:', error);
      }
    };

    fetchData();
  }, [id]);

  if (!staff) {
    return <div>Loading...</div>;
  }

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Staff Details
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #ccc',
          borderRadius: '4px',
          padding: '16px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <img
          src={staff.avatar}
          alt={staff.name}
          style={{ width: '100%', marginBottom: '16px', borderRadius: '4px' }}
        />
        <Typography variant="h6" sx={{ mb: 2 }}>
          {staff.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Address: {staff.address}
        </Typography>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Age: {staff.age}
        </Typography>
        <Typography variant="body1">
          Created Date: {new Date(staff.createdAt).toLocaleDateString()}
        </Typography>
      </Box>
    </Box>
  );
};

export default Detail;