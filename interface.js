document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })
})

function handleClick(event){

    let square = event.target;//target é o elemento que sofreu o event/ação
    let position = square.id;

    let p1 = document.getElementById("player1")
    let p2 = document.getElementById("player2")

    let p1_value = p1.value;
    let p2_value = p2.value;

    
    if(handleMove(position)) {

        setTimeout(()=>{
            if(velha){
                alert("O jogo deu velha");
            }else if(playerTime == 0){
                alert(`Vencedor(a): ${p1_value}`)
            }else{
                alert(`Vencedor(a): ${p2_value}`)

            }
        }, 10)

    };
    updateSquares(position);

}

function updateSquares(){
    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        let position = square.id;
        let symbol = board[position];

        if(symbol !== ''){
            square.innerHTML = `<div class=${symbol}></div>`
        }
    })
}








