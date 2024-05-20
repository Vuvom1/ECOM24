import React from 'react';
import '../../App.css';
import '../../styles/Team.css';
import Footer from '../../components/Footer.js';
import TeamHeader from './widgets/TeamHeader.js';
import TeamTab from './widgets/TeamTab.js';



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