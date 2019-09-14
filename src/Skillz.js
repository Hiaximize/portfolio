import React from 'react'

class Skillz extends React.Component{
    render(){
        return(
            <div id="skillzContainer">

                    <div className="skill swirl-in-fwd" id="node">
                        {/* <h3> Node.js</h3> */}
                        <img className="skillPicture swirl-in-fwd" src="node.png" id="node" alt="Node.js"></img>
                    </div>

                    <div className="skill swirl-in-fwd">
                        {/* <h3>Javascript</h3> */}
                        <img id="javascript" className="skillPicture" src="javascript.png" alt="Javascript"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="angular">
                        {/* <h3>Angular</h3> */}
                        <img className="skillPicture" src="angular.png" alt="Angular"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="html">
                        {/* <h3>HTML</h3> */}
                        <img className="skillPicture" src="html.png" alt="HTML"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="css">
                        {/* <h3>CSS</h3> */}
                        <img className="skillPicture" src="css.png" alt="CSS"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="mongo">
                        {/* <h3>Mongo</h3> */}
                        <img className="skillPicture" src="mongodb.png" alt="Mongo"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="python">
                        {/* <h3>Python</h3> */}
                        <img className="skillPicture" src="python.png" alt="Python"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="ruby">
                        {/* <h3>Ruby</h3> */}
                        <img className="skillPicture" src="ruby.png" alt="Ruby"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="relationDb">
                        {/* <h3>PostgreSQL</h3> */}
                        <img className="skillPicture" src="sql.png" alt="PostGreSQL"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="JQuery">
                        {/* <h3>JQuery</h3> */}
                        <img className="skillPicture" src="jquery.png" alt="JQuery"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="react">
                        {/* <h3>React</h3> */}
                        <img className="skillPicture" src="#" alt="React"></img>
                    </div>
            </div>  
        )
    }
}

export default Skillz