function validateForm()
 {
	if(!validateNotBlank(document.forms["myForm"]["name"].value, "Full Name")) return false;
	if(!validateNotBlank(document.forms["myForm"]["birthdate"].value, "birthdate")) return false;
	if(!validateDate()) return false;
	if(!validateNotBlank(document.forms["myForm"]["street"].value, "street")) return false;
	if(!validateNotBlank(document.forms["myForm"]["city"].value, "city")) return false;
	if(!validateNotBlank(document.forms["myForm"]["state"].value, "state")) return false;
	if(!validateState()) return false;
	if(!validateNotBlank(document.forms["myForm"]["zip"].value, "zip")) return false;
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

 function validateState(){
	var s = document.forms["myForm"]["state"].value;
	var res = s.toUpperCase();
	if (res == "FL" || res == "AL"|| res == "AK" || res =="MT"|| res =="NE"
	|| res =="NE" || res =="AZ" || res =="NV" || res =="AR" || res =="NH"
	|| res =="CA" || res =="NJ" || res =="CO" || res =="NM" || res =="CT"
	|| res =="NY" || res =="DE" || res =="NC" || res =="ND" || res =="GA"
	|| res =="OH" || res =="HI" || res =="OK" || res =="ID" || res =="OR"
	|| res =="IL" || res =="IN" || res =="PA" || res =="RI" || res =="IA"
	|| res =="SC" || res =="KS" || res =="SD" || res =="KY" || res =="TN"
	|| res =="LA" || res =="TX" || res =="ME" || res =="UT" || res =="MD"
	|| res =="VT" || res =="MA" || res =="VA" || res =="MI" || res =="WA"
	|| res =="MN" || res =="WV" || res =="MS" || res =="WI" || res =="MO"
	|| res =="WY") {
		return true;
	} else {
		alert("State is not Valid - please try again.");
		return false;
	}
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
		alert("Date is over 90 years old");
		return false;
	}
	return true;
 }
 $(document).ready(function() 
 {
	 $("#state", "#myForm")
		 .keydown(function (e) {
			 var key = e.which || e.charCode || e.keyCode || 0;			 			 
			 return (key == 8 ||
					 key == 9 ||
					 key == 46 ||
					 //65 is keycode for a and 90 is the keycode for z
					 (key >= 65 && key <= 90));
		 })
 });
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
 