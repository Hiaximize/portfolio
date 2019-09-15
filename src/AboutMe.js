import React from 'react'

class AboutMe extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div id="aboutMeContainer">

                <div id="aboutMeContent">
                    <div id="avatar">
                        <img id="derek" src="Derek.png"></img>
                    </div>    
                    <div id="welcomeMessage">
                        <h6>My name is Derek Barker. I'm a US Army combat Vet, and transitioned to Full-Stack Developer. Solving complex challenges using simple but elegant solutions for clients is something that drives me. </h6>         
                    </div>
                </div>
                
                

                <div id="aboutMeTileContainer">
                    <div className="aboutMeTile scale-in-center"><img className="aboutMeImg scale-in-center" src="userfocused.png"/> User Focused</div>

                    <div className="aboutMeTile scale-in-center"><img className="aboutMeImg scale-in-center" src="responsiveImage.png"/>Responsive Designs</div>

                    <div className="aboutMeTile scale-in-center"><img className="aboutMeImg scale-in-center" src="frontBackEnd.png" />Front & Back End</div>

                    <div className="aboutMeTile scale-in-center">Tenacious Developer</div>
                </div>

            </div>
        )
    }
}
export default AboutMe