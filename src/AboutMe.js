import React from 'react'

class AboutMe extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div id="aboutMeContainer">
                
                {/* <hr /> */}
                <div id="aboutMeTileContainer">
                    <div className="aboutMeTile flicker-in-1"><img className="aboutMeImg" src="userfocused.png"/> User Focused</div>

                    <div className="aboutMeTile flicker-in-1"><img className="aboutMeImg" src="responsiveImage.png"/>Responsive Designs</div>

                    <div className="aboutMeTile flicker-in-1"><img className="aboutMeImg" src="frontBackEnd.png" />Front & Back End</div>

                    <div className="aboutMeTile flicker-in-1">Tenacious Developer</div>
                </div>

            </div>
        )
    }
}
export default AboutMe