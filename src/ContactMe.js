import React from 'react'

class ContactMe extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="contactMeContainer">
                
                <a target="_blank" title="dbarkerit@gmail.com" href="mailto:dbarkerit@gmail.com?body=Testing%20Hello>Email me">Email me</a>


            </div>
        )
    }
}
export default ContactMe