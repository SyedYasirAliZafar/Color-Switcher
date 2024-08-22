const box = document.querySelectorAll('.boxes');
const body = document.querySelector('body');  


box.forEach( (bx) => {
    console.log(bx);
    bx.addEventListener('click', (e) => {
        console.log(e);
        console.log(e.target)
        if(e.target.id === 'Grey'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Blue'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Red'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Green'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Purple'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Black'){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'Pink'){
            body.style.backgroundColor = e.target.id;
        }
        
    })

});