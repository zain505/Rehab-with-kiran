import React from 'react';
import Intro from "../../Components/Intro/Intro";
import Meetus from "../../Components/Meetus/Meetus";
import RightForMe from "../../Components/RightForMe/RightForMe";
import Tele from "../../Components/Tele/Tele";
import VirtualAppointment from "../../Components/VirtualAppointment/VirtualAppointment";
import AwardsSec from "../../Components/AwardsSec/AwardsSec";
import YoutubeChannel from "../../Components/YoutubeChannel/YoutubeChannel";
import Blogging from "../../Components/blogging/blogging";
import SignUp from "../../Components/SignUp/SignUp";
import Footer from "../../Components/Footer/Footer";


function Home() {
    return (
        <>
            <Intro />
            <Meetus />
            <Tele />
            <RightForMe />
            <VirtualAppointment />
            {/* <AwardsSec/> */}
            <YoutubeChannel />
            <Blogging />
            <SignUp />
            <Footer />
        </>
    );
}

export default Home;