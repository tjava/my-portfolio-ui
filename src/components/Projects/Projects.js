import React from 'react';
import loader from '../../assets/images/loader.gif';
import all from '../../assets/images/all.svg';
import django from '../../assets/images/django.svg';
import react from '../../assets/images/react.svg';
import python from '../../assets/images/python.svg';
import github from '../../assets/images/gh.svg';
import php from '../../assets/images/php.svg';
import laraval from '../../assets/images/laraval.svg';
import node from '../../assets/images/node.svg';
import ionic from '../../assets/images/ionic.svg';
import './Projects.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default class Projects extends React.Component{

    state = {
        projects: [],
        filteredProjects: [],
        languagesButtons: [
            {name: 'All', image: all},
            {name: 'Python', image: python},
            {name: 'Django', image: django},
            {name: 'node', image: node},
            {name: 'React', image: react},
            {name: 'php', image: php},
            {name: 'laraval', image: laraval},
            {name: 'ionic', image: ionic},
            {name: 'GitHub', image: github},
        ],
        loading: true,
    }

    async componentDidMount(){
        const projects = await axios.get('https://shanewkeenan.herokuapp.com/api/projects/');
        this.setState({ projects: projects.data, loading: false, });
        this.setState({filteredProjects: projects.data});
    }

    filterProjects = (event) =>{
        let filteredProjects;

        if(event.target.value === 'All'){
            filteredProjects = this.state.projects;
        } else {
            filteredProjects = this.state.projects.filter(item => {
                let languagesUsed = item.languagesUsed.some(({name}) => name.includes(event.target.value))
                return languagesUsed
            });

        }
        this.setState({
            filteredProjects: filteredProjects
        })
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
                    <div className="projectsPurpleBottomBackground" style={{height: '100vh'}}>
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
                    <Helmet>
                        <title>What I've Made - Projects</title>
                        <meta name="description" content="Here's a bunch of cool and creative websites and programs I've made, check them out!" />
                    </Helmet>
                    <div className="projectsPurpleTopBackground" />
                    <p className="projectsTitle">Projects</p>
                    <p className="projectsSubtitle">Take a look at what I've been working on.</p>
                    <div className="buttonsFilter">
                        {this.state.languagesButtons.map((btn, index) => {
                            return(
                                <div className="btns" >
                                    <input type="image" alt="icon" src={btn.image} title={btn.name} key={index} value={btn.name} onClick={this.filterProjects} />
                                </div>
                            )
                        })
                        }                        
                    </div>
                    <div className="projectsPurpleBottomBackground">
                        <div className="projectsListWrapper">
                            {this.state.filteredProjects.map(project => 
                                    <div className="projectsItem">
                                        <div className="imageBox">
                                            <Link to={`/projects/${project.slug}`}>
                                                <img src={project.image} className="projectsItemImage" alt={project.name} />
                                            </Link>
                                        </div>
                                        <div className="projectsItemTitle" >{project.name}</div>
                                        <div className="projectsItemDescription" >{project.description}</div>
                                        {project.languagesUsed.map(item =>
                                            <img src={item.image} className="projectsLanguages" title={item.name} alt={item.name} />
                                        )}
                                        <Link to={`/projects/${project.slug}`}>
                                            <p className="projectsLearnMore">Learn More</p>
                                        </Link>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            )
        }
    }
}