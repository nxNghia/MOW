import { Box, Button, TextField, Typography } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../Components/Modals';

import './style.css';

const SignIn = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    const onCloseHandle = () => {
        setOpen(false);
    }

    const modalContent = () => {
        return (
            <Box className='forgot-password__modal'>
                <Typography className='forgot-password__message'>Enter your email to receive password</Typography>
                <Box className='forgot-password__send-email'>
                    <form className='forgot-password__form-control'>
                        <TextField className='forgot-password__email-field' size='small' variant='outlined' placeholder='*******@gmail.com' />
                    </form>
                    <Button className='forgot-password__send-button' color='secondary' variant='contained' >Send</Button>
                </Box>
            </Box>
        );
    }

    const openModalHandle = () => {
        setOpen(true);
    }

    const signupClickHandle = () => {
        navigate('/signup');
    }

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
                <span className='forgot-link' onClick={openModalHandle} >Forgot your password</span>
                <Button color='primary' variant='contained' className='submit-button'>
                    <SendIcon />
                </Button>
                <span className='sign-up-link' onClick={signupClickHandle} >Create account</span>
            </Box>
            <Modal open={open} onClose={onCloseHandle} content={modalContent} />
        </Box>
    )
}

export default SignIn;
