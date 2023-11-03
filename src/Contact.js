import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const styles = {
  pageContainer: {
    padding: '16px',
  },
  pageTitle: {
    marginBottom: '16px',
    textAlign: 'center',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    margin: '0 auto',
  },
  formField: {
    marginBottom: '16px',
    width: '100%',
  },
  submitButton: {
    width: '100%',
  },
  successMessage: {
    marginTop: '16px',
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  },
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the data to be sent
    const data = {
      name,
      email,
      message,
    };

    // Post the message to the API endpoint
    fetch('https://6540cf3145bedb25bfc2a8ea.mockapi.io/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        console.log('Message posted successfully:', responseData);
        setIsSubmitted(true); // Set the submission flag to true
      })
      .catch((error) => {
        console.error('Error posting message:', error);
        // Handle any error messages or notifications here
      });
  };

  return (
    <Box sx={styles.pageContainer}>
      <Typography variant="h4" sx={styles.pageTitle}>
        Contact Us
      </Typography>
      {!isSubmitted ? (
        <Box component="form" sx={styles.formContainer} onSubmit={handleSubmit}>
          <TextField
            sx={styles.formField}
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            required
          />
          <TextField
            sx={styles.formField}
            label="Email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            required
          />
          <TextField
            sx={styles.formField}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={handleMessageChange}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={styles.submitButton}>
            Submit
          </Button>
        </Box>
      ) : (
        <Typography variant="h6" sx={styles.successMessage}>
          Thank you for your message! We will get back to you soon.
        </Typography>
      )}
    </Box>
  );
};

export default Contact;