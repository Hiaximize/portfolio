import React from 'react'

class MyProjects extends React.Component{
    render(){
        return(
            <div id="myProjectsContainer">
            
                <div id="projectsContainer">

                    <a target="_blank" href="https://hiaximize.github.io"><img className="projects slit-in-vertical" id="robotCallerApp" src="rickAndMorty.gif" alt="RickyAndMorty"></img></a>

                    <a target="_blank" href="https://pacific-sierra-35099.herokuapp.com/"><img className="projects slit-in-vertical" id="robotCallerApp" src="robocaller.gif" alt="RobotCaller"></img></a>

                    <a target="_blank" href="my-tiny-home.herokuapp.com"><img className="projects" id="tinyHome" className="projects slit-in-vertical" src="tinyHomeMarketPlace.gif" alt="TinyHomeMarket"></img></a>

                    <a target="_blank" href="https://frozen-tor-60140.herokuapp.com"><img className="projects slit-in-vertical" id="workoutTracker" src="workoutTracker.gif"></img></a>

                    <img className="projects" id="finalProject" src="#" alt="MembershipTracker"></img>

                </div>
            </div>
        )
    }
}
export default MyProjects