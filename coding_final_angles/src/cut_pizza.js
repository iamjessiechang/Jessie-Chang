
let createSliceBtns = (listSlices) => {
  const btnGroupEle = document.querySelector('#sliceBtnGroup');
  for(let i = 0, len=listSlices.length; i < len; i++){
    let sliceBtn = document.createElement('button');
    sliceBtn.setAttribute('class', 'sliceButton');
    sliceBtn.setAttribute('value', listSlices[i]);
    sliceBtn.setAttribute('id', `btn${i}`);
    sliceBtn.innerHTML = listSlices[i];
    //sliceBtn.addEventListener('click', cutPizza)
    btnGroupEle.appendChild(sliceBtn);
  }
}
createSliceBtns([2, 4, 6, 8, 10, 12, 18]);


const base = document.querySelector("#base");
const line = document.querySelector("#line");
const btn0 = document.querySelector("#btn0");

let CutTwo = () =>{
	line.style.transform = "rotate(180deg);";
}


btn0.addEventListener("click", CutTwo);





// let getSlicer = () => {
//   let slicerEle = document.querySelector('#slicer');
//   if(slicerEle == null){
//     slicerEle = document.createElement('div');
//     slicerEle.setAttribute('id', 'slicer');
//     slicerIconEle = document.createElement('img');
//     slicerIconEle.setAttribute('src', 'img/slicer.png');
//     slicerEle.appendChild(slicerIconEle)
//     document.querySelector('main').appendChild(slicerEle);
//   }
//   return slicerEle
// }

// let cutPizza = (event) =>{
//   console.log(event.target.value);
//   return;
//   let nSlices = event.target.value;
//   console.log(`Cut ${nSlices} pizza!`);
//   let slicerEle = getSlicer()
//   document.createElement('div')
//   const pizzaImgEle = document.querySelector('#pizzaImg');
//   let pizzaBbox = pizzaImgEle.getBoundingClientRect();
//   left = pizzaBbox['left']
//   right = pizzaBbox['right']
//   top = pizzaBbox['top']
//   bottom = pizzaBbox['bottom']
// }




// slicerEle = getSlicer()
