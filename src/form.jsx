import './form.css'
import { useState } from 'react'

function Form(props) {

  const [info, setInfo] = useState(() => {
	let info = localStorage.getItem('info');
	if (info) {
	  return JSON.parse(info);
	}
	return { email: '', password: '' };
  });

  const	handleInfoChange = (e,key) => {
	const value = e.target.value;
	setInfo((prev) => {
	  const newInfo = { ...prev, [key]: value };
	  localStorage.setItem('info', JSON.stringify(newInfo));
	  return newInfo;
	});
  }


  const isValidEmail = (email) => {
	const re = new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$");
	return re.test(email);
  };

  const isValidPassword = (password) => {
	const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$");
	return re.test(password);
  }




  return (
  <div className="login-container">
    <h2>Login</h2>
    <form action="#" method="POST">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" onChange={(e) => {handleInfoChange(e,"email")}} name="email" value={info.email} placeholder="you@example.com" required />
		{!isValidEmail(info.email) && <div className="error" id="email-error">Invalid email address</div>}
	</div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
      	<input type="password" onChange={(e) => {handleInfoChange(e,"password")}} id="password" name="password" value={info.password} placeholder="••••••••" required />
		{!isValidPassword(info.password) && <div className="error" id="password-error">Incorrect password</div>}
	  </div>
	  <button type="submit" className="submit-btn" disabled = {!(isValidPassword(info.password) && isValidEmail(info.email))}>Sign In</button>
    </form>
  </div>)
}

export default Form;