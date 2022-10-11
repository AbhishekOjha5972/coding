function redirect() {
window.location.href="inventory.html"
}

function getFormData(e){
  let form=new FormData(e.target)
  let name= form.get('name');
  let brand= form.get('brand');
  let price= form.get('price');
  let image= form.get('image');
 addData(name,brand,price,image)

}


function addData(name, brand, price, image) {
 let data= {name,brand,price,image};
 let localdata= JSON.parse(localStorage.getItem('data'))||[];
 localdata.push(data);
 localStorage.setItem('data',JSON.stringify(localdata))
}

window.addEventListener('load',function(){
  let myform= document.getElementById('product_form');
  myform.addEventListener('submit',function(e){
    e.preventDefault();
    getFormData(e);
  })
})

if (typeof exports !== "undefined") {
  module.exports = {
    addData,
    redirect,
  };
}