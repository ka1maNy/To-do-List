import React, { useState } from "react";
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import TextField from '@material-ui/core/TextField';
import "./index.css"

function Login() {
    let submitEmail;
    let submitPass;
    const [Email, setEmail] = useState();
    const [Pass, setPass] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Email && Pass) {
            submitEmail = Email;
            submitPass = Pass;
        }
    }

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
                                label="Email Address"
                                margin="normal"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                label="Password"
                                margin="normal"
                                required
                                onChange={(e) => setPass(e.target.value)}
                            />
                        </Stack>
                    </div>
                    <Button variant="contained" onClick={handleSubmit}>
                        Log in
                    </Button>
                </Stack>
            </form>
        </Stack>

    );
};


export default Login;