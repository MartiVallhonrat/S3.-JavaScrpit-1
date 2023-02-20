
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
	debugger

	const isValidPassword = fPassword.checkValidity()
	const isValidPhone = fPhone.checkValidity()
	const isValidLastN = fLastN.checkValidity()
	const isValidEmail = fEmail.checkValidity()
	const isValidName = fName.checkValidity()
	const isValidAdress = fAddress.checkValidity()


	if(fName.value == "" || isValidName == false){
		error++;
	}

	if(fEmail.value == "" || isValidEmail == false){
		error++;

	}
	 
	if(fAddress.value == "" || isValidAdress == false){
		error++;
		
	}
	
	if(fLastN.value == "" || isValidLastN == false){
		error++;

	}

	if(fPassword.value == "" || isValidPassword == false){
		error++;
		
	}

	if(fPhone.value == "" || isValidPhone == false){
		error++;
	
	}

	if(error>0){
		alert("Error");
	}else{
		alert("OK");
	}

}
