
// Exercise 6
function validate() {
	var error = 0;
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");

	// Get the error elements
	var errorName = document.getElementById("errorName");
	var errorEmail = document.getElementById("errorEmail");
	var errorAddress = document.getElementById("errorAddress"); 
	var errorLastN = document.getElementById("errorLastN"); 
	var errorPassword = document.getElementById("errorPassword"); 
	var errorPhone = document.getElementById("errorPhone"); 
	
	// Validate fields entered by the user: name, phone, password, and email
	if(fName.value == ""){
		error++;
		errorName.innerHTML = "Aquest camp és obligatori"
	}

	if(fEmail.value == ""){
		error++;
		errorEmail.innerHTML = "Aquest camp és obligatori"
	}
	 
	if(fAddress.value == ""){
		error++;
		errorAddress.innerHTML = "Aquest camp és obligatori"
	}
	
	if(fLastN.value == ""){
		error++;
		errorLastN.innerHTML = "Aquest camp és obligatori"
	}
	
	if(fPassword.value == ""){
		error++;
		errorPassword.innerHTML = "Aquest camp és obligatori"
	}

	if(fPhone.value == ""){
		error++;
		errorPhone.innerHTML = "Aquest camp és obligatori"
	}

	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
