/*const navSlide = () =>{
  const lines = document.querySelector('.lines');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  lines.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
  });

  navLinks.forEach((link, index)=>{
    link.style.animation = `navLinkFade 0.5s ease forwards ${index/7+0.3}s`;
  });
}

navSlide();*/



const tabs = document.querySelectorAll(".tabs li"); //  matches a CSS selector(s).
const contents = document.querySelectorAll(".content"); 

/*
arrow function
before:
  hello = function(){
   return "hello world";
  }
after:
  hello = ()=>{
    return "hello world";
  }
*/

//add a click even to a <button> element
tabs.forEach((tab) => {
  tab.addEventListener("click",() =>{
    tab.classList.add("active");
  }); 
});