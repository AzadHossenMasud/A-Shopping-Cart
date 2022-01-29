let addCartBtn = document.querySelectorAll('.btn-warning')
let cart = document.querySelector('#cart')
for (let i = 0; i < addCartBtn.length; i++) {
    addCartBtn[i].addEventListener('click',(e) =>{
        let parent = e.target.parentNode;
        let clone = parent.cloneNode(true)
        cart.appendChild(clone)
        
        let removeBtn = clone.lastElementChild
        removeBtn.innerText = 'Remove'
        removeBtn.classList.remove("btn-warning");
        removeBtn.classList.add('btn-danger')


        let removeItem = document.querySelectorAll('.btn-danger')
        for (let j = 0; j < removeItem.length; j++) {
            removeItem[j].addEventListener('click', (e) => {
                e.target.parentNode.style.display = 'none'
                
            })
            
        }
    } )
    
}