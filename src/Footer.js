import React from 'react'
import StickyFooter from 'react-sticky-footer'

class Footer extends React.Component{
    render(){
        return(
            <StickyFooter className="stickyFooter"
            bottomThreshold={50}
            normalStyles={{backgroundColor: "#999999", padding: "1rem"}}
            stickyStyles={{display: "none"}}>
                <div id="footerContainer">
                    <ul id="footer">
                        <li><a target="_blank" href="https://www.linkedin.com/in/dbarkerit">LinkedIn</a></li>
                        <li><a target="_blank" href="https://www.github.com/hiaximize">Github</a></li>
                    </ul>
                </div>
            </StickyFooter>
        )
    }
}

export default Footer