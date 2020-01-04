import React from 'react'

class MyProjects extends React.Component{
    render(){
        return(
            <div id="myProjectsContainer">
                
                <div id="projectsContainer">
                    
                    <a className="projects" rel="noopener noreferrer" target="_blank" href="http://www.apexelitedirectmarketing.com"><img className="slit-in-vertical projectsImg" id="apex" src="/Dereks_Portfolio_files/apexDirectMarketing.png" alt="Apex Elite Direct Marketing"></img></a>

                    <a className="projects" rel="noopener noreferrer" target="_blank" href="http://www.incrediblecutz.herokuapp.com"><img className="slit-in-vertical projectsImg" id="incredibleCutz" src="/Dereks_Portfolio_files/incredibleCutz.png" alt="Incredible Cutz Barbershop"></img></a>

                    <a className="projects" rel="noopener noreferrer" target="_blank" href="https://hiaximize.github.io"><img className="slit-in-vertical projectsImg" id="rickAndMorty" src="rickAndMorty.gif" alt="RickyAndMorty"></img></a>

                    {/* <hr align="center" className="projectsHr"/> */}

                    <a className="projects" rel="noopener noreferrer" target="_blank" href="https://pacific-sierra-35099.herokuapp.com/"><img className="slit-in-vertical projectsImg" id="robotCallerApp" src="robocaller.gif" alt="RobotCaller"></img></a>

                    {/* <hr className="projectsHr"/> */}

                    <a className="projects" rel="noopener noreferrer" target="_blank" href="my-tiny-home.herokuapp.com"><img id="tinyHome" className="slit-in-vertical projectsImg" src="tinyHomeMarketPlace.gif" alt="TinyHomeMarket"></img></a>

                    {/* <hr className="projectsHr"/> */}

                    <a className="projects" rel="noopener noreferrer" target="_blank" href="https://frozen-tor-60140.herokuapp.com"><img className="slit-in-vertical projectsImg" id="workoutTracker" src="workoutTracker.gif" alt="WorkOut Tracker"></img></a>

                    {/* <hr className="projectsHr"/> */}

                </div>
            </div>
        )
    }
}
export default MyProjects