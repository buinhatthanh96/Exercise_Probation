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
	var user, pass, repass, email, birthday, phone;

	user=document.getElementById('inUser').value;
	pass=document.getElementById('inPass').value;
	repass=document.getElementById('inrePass').value;
	email=document.getElementById('inEmail').value;
	birthday=document.getElementById('inBirthday').value;
	phone=document.getElementById('inPhone').value;
	var filter=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if (user == "") {
		alert('You have not entered Username.');
	}
	else if (user.length < 3){
		alert('User must be over 3 characters');
	}
	else if (pass==""){
		alert('You have not entered Password.');
	}
	else if (pass!=repass){
		alert('Confirm Password is not matching.');
	}
	else if (email==""){
		alert('You have not entered Email.');
	}
	else if (!filter.test(email)){
		alert('You have entered an invalid email address!');
	}
	else if (birthday==""){
		alert('You have select birthday.');
	}
	else if (document.getElementById("male").checked == false && document.getElementById("female").checked == false) {
		alert('You have not selected your gender.');
	}
	else if (phone==""){
		alert('You have not entered your Phone.');
	}
	else if (phone.length<10 || phone.length>11){
		alert('Your phone number must be between 10 and 11 numbers');
	}
	else{
		document.getElementById("regSuccess").style.visibility= "visible";
	}
}
