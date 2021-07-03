function ddMenu(){}
function setBackground(){
  let divClasses = [...document.getElementsByClassName('creation')];
  divClasses.forEach((e)=>{
    let id = e.id;
    e.style = "background-image: url(images/desktop/"+id+".jpg)";
  })
}