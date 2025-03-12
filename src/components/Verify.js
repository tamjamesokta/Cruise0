
import './Verify.css'; // Import custom CSS
import logo from '../images/cruiselogo.jpg'; 
import background from '../images/cruise.jpg';

const Verify = () => {


  const handleContinue = () => {
      console.log("Email not verified yet.");
  };

  const sendAnotherEmail = () => {
    console.log("Sending another verification email...");
  };

  return (
    <div className='verify-page' style={{ 
      backgroundImage: `url(${background})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat' 
    }}>
      <div className="verify-container">
        <div className="verify-header">
          <img src={logo} alt="Cruise0" />
        </div>
        <div className="verify-main">
          <h2>Verify Your Email</h2>
          <p>Please verify your email before logging in again.</p>
        
         

          <button className='verify-button' onClick={handleContinue}> Continue</button>



          <p>Didn't get an email? <span className="resend-link" onClick={sendAnotherEmail}>Resend</span></p>


         
        </div>
        <div className="verify-footer">
         
          <p>&copy; Cruise0</p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
