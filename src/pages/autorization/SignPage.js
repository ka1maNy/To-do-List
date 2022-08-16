import React from "react";
import LoginIcon from '@mui/icons-material/Login';
import CreateIcon from '@mui/icons-material/Create';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "../../index.css";
import Login from "./Login";
import Reg from "./Reg"

const SignPage = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }} >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="RegTab">
                        <Tab icon={<LoginIcon />} label="Log in" value="1" />
                        <Tab icon={<CreateIcon />} label="Register" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1"><Login /></TabPanel>
                <TabPanel value="2"><Reg /></TabPanel>
            </TabContext>
        </Box>
    );
}

export default SignPage;