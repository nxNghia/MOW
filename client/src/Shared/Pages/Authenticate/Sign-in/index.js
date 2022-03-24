import { Box, Button, TextField, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import './style.css';

const SignIn = () => {
    return (
        <Box className='container'>
            <Box className='form-container'>
                <Typography className='form-title'>Sign in</Typography>
                <form  className='form-control'>
                    <TextField className='form-field-username' size='small' variant='outlined' placeholder='username' />
                </form>
                <form className='form-control'>
                    <TextField className='form-field-password' size='small' variant='outlined' placeholder='password' />
                </form>
                <span className='forgot-link'>Forgot your password</span>
                <Button color='primary' variant='contained' className='submit-button'>
                    <SendIcon />
                </Button>
                <span className='sign-up-link'>Create account</span>
            </Box>
        </Box>
    )
}

export default SignIn;
