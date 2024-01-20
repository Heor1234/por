console.log("hellllo")
const menue=document.querySelector(".menue");
const a=document.querySelector(".a1")
const img = document.querySelector(".img");
console.log(menue)
console.log(a)
let flag=true
menue.addEventListener("click",()=>{
    if(flag==true)
    {
a.style.visibility=" visible";
flag=false;
img.style.visibility = "hidden";
}
else{
    a.style.visibility="hidden"
    flag=true;
    img.style.visibility = "visible";
}})
