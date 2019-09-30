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
                        <img className="slide-in-right" id="derek" src="Derek.png"></img>
                    </div>    
                    <div className="slide-in-left" id="welcomeMessage">
                        <h6>My name is Derek Barker. I'm a US Army combat Vet, and transitioned to Full-Stack Developer. Solving complex challenges using simple but elegant solutions for clients is something that drives me. </h6>         
                    </div>
                </div>
                
                

                <div id="aboutMeTileContainer">
                    <div className="aboutMeTile scale-in-center"><img className="aboutMeImg scale-in-center" src="userfocused.png" alt="scaled in user focused image"/> User Focused</div>

                    <div className="aboutMeTile scale-in-center"><img className="aboutMeImg scale-in-center" src="responsiveImage.png" alt="responsive design picture" />Responsive Designs</div>

                    <div className="aboutMeTile scale-in-center"><img className="aboutMeImg scale-in-center" src="frontBackEnd.png" alt="front and backend picture" />Front & Back End</div>

                    <div className="aboutMeTile scale-in-center"><img src="#" className="aboutMeImg scale-in-center" alt="image coming soon" />Tenacious Developer</div>
                </div>

            </div>
        )
    }
}
export default AboutMe