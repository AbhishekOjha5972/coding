function redirect() {
window.location.href="index.html";
}

function append() {
 let lsData=JSON.parse(localStorage.getItem('data'))||[];
  let container=document.querySelector('#products_data');
  if(container){
    container.innerHTML=null;
  }
  lsData.map(function(el,i){
    let div= document.createElement('div');
    div.innerHTML=`
    <div>
    <img src="${el.image}"/>
    </div>
    <div> ${el.name}</div>
    <div> ${el.brand}</div>
    <div> ${el.price}</div>
    <div > <button onclick="remove(${i})" >Remove</button></div>

    `
    container.append(div)

  })
 
}

function remove(id) {
  let localdata= JSON.parse(localStorage.getItem('data'));
  localdata.splice(id,1);
  localStorage.setItem('data',JSON.stringify(localdata));
  append()
}
append()

if (typeof exports !== "undefined") {
  module.exports = {
    append, remove
  };
}