

let stateintro=false;
document.getElementById("introd").addEventListener("click",function (){
	
	if(!stateintro){
		document.getElementById("intro").style.display="block";
		document.getElementById("i1").src="images/icon-minus.svg";
		stateintro=true;
	}
	else{
		document.getElementById("intro").style.display="none";
		document.getElementById("i1").src="images/icon-plus.svg";
		stateintro=false;
	}

});
let statemoney=false;
document.getElementById("moneyd").addEventListener("click",function (){
	
	if(!statemoney){
		document.getElementById("money").style.display="block";
		document.getElementById("i2").src="images/icon-minus.svg";
		statemoney=true;
	}
	else{
		document.getElementById("money").style.display="none";
		document.getElementById("i2").src="images/icon-plus.svg";
		statemoney=false;
	}

});
let stateprojects=false;
document.getElementById("projectsd").addEventListener("click",function (){
	
	if(!stateprojects){
		document.getElementById("projects").style.display="block";
		document.getElementById("i3").src="images/icon-minus.svg";
		stateprojects=true;
	}
	else{
		document.getElementById("projects").style.display="none";
		document.getElementById("i3").src="images/icon-plus.svg";
		stateprojects=false;
	}

});
let statehelp=false;
document.getElementById("helpd").addEventListener("click",function (){
	
	if(!statehelp){
		document.getElementById("help").style.display="block";
		document.getElementById("i4").src="images/icon-minus.svg";
		statehelp=true;
	}
	else{
		document.getElementById("help").style.display="none";
		document.getElementById("i4").src="images/icon-plus.svg";
		statehelp=false;
	}

});
