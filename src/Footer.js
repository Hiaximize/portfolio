import React from 'react'

class Footer extends React.Component{
    render(){
        return(
            <div id="footerContainer">

                <a id="upLink" href="#"><div id="top">
                    <div className="upArrow up"></div>
                    {/* <div className="upArrow up"></div> */}
                </div></a>

                <div id="triangles">
                    <span id="leftTriangle">
                          <h4 id="contactMeHeader">Contact Me</h4>
                        <form method ="POST"
                action="https://formspree.io/xaraoakm">
                        
                        <input placeholder="First Name" type="text" name="firstName" id="contactMeFirstName" required/><br />
                        <input placeholder="Last Name" name="lastName" id="contactMeLastName" required/><br />
                        <input type="email" id="contactMeEmail" name="email" placeholder="Email" required /><br />
                        <textarea name="message" placeholder="message" id="contactMeMessage" /* rows="5" cols="30" */ required/><br />
                        <input type="submit" id="submit" value="Contact Me"/>
                        </form>
                    </span>
                    <span id="rightTriangle" />
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