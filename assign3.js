function validateForm()
 {
	if(!validateNotBlank(document.forms["myForm"]["name"].value, "Full Name")) return false;
	if(!validateNotBlank(document.forms["myForm"]["birthdate"].value, "birthdate")) return false;
	if(!validateDate()) return false;
	if(!validateNotBlank(document.forms["myForm"]["address"].value, "address")) return false;
	if(!validateNotBlank(document.forms["myForm"]["email"].value, "email address")) return false;
	if(!validateNotBlank(document.forms["myForm"]["email"].value, "birthdate")) return false;
	if(!validateNotBlank(document.forms["myForm"]["email"].value, "message")) return false;
	if(!validateNotBlank(document.forms["myForm"]["phone-number"].value, "phone number")) return false;
	if(!getValue()) return false;
	return true;
	
 }



 function validateNotBlank(value, label)
 {
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
	return true;
 }
 function getValue() {
	var retVal = prompt("What is the current year? ", "Enter year here");
	if(retVal == "2020"){
		return true;
	}		
	else{
		alert("WHAT YEAR IS IT?");
		return false;
	}
 }
  $(document).ready(function() 
{
	$("#zip", "#myForm")
		.keydown(function (e) {
			var key = e.which || e.charCode || e.keyCode || 0;
			
			
			return (key == 8 ||
					key == 9 ||
					key == 46 ||
					(key >= 48 && key <= 57) ||
						(key >= 96 && key <= 105));
		})
});


 
//The fix for the onload issue lies with document ready function
// that calls the code after the html page has loaded
$(document).ready(function() 
{
	$("#phone-number", '#myForm')
		.keydown(function (e) {
			var key = e.which || e.charCode || e.keyCode || 0;
			$phone = $(this);
			
			if($phone.val().length === 1 && (key === 8 || key === 46)) {
				$phone.val('(');
				return false;
			}
			else if ($phone.val().charAt(0) !== '('){
				$phone.val('('+String.fromCharCode(e.keyCode)+'');
			}
			if (key !== 8 && key !==9) {
				if ($phone.val().length === 4){
					$phone.val($phone.val()+ ')');
				}
				if ($phone.val().length === 5){
					$phone.val($phone.val()+ ' ');
				}
				if ($phone.val().length === 9){
					$phone.val($phone.val()+ '-');
				}
			}
			//this limits key inputs to numbers/ spaces/ backspace / tab - 
			return (key == 8 ||
				key == 9 ||
				key == 46 ||
				(key >= 48 && key <= 57) ||
					(key >= 96 && key <= 105));
		})
		.bind('focus click', function () {
			$phone = $(this);
			
			if ($phone.val().length === 0) {
				$phone.val('(');
			}
			else { 
				var val = $phone.val();
				$phone.val('').val(val);
			}	
		})
		.blur(function() {
			$phone = $(this);
			if($phone.val() === '(') {
				$phone.val('');
			}
		});
});	
 