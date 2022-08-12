import React, { useState } from "react";
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import TextField from '@material-ui/core/TextField';
import "./index.css"

export default function Reg() {
    let submitFName = '';
    let submitLName = '';
    let submitEmail = '';
    let submitPass = '';
    const [FName, setFName] = useState();
    const [LName, setLName] = useState();
    const [Email, setEmail] = useState();
    const [Pass, setPass] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (FName && LName && Email && Pass) {
            submitFName = FName;
            submitLName = LName;
            submitEmail = Email;
            submitPass = Pass;
        }
    }

    return (

        <Stack direction="column" spacing={0} alignItems="center">
            <CreateIcon />
            <Typography>
                Register
            </Typography>
            <form>
                <Stack direction="column" spacing={2} width="400px">
                    <div>
                        <Stack direction="column" spacing={1}>
                            <TextField
                                variant="outlined"
                                label="First Name"
                                margin="normal"
                                required
                                onChange={(e) => setFName(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                label="Last Name"
                                margin="normal"
                                required
                                onChange={(e) => setLName(e.target.value)}
                            />
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
                    <Button variant="contained" onClick={handleSubmit} >
                        Register
                    </Button>
                </Stack>
            </form>
        </Stack>
    )

}