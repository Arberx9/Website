let chap=1;
let totalp=57;
let page=1;
function pageset1(){
    document.getElementById("Page").src=+chap+"/"+page+".jpg";
    for(let c=1;c<=totalp;c++){
    let d = `function function${c}(){ document.getElementById('Page').src= '${chap}/${c}.jpg';  page=${c}; } `;
    document.getElementById("script").innerHTML +=d;
    document.getElementById("script").text +="\n"; //Kjo gjeja ktu krijo kto functions per cdo page te ksaj qe te perdoret onclick ne dropdown menu//
    let f = "function"+c+"()";
    const para = document.createElement("a");
    const node = document.createTextNode("Page "+c);
    para.appendChild(node);
    para.onclick=function(){function10()}; //Kur e be run ket del qe function undefined ne console, edhe pse po pe inspect element jan printuar kto functions. function1 qe esht e para qe del punon po nga 1 e siper spunojn idfk//
    const element=document.getElementById("pagesetter");
    const child = document.getElementById("p1");
    element.insertBefore(para, child);          
}
}
window.onload = pageset1;
function next(){
if(page<totalp){
    page++
document.getElementById('Page').src=+chap+"/"+page+".jpg";
var intxt = document.getElementById("txtInp");
intxt.setAttribute("placeholder",page);
}
else{

}
}
function prev(){
if(page<2){
}
else{
    page--
document.getElementById("Page").src=+chap+"/"+page+".jpg";
var intxt = document.getElementById("txtInp");
intxt.setAttribute("placeholder",page);
}
}


var addEvent = document.addEventListener ? function(target,type,action){
if(target){
    target.addEventListener(type,action,false);
}
} : function(target,type,action){
if(target){
    target.attachEvent('on' + type,action,false);
}
}
addEvent(document,'keydown',function(e){
e = e || window.event;
var key = e.which || e.keyCode;
if(key===39){
    next();
}
});
addEvent(document,'keydown',function(e){
e = e || window.event;
var key = e.which || e.keyCode;
if(key===37){
    prev();
}
});
