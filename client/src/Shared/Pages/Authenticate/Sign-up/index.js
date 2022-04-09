import { Box, Button, TextField, Typography, MenuItem, Select, FormControl, InputLabel, Container, Avatar } from '@material-ui/core';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import Modal from '@material-ui/core/Modal';
import './style.css';

const SignUp = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCancel = () => {
        navigate(-1);
    }

    return (
        <Box className='container-sign-up'>
            <Box className='form-container-sign-up'>
                <Box className='input-field'>
                    <Box className='left-container'>
                        <Typography className='form-title'>Create account</Typography>                    
                        <form  className='require-input-form'>
                            <TextField className='require-form-field' size='small' variant='outlined' placeholder='First name' />
                        </form>
                        <form className='require-input-form'>
                            <TextField className='require-form-field' size='small' variant='outlined' placeholder='Last name' />
                        </form>
                        <form className='require-input-form'>
                            <TextField className='require-form-field' size='small' variant='outlined' placeholder='Email' />
                        </form>
                        <form className='require-input-form'>
                            <TextField className='require-form-field' size='small' variant='outlined' placeholder='Password' />
                        </form>
                        <form className='require-input-form'>
                            <TextField className='require-form-field' size='small' variant='outlined' placeholder='Confirm Password' />
                        </form>
                        <Box>
                            <Button variant='contained' className='submit-button cancel-submit' onClick={handleCancel}>
                                CANCEL
                            </Button>
                            <Button variant='contained' className='submit-button confirm-submit' onClick={handleOpen}>
                                CONFIRM
                            </Button>
                        </Box>
                    </Box>
                    <Box className='right-container'>
                        <Avatar className='avatar-container' />
                        <FormControl className="Drop-down">
                            <InputLabel className='place-holder'>Use as ... </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                variant="outlined">
                                <MenuItem value={1}>Developer</MenuItem>
                                <MenuItem value={2}>Project manager</MenuItem>
                                <MenuItem value={3}>Bridge engineer</MenuItem>
                                <MenuItem value={4}>QA</MenuItem>
                                <MenuItem value={5}>Other...</MenuItem>
                            </Select>
                        </FormControl>                    
                    </Box>                
                </Box>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <Box className='confirm-email-box'>
                    <Typography className='notication'>Check your email for confirmation code</Typography>                    
                    <TextField className='input-code-field' size='small' variant='outlined' placeholder='Verification code' />
                    <Button variant='contained' className='submit-button send-button'>
                        Resend
                    </Button>
                </Box>
            </Modal>
        </Box>
    )
}

export default SignUp;
