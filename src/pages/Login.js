import React, {useState} from "react";
import turtle from "./turtle.jpg";

const Login = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setmessage] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (!name || !email || !message) {
        setError('Please fill in the fields');
        return;
      }
      //clear form fields and error message
  
      setName('');
      setEmail('');
      setmessage('');
      setError('');
  
      //Set the submision status to true
      setSubmitted(true);
    }
      return (
        <div className="contactus-section">
            <div className="Login-box">
                    <div className="Login-left ">
                        <p>We would love to hear from you! </p>
                        <p>If you have any questions about visiting Hawaii, please don't hesitate to contact our friendly team. </p>
                        <p> We are here to ensure that your Hawaiian dream becomes a reality. Join us on this 
                            incredible journey to experience the wonders of Hawaii. </p>

                            <h1>Mahalo</h1>
                        <img src={turtle} alt="tutle-turleBay-beach"></img>
                    </div>
                    <div className="contactUs-form">
                        {!submitted ? (
                        <form onSubmit= {handleSubmit}>
                            <div><label for="email">*Email</label></div>
                            <div><input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/></div>
                            
                            <div><label for="name">*First and Last name</label></div>
                            <div><input type="name" id="name" value={name} onChange={(e) => setName(e.target.value)}/></div>
        
                            <div><label for="message">*Message</label></div>
                            <div><textarea id="message" value={message} onChange={(e) => setmessage(e.target.value)} ></textarea></div>
        
                            {error && <div> {error} </div>}
                            <div class="submit-btn-wrapper p-1 ">
                            <button type="quote-btn">Submit</button>
                            </div>
                        </form>

                    ) : (
                        <div className="contactUs-thanks">
                                  <h3>Thank you for submitting your message! We will get back to ASAP.</h3>
                        </div>
                    ) }
                    </div>
            </div>
        </div>
      );
  };

export default Login;
