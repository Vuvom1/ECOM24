import React from 'react';
import '../../App.css';
import './Team.css';
import Footer from '../../components/Footer';
import TeamItem from './TeamItem.js';
import { Tabs, Tab, Box, Typography, colors } from '@mui/material';


function TeamsPage() {
    return (
        <>
            <div className="content" >
                <div className="team-overview">
                    <div className="pk-col pk-col--span-00-4 pk-col--span-ss-4 pk-col--span-xs-4 pk-col--span-sm-8 pk-col--span-md-12 pk-col--span-lg-12"  >
                        <header>Teams</header>
                        <div>
                            <div className="team-overview-group">
                            <Typography variant="h4" className='team-name' align="left" mt={1}>Group stage</Typography>

                                <div className="teams-overview-team-wrapper">
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Albania'  ></TeamItem>
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Austria'  ></TeamItem>
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Austria'  ></TeamItem>
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Austria'  ></TeamItem>
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Austria'  ></TeamItem>
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Austria'  ></TeamItem>
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Austria'  ></TeamItem>
                                </div>
                                
                                
                            </div>

                            <div className="team-overview-group">
                                <h2 className="team-overview-label">Play-off</h2>

                                <div className="teams-overview-team-wrapper">
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/ALB.png' name='Albania'  ></TeamItem>
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Austria'  ></TeamItem>
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Austria'  ></TeamItem>
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Austria'  ></TeamItem>
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Austria'  ></TeamItem>
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Austria'  ></TeamItem>
                                    <TeamItem  logoUrl='https://img.uefa.com/imgml/flags/70x70/AUT.png' name='Austria'  ></TeamItem>
                                </div>

                                
                                
                            </div>


                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default TeamsPage;