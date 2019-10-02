import React from 'react'

class MyProjects extends React.Component{
    render(){
        return(
            <div id="myProjectsContainer">
            
                    <a target="_blank" href="https://hiaximize.github.io"><img className="projects slit-in-vertical" id="robotCallerApp" src="rickAndMorty.gif" alt="RickyAndMorty"></img></a>

                    <hr />

                    <a target="_blank" href="https://pacific-sierra-35099.herokuapp.com/"><img className="projects slit-in-vertical" id="robotCallerApp" src="robocaller.gif" alt="RobotCaller"></img></a>

                    <hr />

                    <a target="_blank" href="my-tiny-home.herokuapp.com"><img className="projects" id="tinyHome" className="projects slit-in-vertical" src="tinyHomeMarketPlace.gif" alt="TinyHomeMarket"></img></a>

                    <hr />

                    <a target="_blank" href="https://frozen-tor-60140.herokuapp.com"><img className="projects slit-in-vertical" id="workoutTracker" src="workoutTracker.gif"></img></a>

                    <hr />

                    <img className="projects slit-in-vertical" id="finalProject" src="#" alt="MembershipTracker image coming soon when project is completed"></img>

            </div>
        )
    }
}
export default MyProjects