import React from "react";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import TextField from '@material-ui/core/TextField';
import "./index.css"

function Login() {
    return (

        <Stack direction="column" spacing={1} alignItems="center">
            <LoginIcon />
            <Typography>
                Log in
            </Typography>
            <form>
                <Stack direction="column" spacing={2} width="400px">
                    <div>
                        <Stack direction="column" spacing={1}>
                            <TextField
                                variant="outlined"
                                placeholder="Email Address *"
                                margin="normal"
                            />
                            <TextField
                                variant="outlined"
                                placeholder="Password *"
                                margin="normal"
                            />
                        </Stack>
                    </div>
                    <Button variant="contained" >
                        Log in
                    </Button>
                </Stack>
            </form>
        </Stack>

    );
};


export default Login;