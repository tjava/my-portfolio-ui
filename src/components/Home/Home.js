import React from 'react';
import me from '../../assets/images/me.png';
import wrench from '../../assets/images/wrench.svg';
import cogs from '../../assets/images/cogs.svg';
import github from '../../assets/images/github.svg';
import {Link} from 'react-router-dom';
import './Home.css';
import {Helmet} from 'react-helmet';


export default class Home extends React.Component{

    render(){
        return (
            <main className="container">
                <Helmet>
                <title>Developer - Taiwo Hassan </title>
                    <meta name="description" content="Software developer and programmer, capable in a wide variety of skills and languages. Check me out!" />
                </Helmet>
                <div className="homepageWhiteBackground">
                    <img src={me} alt="Taiwo Hassan" className="homepageImage" />
                    <p className="homepageTitle">Taiwo Hassan</p>
                    <p className="homepageSubtitle">Software Developer</p>
                    <div className="homepagePurpleBackground">
                        <p className="homepageText">Hi I'm Taiwo. I'm a software developer who loves to play around with programming and learning new things.</p>
                        <div className="homepageIconsWrapper">
                            <div className="homepageIcons">
                                <Link to={`/projects`}>
                                    <img alt="wrench" src={wrench} />
                                    <p className="homepageIconsText">Projects</p>
                                </Link>
                            </div>
                            <div className="homepageIcons">
                                <a href="https://github.com/tjava" target="_blank" rel="noreferrer">
                                <img alt="github" src={github} />
                                <p className="homepageIconsText">Github</p>
                                </a>
                            </div>
                            <div className="homepageIcons">
                                <Link to={`/skills`}>
                                <img alt="cogs" src={cogs} />
                                <p className="homepageIconsText">Skills</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}