let cubo = document.querySelector('#cubo')
let t1 = document.querySelector('#t1')
let t2 = document.querySelector('#t2')
let t3 = document.querySelector('#t3')
let t4 = document.querySelector('#t4')
let click = 0
let controle = document.querySelector('#controle')
let direcao = document.querySelector('#direcao')

let x = 600
let y = 400
let vel = 5

function limpar() {

    t1.style.display = 'none'
    t2.style.display = 'none'
    t3.style.display = 'none'
    t4.style.display = 'none'
    controle.style.display = 'none'

    
    
}



cubo.onclick = function () {

    limpar()

    click++

    console.log(`Cliques: ${click}`)

    cubo.classList.add('animate__wobble')
    t1.style.display = 'none'
    t2.style.display = 'block'

    setTimeout(() => {

        cubo.classList.remove('animate__wobble')
        
    }, 1000);

    if (click >= 2){

        limpar()


        cubo.classList.remove('animate__wobble')
        cubo.classList.add('movimento')
        t3.style.display = 'block'
        t2.style.display = 'none'

    


    }
    
}



document.addEventListener('keypress', (e)=>{

    limpar()

    controle.style.display = 'block'

    if (e.key == 'd' ){

        cubo.classList.remove('movimento')
        cubo.classList.add('direita')


    }

    if (e.key == 'ArrowUp'  ){

        


        y++

        console.log('cima')    


    }

    if (e.key == 'r'){



        cubo.classList.remove('movimento')
        t4.style.display = 'block'
        t3.style.display = 'none'

        controle.style.display = 'block'


    }

    if (e.key === 'd'){

        direcao.innerHTML = '➡'

        

        x+=vel

        cubo.style.left = x + 'px'

        if(x>=1200){

            x = 1220
        }

       


    }

    if (e.key === 'a'){

        direcao.innerHTML = '⬅'

        

        x-=vel

        cubo.style.left = x + 'px'
        if(x<=10){

            x = 10
        }


    }

    if (e.key === 'w'){

        direcao.innerHTML = '⬆'

        

        y-=vel

        cubo.style.top = y + 'px'
        if(y<=10){

            y = 10
        }


    }

    if (e.key === 'x'){

        direcao.innerHTML = '⬇'



        y+=vel

        cubo.style.top = y + 'px'

        if(y>=630){

            y = 630
        }


    }

    console.log(e.key)
})


