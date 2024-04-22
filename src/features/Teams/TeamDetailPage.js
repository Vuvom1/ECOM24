import React from 'react';
import '../../App.css';
import './Team.css';
import Footer from '../../components/Footer';
import TeamHeader from './TeamHeader.js';
import TeamItem from './TeamItem.js';
import TeamTab from './TeamTab.js';



function TeamDetailPage() {
    return (
        <>
            <TeamHeader></TeamHeader>
            <TeamTab></TeamTab>
            <Footer />
        </>
    )
}

export default TeamDetailPage;