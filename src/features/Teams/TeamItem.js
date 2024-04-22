import React from 'react'
import './Team.css'
import { Tabs, Tab, Box, Typography, colors } from '@mui/material';

function TeamItem ({ name, logoUrl }) {

    return (
        <div className="team-item">
            <a href='./teamdetail' className="team-wrap" title='' >
                <span>
                <img src={logoUrl} alt={`${name} Logo`} sizes='10'/>
                </span>
                <Typography variant="body1" className='team-name' align="center" mt={1}>{name}</Typography>
            </a>
        </div>
    )
}

export default TeamItem
