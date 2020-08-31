function validateForm()
 {
	//var fname = document.forms["myForm"]["name"].value;
	/*
	if(!validateNotBlank(document.forms["myForm"]["firName"].value, "First Name")) return false;
	if(!validateNotBlank(document.forms["myForm"]["lasName"].value, "Last Name")) return false;
	if(!validateNotBlank(document.forms["myForm"]["birthdate"].value, "birthdate")) return false;
	if(!validateDate()) return false;
	if(!validateNotBlank(document.forms["myForm"]["address"].value, "address")) return false;
	
	if(!validateNotBlank(document.forms["myForm"]["email"].value, "email address")) return false;
	if(!validateNotBlank(document.forms["myForm"]["email"].value, "birthdate")) return false;
	
	if(!validateNotBlank(document.forms["myForm"]["email"].value, "message")) return false;
	if(!validateNotBlank(document.forms["myForm"]["email"].value, "first name of the current president")) return false;
	*/
	//debugger;
	
	if(!validateNotBlank(document.forms["myForm"]["phone-number"].value, "phone number")) return false;
	
	return true;
	
 }

 function validateNotBlank(value, label)
 {
   alert("Now validating form");
   if (value==null || value=="")
	 {
	 alert("Please enter a value for " + label);
	 return false;
	 }
	return true;    
 }
 
  function validateDate()
 {
	var d = document.forms["myForm"]["birthdate"].value;
	//this parse function passes this as a millisecond value
	var d_as_date = Date.parse(d);
	//converting the millisecond into 
	var d_future = new Date(d_as_date);
	var d_past = new Date(d_as_date);
	var today = new Date();
	var oldest = new Date(1930,11,17);
	
	if ( d_future > today){
		alert("Date is ahead of the current one");
		return false;
	}
	if ( oldest > d_past ){
		alert("Date is 90 years old");
		return false;
	}
 }

 