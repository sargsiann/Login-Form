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


  return (
  <div class="login-container">
    <h2>Login</h2>
    <form action="#" method="POST">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" onChange={(e) => {handleInfoChange(e,"email")}} name="email" value={info.email} placeholder="you@example.com" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" onChange={(e) => {handleInfoChange(e,"password")}} id="password" name="password" value={info.password} placeholder="••••••••" required />
      </div>
      <button type="submit" class="submit-btn">Sign In</button>
    </form>
  </div>)
}

export default Form;