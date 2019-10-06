import React from 'react'

class Footer extends React.Component{
    render(){
        return(
            
            <div id = "test">
                <h4 id="contactMeHeader">Contact Me</h4>
                <div id="triangles">
                    <span id="leftTriangle" /><span id="rightTriangle" />
                </div>

                <div id="linksContainer">
                    
                    <ul id="footer">
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dbarkerit"><img id="linkedin" src="linkedin.png" /></a></li>

                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.github.com/hiaximize"><img src="myGithub.png" /></a></li>

                        <li><a href="/Derek_Barker_Full_Stack_Developer_Resume.pdf" download><img src="resume.png" /></a></li>
                    </ul>
                </div>
            </div>
         
        )
    }
}

export default Footer