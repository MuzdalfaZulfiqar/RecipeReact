
import React from "react";

 
export default function Footer(){

    let [name, setName]= React.useState("");

    function handleChange(event){
        const {name} = event.target;
        setName(name.value)
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }


    return (

        <div className="footer">
        <div className="footer-left-title">
          <p>Join Our Newsletter</p>
        </div>
            
        <form onSubmit={handleSubmit}>
            <div className="footer-left-email-input" onChange={handleChange}>
              <input 
                    type="email" 
                    name="email" 
                    id="email_" 
                    placeholder="Enter email"
                    value = {name}
                    onChange = {handleChange} 
                />
            </div>
            <div className="footer-left-subscribe-button">
                    <button>Subscribe</button>
            </div>

        </form>
            
       
      </div>
    )
}