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
import { LoginUser } from '../Services/apiService';
import { NameContext } from '../Context/context';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Login() {

  const {currentUser, setCurrentUser}=useContext (NameContext);
  const [user,setUser]=useState({
    email:"",
    password:"" 
  
  });
  const navigate=useNavigate();
  
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      document.getElementById('login-form').reset();
     toast.loading(<div>Fetching data</div>,{
      position:toast.POSITION.TOP_CENTER
     })
   const response = await LoginUser(user);
   toast.dismiss();
  
   console.log(response);
   if(response.status){
    toast.success('Login Successful!', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
   setCurrentUser({email:user.email,token:response.data.jwttoken});
   localStorage.setItem("token",`${response.data.jwttoken}`);
   localStorage.setItem("email",`${user.email}`)
      console.log({...currentUser});
      navigate('/home')
   }

    } catch (error) {
      toast.dismiss();
    
      toast.error(`${error.response.data.message}`, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
      console.log(error)
      
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
            Sign up
          </Typography>
          <Box component="form"  onSubmit={handleSubmit} sx={{ mt: 3 }} id='login-form'>
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
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setUser({...user,[e.target.name]: e.target.value })}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Remember me"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
            <Grid container justifyContent="space-between">
              <Grid item>
                <Link href="/register" variant="body2">
                  Don't have account? Create new
                </Link>
                
              </Grid>
              <Grid item>
                <Link href="/forget" variant="body2">
                  Forget Password?
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