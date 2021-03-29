var activityInput = document.getElementById("nActivity");
var button = document.getElementById("add");
var ol = document.querySelector('ol');
button.addEventListener("click",function(){
    if(activityInput.value.length>0){
       append();
    }
});
var li;
activityInput.addEventListener("keypress",function(event){
    if(activityInput.value.length>0 && event.keyCode===13){
       append();  
    }
});
function append(){
    var li=document.createElement('li');
        var btn1 = document.createElement("BUTTON");
        btn1.classList.add("mark");
        var btn2 = document.createElement("BUTTON"); 
        btn2.classList.add("del");
        li.appendChild(document.createTextNode(activityInput.value));
        btn1.innerHTML = "Mark As Done";  
        btn2.innerHTML = "Delete From List";  
        li.appendChild(btn1);
        li.appendChild(btn2)
        ol.appendChild(li);
        activityInput.value='';
        btn1.addEventListener("click",function(){
            li.classList.toggle("st");
        })
        btn2.addEventListener("click",function(event)
        {
            event.target.parentNode.remove();
        })
}