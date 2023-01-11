var res=document.querySelector(".display .results");
var inpt=document.querySelector(".display .inputs");
var btns=document.querySelectorAll("button");

btns.forEach((btn) => {
    
    btn.onclick=function(){
        if(this.innerHTML == "AC"){
            inpt.value="";
            res.innerHTML="";

        }else if (this.innerHTML == "DEL") {
            
            inpt.value=inpt.value.substring(0,inpt.value.length-1);

        }else if(this.innerHTML == "="){
            //i dont want repalacment appear in the input display so i stored data in ne variable called input 
            let input=inpt.value;
            input=input.replaceAll("×","*")
            input=input.replaceAll("÷","/")
            //guard code for user error
            if(input==""){
                res.innerHTML="empty!";

            }else{
                try{
                    res.innerHTML=eval(input);
                }
                catch{
                    res.innerHTML="sytnax error";
                }
                
            }

        }else{

            inpt.value+=this.innerHTML;
        }
    } 

});

const clac=document.querySelector(".container")
const  toggler=document.querySelector(".container .toggler ")
const indicator =document.querySelector(".container .toggler .toggler-indicator")
const inptDisp =document.querySelector(".container .display .inputs")
const resDisp =document.querySelector(".container .display .results")

toggler.onclick=function(){
    
    indicator.classList.toggle("toggler-indicator-active")
    toggler.classList.toggle("toggler-active")
    clac.classList.toggle("container-active")
    inptDisp.classList.toggle("inputs-active")
    resDisp.classList.toggle("results-active")
    
}

   


