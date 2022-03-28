import { Box, Typography, TextField, Button } from '@material-ui/core';
import '../style.css';

const BasicInfo = () => {
    return (
        <Box className="user-info__category user-info__basic">
            <Typography variant="h6">Basic information</Typography>
            <Box className="user-info__container">
                <Box className="user-info__container-left">
                    <Box className="user-info__basic-category">
                        <Typography>First name:</Typography>
                        <form className="user-info__form-control">
                            <TextField className="user-info__text-field" variant="outlined" size='small' />
                        </form>
                    </Box>
                    <Box className="user-info__basic-category">
                        <Typography>Phone:</Typography>
                        <form className="user-info__form-control">
                            <TextField className="user-info__text-field" variant="outlined" size='small' />
                        </form>
                    </Box>
                </Box>
                <Box className="user-info__container-right">
                    <Box className="user-info__basic-category">
                        <Typography>Last name:</Typography>
                        <form className="user-info__form-control">
                            <TextField className="user-info__text-field" variant="outlined" size='small' />
                        </form>
                    </Box>
                    <Box className="user-info__basic-category">
                        <Typography>Work at:</Typography>
                        <form className="user-info__form-control">
                            <TextField className="user-info__text-field" variant="outlined" size='small' />
                        </form>
                    </Box>
                </Box>
            </Box>
            <Box className="user-info__action">
                <Button variant="contained" className="user-info__btn user-info__action-save">Save</Button>
                <Button variant="contained" className="user-info__btn user-info__action-cancel">Cancel</Button>
            </Box>
        </Box>
    )
}

export default BasicInfo;
