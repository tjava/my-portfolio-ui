import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import loader from '../../assets/images/loader.gif';
import './ProjectDetail.css';
import { Helmet } from 'react-helmet';



export default class ProjectDetail  extends React.Component{
    
    state = {
        project: [],
        loading: true,
    }

    async componentDidMount(){
        const projects = await axios.get(`https://shanewkeenan.herokuapp.com/api/projects/?search=${this.props.match.params.slug}`);
        this.setState({ project: projects.data, loading: false, });
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
                    <div className="detailsPurpleBottomBackground" style={{height: '100vh'}}>
                        <div className="loadingScreenWrapper">
                        <div className="loadingScreenTitle">Loading...</div>
                        <p className="loadingScreenSubtitle">Retreiving the data, please wait.</p>
                        <img src={loader} className="loadingScreenImage" alt="loading" />
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className="container">
                    <div className="detailsPurpleBottomBackground">
                        {this.state.project.map(project=>
                            <div key={project.id}>
                                <Helmet>
                                    <title>{project.name}</title>
                                    <meta name="description" content={project.description} />
                                </Helmet>
                                <p className="detailsTitle">{project.name}</p>  
                                <div className="languagesListWrapper">
                                    {project.languagesUsed.map(language => <img src={language.image} className="languagesList" title={language.name} alt={language.name} />)}   
                                </div>
                                <div className="detailsWrapper">
                                    <div className="detailsImageBox">
                                        <img src={project.image} className="detailsImage" alt={project.name} />
                                    </div>
                                    <div className="detailsDescriptionBox">
                                        <Link to={'/projects'}>
                                            <p className="detailsButton">Go Back</p>
                                        </Link>
                                        <p className="detailsDescriptionTitle">Description</p>
                                        <p className="detailsDescriptionText">{project.detailDescription}</p>
                                        <p className="detailsDescriptionTitle">Skills Learned</p>
                                        <ul>
                                            {project.skills.map(skill => <li className="detailsDescriptionSkills">{skill.text}</li> )}
                                        </ul>
                                        {project.links.map(link => <a target="_blank" href={link.link} rel="noreferrer"><p className="detailsButton">{link.name}</p></a> )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )
        }  
    }
}