import React from 'react'
import StickyFooter from 'react-sticky-footer'

class Footer extends React.Component{
    render(){
        return(
            <StickyFooter
            bottomThreshold={50}
            normalStyles={{backgroundColor: "#999999", padding: "1rem"}}
            stickyStyles={{display: "none"}}>
                <ul>
                    <li><a href="https://www.linkedin.com/in/dbarkerit">LinkedIn</a></li>
                    <li><a href="https://www.github.com/hiaximize">Github</a></li>
                </ul>
            </StickyFooter>
        )
    }
}

export default Footer