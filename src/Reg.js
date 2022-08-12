import React from "react";
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import TextField from '@material-ui/core/TextField';
import "./index.css"

export default function Reg() {
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
                                placeholder="First Name *"
                                margin="normal"
                            />
                            <TextField
                                variant="outlined"
                                placeholder="Last Name *"
                                margin="normal"
                            />
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
                        Register
                    </Button>
                </Stack>
            </form>
        </Stack>
    )

}