import { Box, Typography, Button, TextField } from "@material-ui/core";
import '../style.css';

const AccountInfo = () => {
    return (
        <Box className="user-info__category user-info__account">
            <Typography variant="h6">Account information</Typography>
            <Box className="user-info__container account-info">
                <Box className="user-info__account-category">
                    <Typography>Email:</Typography>
                    <form className="user-info__form-control account-field">
                        <TextField className="user-info__text-field" variant="outlined" size='small' />
                    </form>
                </Box>
                <Box className="user-info__account-category">
                    <Typography>Password:</Typography>
                    <form className="user-info__form-control account-field">
                        <TextField className="user-info__text-field" type="password" variant="outlined" size='small' />
                    </form>
                </Box>
            </Box>
            <Box className="user-info__action">
                <Button variant="contained" className="user-info__btn user-info__action-save">Save</Button>
                <Button variant="contained" className="user-info__btn user-info__action-cancel">Cancel</Button>
            </Box>
        </Box>
    )
}

export default AccountInfo;
