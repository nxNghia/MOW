import { Avatar, Box, Container, IconButton, Typography } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountInfo from "./Account";
import BasicInfo from "./Basic";
import './style.css';

const UserInformation = () => {
    return (
        <Container className="user-info-root">
            <IconButton className="back-button">
                <ArrowBackIcon />
            </IconButton>
            <Box className="user-info__container">
                <Box className="user-info__left-side">
                    <Box className="user-info__avatar-container">
                        <Typography className="user-info__avatar-update">Update avatar</Typography>
                        <Avatar className="user-info__avatar"></Avatar>
                    </Box>
                </Box>
                <Box className="user-info__right-side">
                    <BasicInfo />
                    <AccountInfo />
                </Box>
            </Box>
        </Container>
    );
}

export default UserInformation;
