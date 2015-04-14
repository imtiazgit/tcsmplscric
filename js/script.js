
   function SaveTeam(){
    
    var fnTeamName = document.getElementById("idTeamName").value;
    if(!fnTeamName.match(/\S/)) {
     alert ('Seriously?? Your team doesnt have a name.. duh!!');
     return true;
    }
    try{		   
     if(checkIsNumeric(fnTeamName) =="N"){
      window.alert("Team name should be alphanumeric.. Sorry, no exceptions!!");
      return true;      
   }	
   }catch(err){
     document.getElementById("ErrSection").innerHTML = err.message;
   }	
   
   var dds = document.getElementById("idTCSAccount");
   var val = dds.options[dds.selectedIndex].value;
   
   try{			
   if(val =="Select"){
   	window.alert("This is a TCS tournament. Select your account name!!");
   	return true;
   }
   }catch(err)		{
   document.getElementById("ErrSection").innerHTML = err.message;
   }
   
   
   if (document.getElementById("idBtnBrowse").value.length == 0){
   window.alert("Get a good artist and design a logo for your team!!");
   return true;
   }
   
   var fnTeamCaptainName = document.getElementById("idTeamCaptainName").value;
   if(!fnTeamCaptainName.match(/\S/)) {
   alert ('Team without a captain is same as ship without it..');
   return true;
   }	try{		   
      if(checkIsNumeric(fnTeamCaptainName) =="N"){
   	   window.alert("Invalid name for captain!!");
   	   return true
   	}	
   }catch(err){
      document.getElementById("ErrSection").innerHTML = err.message;
   }
   
   var fnTeamCaptainContactNumber = document.getElementById("idTeamCaptainContactNumber").value;
   if(!fnTeamCaptainContactNumber.match(/\S/)) {
   alert ('Captain contact number is missing..');
   return true;
   }	try{		   
      if(checkIsNumeric(fnTeamCaptainName) =="N"){
   	   window.alert("Invalid contact detail for captain!!");
   	   return true
   	}	
   }catch(err){
      document.getElementById("ErrSection").innerHTML = err.message;
   }
   
   
   var fnTeamViceCaptainName = document.getElementById("idTeamViceCaptainName").value;
   if(!fnTeamViceCaptainName.match(/\S/)) {
   alert ('Enter vice captain name..');
   return true;
   }	try{		   
      if(checkIsNumeric(fnTeamCaptainName) =="N"){
   	   window.alert("Invalid vice captain name!!");
   	   return true
   	}	
   }catch(err){
      document.getElementById("ErrSection").innerHTML = err.message;
   }
   
   var fnTeamViceCaptainContactNumber = document.getElementById("idTeamViceCaptainContactNumber").value;
   if(!fnTeamViceCaptainContactNumber.match(/\S/)) {
   alert ('vice captain contact number is missing..');
   return true;
   }	try{		   
      if(checkIsNumeric(fnTeamViceCaptainContactNumber) =="Y"){
   	   window.alert("Invalid contact detail for vice captain!!");
   	   return true
   	}	
   }catch(err){
      document.getElementById("ErrSection").innerHTML = err.message;
   }
   
   divPlayerEnable();
   }     
   function CancelTeam(){
    divPlayerDisable();	
   }  
   
   function divPlayerDisable(){
    document.getElementById('divPlayer').style.display = "none";
    document.getElementById('divPlayerTable').style.display = "none";
   }
   
   function divPlayerEnable(){
    document.getElementById('divPlayer').style.display = "block";
    document.getElementById('divPlayerTable').style.display = "block";
   }
   function checkIsNumeric(input){	   
    if (isNaN(input)) {
     return "Y";
    }else{
     return "N";   
    }
   }
   
   function AddPlayer(){
    var fnPlayerName= document.getElementById("idPlayerName").value;
    
    if(!fnPlayerName.match(/\S/)) {
   alert ('Missing Player Name..');
   return true;
   }	try{		   
      if(checkIsNumeric(fnPlayerName) =="N"){
   	   window.alert("Invalid Player Name!");
   	   return true
   	}	
   }catch(err){
      document.getElementById("ErrSection").innerHTML = err.message;
   }
   
   if(document.getElementById("idBat").checked) {
    		if(document.getElementById("idBowl").checked) {
    			var ptype = "All Rounder";
    		} else {
    			var ptype = "Batsmen";
    		}
    	} else if(document.getElementById("idBowl").checked) {
    		var ptype = "Bowler";
    	}	
   try{
	   var tableRef = document.getElementById('tblPlayerTable').getElementsByTagName('tbody')[0];
	   
	    var tr = tableRef.insertRow(tableRef.rows.length);
	    
	    
	    var c1 = tr.insertCell(0);
	    var c2 = tr.insertCell(1);
	   
	    
	    c1.innerHTML = fnPlayerName;
	    c2.innerHTML = ptype;
	    
	       }catch(err){
       document.getElementById("ErrSection").innerHTML = err.message;
   }
	       
   }
   
   
