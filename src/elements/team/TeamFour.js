import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";
import {Link} from "react-router-dom";
import ScrollAnimation from "react-animate-on-scroll";

const teamData = [
    {
        image: 'team-dark-01',
        name: 'Oscar zepeda',
        designation: 'Sr Product Designer',
        location: 'CDMX, MX', 
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]
       
    },
    {
        image: 'team-dark-02',
        name: 'Fercho Mena',
        designation: 'Manager',
        location: 'CDMX', 
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiLinkedin />,
                url: '#'
            },
        ]
      
    },
    {
        image: 'team-dark-03',
        name: 'Luis Mora',
        designation: 'Software Developer',
        location: 'MTY, MX', 
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]
        
    },
    {
        image: 'team-dark-04',
        name: 'Juan Perez',
        designation: 'Accounts Manager',
        location: 'MTY, MX', 
        description: 'Yes, I am a product designer. I have a passion for product design.',
        socialNetwork: [
            {
                icon: <FiFacebook />,
                url: '#'
            },
            {
                icon: <FiTwitter />,
                url: '#'
            },
            {
                icon: <FiInstagram />,
                url: '#'
            },
        ]
        
    },
]


const TeamFour = ({column , teamStyle}) => {
    return (
        <div className="row row--15">
            {teamData.map((data, index) => (
                <div className={`${column}`} key={index}>
                    <ScrollAnimation 
                    animateIn="fadeInUp"
                    animateOut="fadeInOut"
                    animateOnce={true}>
                        <div className={`rn-team ${teamStyle}`}>
                            <div className="inner">
                                <figure className="thumbnail">
                                    <img src={`./images/team/${data.image}.jpg`} alt="Corporate React Template" />
                                </figure>
                                <figcaption className="content">
                                    <div className="team-info">
                                        <h2 className="title">{data.name}</h2>
                                        <h6 className="subtitle theme-gradient">{data.designation}</h6>
                                        <div className="team-form">
                                            <span className="location">{data.location}</span>
                                        </div>
                                    </div>
                                </figcaption>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            ))}
        </div>
    )
}
export default TeamFour;
