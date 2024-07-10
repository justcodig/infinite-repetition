



class LottoMachine{
    constructor(winBox){
        this.winBox=winBox;
    }
    management(){
        const outbox= document.querySelector(".outbox");
        const lottoButton=document.querySelector(".lottoButton");
        
        lottoButton.addEventListener("click",()=>{
            this.winBox.lottoBeads();
            const div2 = this.winBox.num2.join(",");
            outbox.innerHTML = "";
            
            const div= document.createElement("div");
            div.innerHTML = div2;
            outbox.append(div);
        })
    }
}


class LotteryBox{
    num =[];
    constructor(){
        for (let i=1;i<=45; i++){
            this.num.push(i);
        }
    }
}


class  WinningResultBox{
    constructor(){
        this.num2=[];
    }
    lottoBeads(){
        this.num2=[];
        let lottobox= new LotteryBox().num;
        for(let i=0;i<6; i++){
            let randomBoll = parseInt(Math.random() * lottobox.length);
            this.num2.push(lottobox[randomBoll]);
            lottobox.splice(randomBoll,1);
        }
    }
}
let winBox = new WinningResultBox();
let lottoMachine = new LottoMachine(winBox);
// let lotteryBox = new LotteryBox()
// winBox.lottoBeads();
lottoMachine.management();




console.log(winBox.num2);
// console.log(LottoMachine.management())
// console.log(lotteryBox.num);