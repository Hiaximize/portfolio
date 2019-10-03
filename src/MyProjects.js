import React from 'react'

class MyProjects extends React.Component{
    render(){
        return(
            <div id="myProjectsContainer">
                
                <div id="projectsContainer">
                    <hr />
                    <a rel="noopener noreferrer" target="_blank" href="https://hiaximize.github.io"><img className="projects slit-in-vertical" id="robotCallerApp" src="rickAndMorty.gif" alt="RickyAndMorty"></img></a>

                    <hr align="center" className="projectsHr"/>

                    <a rel="noopener noreferrer" target="_blank" href="https://pacific-sierra-35099.herokuapp.com/"><img className="projects slit-in-vertical" id="robotCallerApp" src="robocaller.gif" alt="RobotCaller"></img></a>

                    <hr className="projectsHr"/>

                    <a rel="noopener noreferrer" target="_blank" href="my-tiny-home.herokuapp.com"><img id="tinyHome" className="projects slit-in-vertical" src="tinyHomeMarketPlace.gif" alt="TinyHomeMarket"></img></a>

                    <hr className="projectsHr"/>

                    <a rel="noopener noreferrer" target="_blank" href="https://frozen-tor-60140.herokuapp.com"><img className="projects slit-in-vertical" id="workoutTracker" src="workoutTracker.gif" alt="WorkOut Tracker"></img></a>

                    <hr className="projectsHr"/>

                    <a rel="noopener noreferrer" target="_blank" href="https://rocky-waters-58456.herokuapp.com"><img className="projects" id="finalProject" src="#" alt="MembershipTracker"></img></a>
                </div>
            </div>
        )
    }
}
export default MyProjects