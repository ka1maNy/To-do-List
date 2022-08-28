import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import './index.css';
import Stack from '@mui/material/Stack';
import LoginIcon from '@mui/icons-material/Login';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from "react-router-dom";
import RequestLogout from './requests/requestLogout';

export let loginStatus = new Map();
loginStatus.set('logged', false);
loginStatus.set('can login', true);

const MyAppBar = () => {

    const navigateTo = useNavigate();

    const handleSubmithome = (e) => {
        e.preventDefault();
        if (loginStatus.get('logged') === true) {
            navigateTo("todo");
        }
        else {
            alert('You need to Login or Register');
        }
    }

    const handleSubmitlog = (e) => {
        e.preventDefault();
        if (loginStatus.get('logged') === true) {
            RequestLogout();
            navigateTo("/");
        }
        else {
            navigateTo("/");
        }
    }

    return (
        <>
            <form>
                <Box >
                    <AppBar position="static">
                        <Toolbar>
                            <Stack direction="row" spacing={85}>
                                <IconButton color="default" size="large" edge="start" onClick={handleSubmithome}>
                                    <HomeIcon />
                                </IconButton>
                                <IconButton color="default" size="large" edge="end" onClick={handleSubmitlog}>
                                    <LoginIcon />
                                </IconButton>
                            </Stack>
                        </Toolbar>
                    </AppBar>
                </Box>
            </form >
        </>
    );
}

export default MyAppBar;
