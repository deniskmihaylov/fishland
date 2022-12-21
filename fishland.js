function solve (input) {

    let mackarelPrice = Number(input[0]); 
    let spratFishPrice = Number(input[1]); 
    let bonitoWeight = Number(input[2]); 
    let safridWeight = Number(input[3]); 
    let seaShellPrice = Number(input[4]) * 7.50;

    let bonitoPrice = ((mackarelPrice * 0.60) + mackarelPrice) * bonitoWeight; 
    let safridPrice = ((spratFishPrice * 0.80) + spratFishPrice) * safridWeight;
    
    let totalPrice = seaShellPrice + bonitoPrice + safridPrice; 

    console.log(totalPrice.toFixed(2))
}

solve ([6.90, 4.20, 1.5, 2.5, 1])