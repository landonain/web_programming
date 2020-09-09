function testRegEx() {
	var re = new RegExp(myForm.reg.value);
	var te = myForm.inp.value;
	
	if (te.match(re)) {
		alert (re + " Regular Expression DID match " + te);
	} else {
		alert (re + " Regular Expression did NOT match " + te);
	}
	
}