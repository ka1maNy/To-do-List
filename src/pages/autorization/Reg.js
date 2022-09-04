import React from "react";
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import Stack from '@mui/material/Stack';
import { Typography } from "@mui/material";
import TextField from '@material-ui/core/TextField';
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import RequestReg from './../../requests/requestReg';

export default function Reg() {

    const navigateTo = useNavigate();

    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        dispatch(RequestReg(data.name, data.email, data.pass));
        navigateTo("todo");
    }

    return (

        <Stack direction="column" spacing={0} alignItems="center">
            <CreateIcon />
            <Typography>
                Register
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack direction="column" spacing={2} width="400px">
                    <div>
                        <Stack direction="column" spacing={1}>
                            <TextField
                                variant="outlined"
                                label="Name"
                                margin="normal"
                                {...register("name", {
                                    required: "Required",
                                })}
                                error={!!errors?.name}
                                helperText={errors?.name ? errors.name.message : null}
                            />
                            <TextField
                                variant="outlined"
                                label="Email Address"
                                margin="normal"
                                {...register("email", {
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    },
                                })}
                                error={!!errors?.email}
                                helperText={errors?.email ? errors.email.message : null}
                            />
                            <TextField
                                variant="outlined"
                                label="Password"
                                margin="normal"
                                {...register("pass", {
                                    required: "Required",
                                    minLength: {
                                        value: 8,
                                        message: 'Minimal length - 8'
                                    }
                                })}
                                error={!!errors?.pass}
                                helperText={errors?.pass ? errors.pass.message : null}
                            />
                        </Stack>
                    </div>
                    <Button type="submit" variant="contained" >
                        Register
                    </Button>
                </Stack>
            </form>
        </Stack>
    )

}