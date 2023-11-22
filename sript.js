
function addTo(){
    const toInput = document.querySelector("input");
    const item = document.createElement("li");
    const list =document.getElementById("todo-container");
    item.innerText = toInput.value;
    list.appendChild(item);
    toInput.value = "";
    item.addEventListener("click",() => {
        if (item.style.textDecoration === 'none') {
            item.style.textDecoration = 'line-through'
        } else {
            item.style.textDecoration = 'none'
        }
        
    })
}

function clearall(){
   const list = document.getElementById("todo-container");
   list.innerHTML = "";
}


    


