function validate() {  
	var result = "";	
	result += validateUsername(); 	
	result += validatePassword();
	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}


function validateUsername() {
	var username = document.getElementsByName("username")[0].value;
	if (username.length < 3)
		return "Username should be at least three characters.\n";	
	return "";
}


function validatePassword() {
	var password = valueOf("password");
		
	if (password.length <= 5) 
		return "Password should be at least 6 characters.\n";
	
	return "";
}


function valueOf(name) {
	return document.getElementsByName(name)[0].value;
}