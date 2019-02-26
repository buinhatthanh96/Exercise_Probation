function flogin() {
	var x,y,text;
	x=document.getElementById('username').value;
	y=document.getElementById('password').value;
	if (x=="admin" && y=="admin") 
	{
		alert("Login Success!");
	}
}
function fsignup() {
	var user, pass, repass, email, birthday;

	user=document.getElementById('inUser').value;
	pass=document.getElementById('inPass').value;
	repass=document.getElementById('inrePass').value;
	email=document.getElementById('inEmail').value;
	birthday=document.getElementById('inBirthday').value;
	function validUser() {
		if (user.lenght>3) {
			return true;
		}
		else{
			alert('User must be over 3 characters.');
			return false;
		}
	}
	function validPass() {
		if (pass.value==repass.value) {
			return true;
		}
		else{
			alert('Confirm Password is not matching.');
			return false;
		}
	}
	function validEmail() {
		var filter=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (filter.test(email.value)) {
	  		return true;
		}
		else{
			alert('You have entered an invalid email address!');
			return false;
		}
	}

	if (validUser()) {
		if (validPass()) {
			if (validEmail()) {
				alert('Register Success!');
			}
		}
	}
}
