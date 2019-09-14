import React from 'react'

class MyProjects extends React.Component{
    render(){
        return(
            <div id="projectsContainer">

                <a href="https://pacific-sierra-35099.herokuapp.com/"><img className="projects" id="robotCallerApp" src="robocaller.gif" alt="RobotCaller"></img></a>

                <img className="projects" id="tinyHome" src="#" alt="TinyHomeMarket"></img>

                <a href="https://frozen-tor-60140.herokuapp.com"><img className="projects" id="workoutTracker" src="workoutTracker.gif"></img></a>

                <img className="projects" id="finalProject" src="#" alt="MembershipTracker"></img>

            </div>
        )
    }
}
export default MyProjects