const siyahi = ["kagiz.png" , "das.png" , "scissor.png"]

//DOM-Document Object Modul

const kagiz = document.getElementById('kagiz')
const das = document.getElementById('das')
const scissor = document.getElementById('qayci')

const komputerinSecimi = document.getElementById('komputer-secim')
const neticeniYaz = document.getElementById('netice')

//clickleme hadisesi burda olunur

kagiz.onclick = seciminiEle
das.onclick = seciminiEle
scissor.onclick = seciminiEle

function seciminiEle(){
    const komputer = randomSecim()
    const menimSecimim = this.dataset.id 


    if(menimSecimim==0 && komputer ==0){
        netice = 'Try again'
    }

    else if(menimSecimim ==0 && komputer ==1){
        netice = 'You win'
    }
    else if(menimSecimim == 0 && komputer ==2){
        netice = 'You lose'
    }
    else if(menimSecimim ==1 && komputer == 0){
        netice = 'You win'
    }
    else if(menimSecimim ==1 && komputer ==1){
        netice ='Try again'
    }
    else if(menimSecimim ==1 && komputer ==2){
        netice = 'You  lose'
    }
    else if(menimSecimim == 2 && komputer ==0){
        netice ='Qazandiniz'
    }
    else if(menimSecimim ==2 && komputer==1){
        netice = 'Meglub oldunuz'
    }
    else {
            netice = 'Try again'
        }

    neticeniYaz.innerHTML = netice
    }



function randomSecim(){
    const say = Math.round(Math.random()*2)
    komputerinSecimi.src = `img/${siyahi[say]}`   
    return say
}