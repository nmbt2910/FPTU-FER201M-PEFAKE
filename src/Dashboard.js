import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Typography, Box, Button, Container, Link as MuiLink, styled } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {
  const [staffList, setStaffList] = useState([]);

  useEffect(() => {
    fetchStaffList();
  }, []);

  const fetchStaffList = async () => {
    try {
      const response = await axios.get('https://6535dff3c620ba9358ecb96d.mockapi.io/staffManagement');
      setStaffList(response.data);
    } catch (error) {
      console.error('Error fetching staff list:', error);
    }
  };

  const deleteStaff = async (id) => {
    try {
      const confirmDeletion = window.confirm('Are you sure you want to delete this staff member?');
      if (!confirmDeletion) {
        return;
      }

      await axios.delete(`https://6535dff3c620ba9358ecb96d.mockapi.io/staffManagement/${id}`);
      fetchStaffList();
      toast.success('Staff member deleted successfully');
    } catch (error) {
      console.error('Error deleting staff:', error);
      toast.error('An error occurred while deleting the staff member');
    }
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

  const StaffListContainer = styled(Box)({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1rem',
    marginTop: '2rem',
  });

  const StaffCard = styled(Box)({
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    borderRadius: '4px',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
  });

  const StaffName = styled(Typography)({
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  });

  const StaffInfo = styled(Typography)({
    marginBottom: '0.5rem',
  });

  const ActionButtons = styled(Box)({
    marginTop: 'auto',
    display: 'flex',
    gap: '0.5rem',
  });

  const StyledLink = styled(Link)({
    textDecoration: 'none',
    color: 'white',
    backgroundColor: '#1976d2',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    transition: 'background-color 0.3s ease',
    '&:hover': {
      backgroundColor: '#1565c0',
    },
  });

  const StyledButton = styled(Button)({
    flex: 1,
    backgroundColor: '#ff3d00', // Darker red color
    color: 'white',
    '&:hover': {
      backgroundColor: '#d32f2f', // Darker shade of the darker red color on hover
    },
  });

  return (
    <StyledContainer maxWidth="md">
      <StyledTypography variant="h1" component="h1" gutterBottom>
        Staff Management Dashboard
      </StyledTypography>
      <StyledLink to="/addstaff" component={MuiLink}>
        Add Staff
      </StyledLink>
      <StaffListContainer>
        {staffList.map((staff) => (
          <StaffCard key={staff.id}>
            <StaffName variant="h4" component="h2">
              {staff.name}
            </StaffName>
            <StaffInfo variant="body1" color="textSecondary">
              Age: {staff.age}
            </StaffInfo>
            <StaffInfo variant="body1" color="textSecondary">
              Address: {staff.address}
            </StaffInfo>
            <ActionButtons>
              <StyledLink to={`/edit/${staff.id}`} component={MuiLink} color="inherit">
                Edit
              </StyledLink>
              <StyledButton onClick={() => deleteStaff(staff.id)} variant="outlined" color="secondary">
                Delete
              </StyledButton>
            </ActionButtons>
          </StaffCard>
        ))}
      </StaffListContainer>
      <ToastContainer />
    </StyledContainer>
  );
};

export default Dashboard;