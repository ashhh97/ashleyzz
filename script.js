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
/*console.log(tabs);*/
const contents = document.querySelectorAll(".content"); 
/*console.log(contents);*/
tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=> {
    // to remove active class from previous tab
    tabs.forEach(tab=>tab.classList.remove('active'));

    tab.classList.add('active');
    //to show content according to tab slected
    //to hide previous tab content
    contents.forEach(c => c.classList.remove("active"));
    contents[index].classList.add("active");
    

  });
});

// to run the animation initially when the oage loads
tabs[0].click();

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

