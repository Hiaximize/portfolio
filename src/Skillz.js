import React from 'react'

class Skillz extends React.Component{
    render(){
        return(
            <div id="skillzContainer">

                    <div className="skill swirl-in-fwd" id="node">
                        {/* <h3> Node.js</h3> */}
                        <img className="skillPicture swirl-in-fwd" src="node.png" id="node"></img>
                    </div>

                    <div className="skill swirl-in-fwd">
                        {/* <h3>Javascript</h3> */}
                        <img id="javascript" className="skillPicture" src="javascript.png"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="angular">
                        {/* <h3>Angular</h3> */}
                        <img className="skillPicture" src="angular.png"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="html">
                        {/* <h3>HTML</h3> */}
                        <img className="skillPicture" src="html.png"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="css">
                        {/* <h3>CSS</h3> */}
                        <img className="skillPicture" src="css.png"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="mongo">
                        {/* <h3>Mongo</h3> */}
                        <img className="skillPicture" src="mongodb.png"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="python">
                        {/* <h3>Python</h3> */}
                        <img className="skillPicture" src="python.png"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="ruby">
                        {/* <h3>Ruby</h3> */}
                        <img className="skillPicture" src="ruby.png"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="relationDb">
                        {/* <h3>PostgreSQL</h3> */}
                        <img className="skillPicture" src="sql.png"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="JQuery">
                        {/* <h3>JQuery</h3> */}
                        <img className="skillPicture" src="jquery.png"></img>
                    </div>

                    <div className="skill swirl-in-fwd" id="react">
                        {/* <h3>React</h3> */}
                        <img className="skillPicture" src="#"></img>
                    </div>
            </div>  
        )
    }
}

export default Skillz