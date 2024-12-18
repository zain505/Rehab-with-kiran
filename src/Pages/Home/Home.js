import React from 'react';
import Intro from "../../Components/Intro/Intro";
import Meetus from "../../Components/Meetus/Meetus";
import RightForMe from "../../Components/RightForMe/RightForMe";
import Tele from "../../Components/Tele/Tele";
import VirtualAppointment from "../../Components/VirtualAppointment/VirtualAppointment";
import AwardsSec from "../../Components/AwardsSec/AwardsSec";


function Home() {
    return (
        <>
            <Intro />
            <Meetus />
            <Tele />
            <RightForMe/>
            <VirtualAppointment/>
            <AwardsSec/>
        </>
    );
}

export default Home;