import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { ForgetPassword } from '../Services/apiService';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Forget() {


  const [user,setUser]=useState({
    
    email:"",
  
  })
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      document.getElementById('forget-form').reset();
      
      toast.loading(<div>Fetching data</div>,{
        position:toast.POSITION.TOP_CENTER
       })
  const response=await ForgetPassword(user);
  toast.dismiss();
  
  if(response.status){
    toast.success('Password reset mail sent!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
  }
      
    } catch (error) {
      toast.dismiss();
      console.log(error);
      toast.error('Unable to send mail', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      
    }
   
  };

  return (
    <div
   
  
>
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" style={{backgroundColor:'white'}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forget Password
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }} id='forget-form'>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e)=>setUser({...user,[e.target.name]: e.target.value })}
                />
              </Grid>
              
              <Grid item xs={12}>
              <Typography color='red'>Enter Registered Email Address</Typography>
                
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Send Reset Link
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
       
      </Container>
    </ThemeProvider>
    </div>
  );
}