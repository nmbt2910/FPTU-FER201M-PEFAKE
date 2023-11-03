import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://6535dff3c620ba9358ecb96d.mockapi.io/staffManagement'
        );
        const filteredStaffList = response.data.filter(
          (staff) => staff.name && staff.avatar && staff.age && staff.address
        );
        setStaffList(filteredStaffList);
      } catch (error) {
        console.error('Error fetching staff data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Typography variant="h4" align="center" sx={{ mb: 4 }}>
        Staff List
      </Typography>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(250px, 1fr))"
        gap={2}
      >
        {staffList.map((staff) => (
          <Box
            key={staff.id}
            sx={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '16px',
              textAlign: 'center',
            }}
          >
            <img
              src={staff.avatar}
              alt={staff.name}
              style={{ width: '100%', marginBottom: '16px' }}
            />
            <Typography variant="h6" sx={{ mb: 1 }}>
              {staff.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              Address: {staff.address}
            </Typography>
            <Typography variant="body1">Age: {staff.age}</Typography>
            <Button
              component={Link}
              to={`/detail/${staff.id}`}
              variant="contained"
              color="primary"
              sx={{ marginTop: '16px' }}
            >
              View Details
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Home;