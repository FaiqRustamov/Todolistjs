var myList=document.getElementsByTagName ("li");
var index;

// for(index=0;index<myList.length;index++){
//     var aSpanTag=document.createElement("SPAN");
//     var someTxt=document.createTextNode("\u00D7");
//     aSpanTag.appendChild(someTxt);
//     myList[index].appendChild(aSpanTag)
// }




//close button  
var closeButton=document.getElementsByClassName("close");


var ulList=document.querySelector("ul");
ulList.addEventListener('click',function(event){
    console.log(event);
    if(event.target.tagname==="LI"){
        event.target.classList.toggle('checked');
    }
},false);

//create a function for creat new element
function CreateNewElement(){
var li=document.createElement("li");
var theInputValue=document.getElementById("the-input").value;
var textNode=document.createTextNode(theInputValue);  
li.appendChild(textNode);
//control input value
if(theInputValue===""){
    alert("Hey this cannot be empty")
}else{
    document.getElementById("the-ul").appendChild(li);
} 
document.getElementById("the-input").value="";

var thePanTag=document.createElement("SPAN");
var txt=document.createTextNode("\u00D7");
thePanTag.className="close";
thePanTag.appendChild(txt);
li.appendChild(thePanTag);


//removing item when click on span close button
for(var i=0;i<closeButton.length;i++){
    closeButton[i].onclick=function(){
        var theDiv=this.parentElement;  
        theDiv.style.display="none";
    } 
}

}
