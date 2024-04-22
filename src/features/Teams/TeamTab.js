import React from 'react';
import '../../App.css';
import './Team.css';
import PropTypes from 'prop-types';
import { Tabs, Tab, Box, Typography, colors } from '@mui/material';
import TeamOverview from './TeamOverview';
import TeamMatches from './TeamMatches';



function TeamTab() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{borderBottom: 1, background: '#143cdb', borderColor: 'divider' }}>
                <Tabs value={value}  textColor="#fff" onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Overview"/>
                    <Tab label="Matches"{...a11yProps(1)} />
                    <Tab label="Stats" {...a11yProps(2)} />
                    <Tab label="Squad" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <TeamOverview/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <TeamMatches/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Item Four
            </CustomTabPanel>
        </>
    )
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default TeamTab;