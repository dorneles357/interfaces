//dados 
let click_par = []

//eventos


document.querySelectorAll('.card').forEach(item =>{
    item.addEventListener('click', click);
});


//funções

function click(){
    par(this.id);
    document.getElementById(`${this.id}`).classList.toggle('anima3');
    revelar(this.id);
  
}

function par(id){
    click_par.push(id);


    
    if(click_par.length === 2){
        if(click_par[0] === click_par[1]){
            alert('devagar campeão!')

        }else{
            setTimeout(()=>{
                click_par.forEach((item) =>{
                    document.getElementById(`${item}`).classList.add('anima4');
                });
    
            }, 2000)
    
            setTimeout(() =>{
                click_par.forEach((item =>{
                     document.getElementById(`${item}`).classList.remove('anima3');
                }));
                
                click_par.forEach(item =>{
                    document.getElementById(`${item}`).innerHTML = `<img src="./t.png" width="100" height="110">`;
                    });
                
            }, 2500);     
            
            setTimeout(()=>{
                click_par.forEach((item) =>{
                    document.getElementById(`${item}`).classList.remove('anima4');
                });
    
                click_par = [];
            }, 3000) 
        }
    }
}

function revelar(id){
    setTimeout(() => {
        document.getElementById(`${id}`).innerHTML = `<img src='./1-triangulo-acutangulo.jpg' width='100' height='110'>`;
    }, 400);
}

