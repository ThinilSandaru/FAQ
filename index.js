

let stateintro=false;
document.getElementById("introd").addEventListener("click",function (){
	
	if(!stateintro){
		document.getElementById("intro").style.display="block";
		stateintro=true;
	}
	else{
		document.getElementById("intro").style.display="none";
		stateintro=false;
	}

});
let statemoney=false;
document.getElementById("moneyd").addEventListener("click",function (){
	
	if(!statemoney){
		document.getElementById("money").style.display="block";
		statemoney=true;
	}
	else{
		document.getElementById("money").style.display="none";
		statemoney=false;
	}

});
let stateprojects=false;
document.getElementById("projectsd").addEventListener("click",function (){
	
	if(!stateprojects){
		document.getElementById("projects").style.display="block";
		stateprojects=true;
	}
	else{
		document.getElementById("projects").style.display="none";
		stateprojects=false;
	}

});
let statehelp=false;
document.getElementById("helpd").addEventListener("click",function (){
	
	if(!statehelp){
		document.getElementById("help").style.display="block";
		statehelp=true;
	}
	else{
		document.getElementById("help").style.display="none";
		statehelp=false;
	}

});