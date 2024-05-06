let a=document.querySelector(".f2");
let c=document.getElementById("as");
let d=document.getElementById("g1");
let e=document.getElementById("g2");


a.addEventListener("mouseenter",show1);
a.addEventListener("mouseleave",show2);
d.addEventListener("mouseenter",show1);
d.addEventListener("mouseleave",show2);
e.addEventListener("mouseenter",show1);
e.addEventListener("mouseleave",show2);

function show1()
{
	c.style.transform="translateY(-50px)";
	c.style.transition="all 1s";

	
	
}
function show2()
{
	c.style.transform="translateY(0px)";
	c.style.transition="all 1s";
	
}

let a1=document.querySelector(".f2");
let a2=document.getElementById("g1");
let a3=document.getElementById("g2");

a2.addEventListener("mouseenter",show3);
a3.addEventListener("mouseenter",show3);

function show3()
{
	a1.style.background="#ffffff";
}
a1.addEventListener("mouseenter",show4);

function show4()
{
	a1.style.background="#EAEAEA";
}


