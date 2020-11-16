var courses = [
  ['MA111', ['MA6'],['1']],
  ['MA143', ['MA6'],['1']],
  ['MA241', ['MA143'],['1']],
  ['MA242', ['MA241'],['1']],
  ['PS150', ['MA241'],['1']],
  ['CHM110',['MA111'],['1']],
  ['CHM110L', ['MA111'],['1']],
  ['COM122', ['COM20'],['1']],
  ['CEC220', ['MA143'],['1']],
  ['CEC220L', ['MA143'],['1']],
  ['CS222', ['MA143'],['1']],
  ['CS225', ['CS222'],['+COM219']],
  ['COM219', ['CS222'],['+CS225']],
  ['MA412', ['MA242'],['+MA222']],
  ['MA222', ['MA111'],['+MA412']],
  ['PS250', ['PS150'],['+CHM140']],
  ['CHM140', ['CHM110'],['+PS250']],
  ['PS253L', ['PS250'],['+PS113']],
  ['PS113', ['MA143'],['+PS253L']],
  ['SE300', ['CS225'],['1']],
  ['COM221', ['COM122'],['1']],
  ['COM221', ['COM122'],['1']],
  ['CS344', ['CS225'],['1']],
  ['CEC320', ['CEC220'],['1']],
  ['CEC322', ['CEC220'],['1']],
 ]
   
 function pr(item, index) {
    // item[0] is the course in question (string)
    var checked = true;
    var coReqCourseFlag = true;
    // item[1]  is the array of pre-requisites (array of strings)
    var elementId = item[1][0];
    var coreqId = item[2][0][0];
    
    // Goes through the list of pre-requisites
    // to see if each one is met if any are not met
    // then pre-requisites are not met
    for (var i=0; i<item[1].length; i++){
      elementId = item[1][i];  
      if (!isChecked(elementId)) {
        checked=false;
      }
    }
    //logical to test for the array value to contain a + and then test for the other class having been selected already
    if (coreqId == "+"){
      var coreqCourse = item[2];
      var test = coreqCourse.toString().replace("+", "");
     if(isChecked(test) == true){
       coReqCourseFlag = false;
       }
      }
    
    //auto adds lab for classes
    if (document.getElementById("CHM110").checked == true){
       document.getElementById("CHM110L").checked = true;
    }else{
      document.getElementById("CHM110L").checked = false;
    }
     if (document.getElementById("CEC220").checked == true){
       document.getElementById("CEC220L").checked = true;
    }else{
      document.getElementById("CEC220L").checked = false;
    }
    if (document.getElementById("PS250").checked == true){
      document.getElementById("PS253L").checked = true;
   }else{
     document.getElementById("PS253L").checked = false;
   }
   if (document.getElementById("CEC320").checked == true){
    document.getElementById("CEC322").checked = true;
 }else{
   document.getElementById("CEC322").checked = false;
 }
    // and if all are met - enables taking courses
    // checked is true/false Enable is a function call to Enable
    // item[0] is the first element of the array item - which is the 
    // course in question
    // item[0] - courses
    // item[1] - array of pre-requisite courses
    if (checked){
       Enable(item[0]);
    }
    else {
    Disable(item[0]);
    }
   //allows the co-requisite course function to work
   //The function above removes the leading character + from the name of the corequisite string and then checks to see if that other course has already been taken
    if (coReqCourseFlag == false && checked == true){
      Disable(item[0]);
    }
 }
 
 
 
 
 function isChecked(item) {
   return (document.getElementById(item).checked == true);
 }
 
 // The function Enable sets the disabled property of the interface element
 // to false. In effect making it enabled.
 function Enable(selection){
  document.getElementById(selection).disabled = false;
  
 }
 
 function Disable(selection){
  document.getElementById(selection).disabled = true;
  //added this to bypass when the user has deselected a course to take and then the courses would stay selected
  document.getElementById(selection).checked = false;
 }
 
 function CC(){
   courses.forEach(pr);
 }