import React from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import loader from '../../assets/images/loader.gif';
import './Skills.css';


export default class Skills extends React.Component{

    state = {
        skills: [],
        loading: true,
    }

    async componentDidMount(){
        const skills = await axios.get('https://shanewkeenan.herokuapp.com/api/languages/');
        this.setState({ skills: skills.data, loading: false, });
    }
    
    render(){ 
        var {loading} = this.state;
        if (loading){
            return (
                <div className="container">
                    <Helmet>
                        <title>Loading...</title>
                        <meta name="description" content="Software developer and programmer, capable in a wide variety of skills and languages. Check me out!" />
                    </Helmet>
                    <div className="skillsPurpleBackground" style={{height: '100vh'}}>
                        <div className="loadingScreenWrapper">
                        <div className="loadingScreenTitle">Loading...</div>
                        <p className="loadingScreenSubtitle">Retreiving the data, please wait.</p>
                        <img src={loader} className="loadingScreenImage" alt="loading" />
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="container">
                    <Helmet>
                        <title>What I Know - Skills</title>
                        <meta name="description" content="A wide variety of skills that I can program in, check them out and see if we match!" />
                    </Helmet>
                    <p className="skillsTitle">Skills</p>
                    <p className="skillsSubtitle">This is what I've worked with.</p>
                    <div className="skillsPurpleBackground">
                        <div className="skillsListWrapper">
                            {this.state.skills.filter(skill => !skill.name.includes('Y')).map(skill => 
                                    <div className="skillsItem">
                                        <img src={skill.image} className="skillsItemImage" alt={skill.name} />
                                        <div className="skillsItemText" >{skill.name}</div>
                                    </div>
                                )
                            }
                        </div>
                        <p className="skillsListText">For something more tangible, take a look at my projects.</p>
                    </div>
                </div>
            )}
        }
}