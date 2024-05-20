import React from 'react';
import Card from '../../../components/Card';
import { Tabs, Tab, Box, Typography, colors, Stack, Divider } from '@mui/material';
import '../../../App.css';
import '../../../styles/Team.css';
import TeamMatchITem from './TeamMatcheItem';


function TeamMatches() {
    return (
        <>
            <div className="team-matches">
                <Stack spacing={2} divider={<Divider orientation="horizontal" flexItem />}>
                <Typography variant="h3" className='team-name' align="left" >Matches</Typography>
                <TeamMatchITem/>
                <TeamMatchITem/>
                <TeamMatchITem/>
                </Stack>
            </div>
        </>
    )
}

export default TeamMatches;