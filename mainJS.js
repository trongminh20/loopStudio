function ddMenu(ele){
  if(ele.style.display == "flex"){
    ele.style.display = "none";
    ele.parentElement.classList.remove("responsive-menu");

  }else{
    ele.style.display = "flex";
  }
}
function setBackground(){
  let divClasses = [...document.getElementsByClassName('creation')];
  divClasses.forEach((e)=>{
    let id = e.id;
    if(window.innerWidth >= 800){
    e.style = "background-image: url(images/desktop/"+id+".jpg)";
    }else if(window.innerWidth <800){
      e.style = "background-image: url(images/mobile/"+id+".jpg)";
    }
  })
}