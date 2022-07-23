const fareMap ={
    upto10: {
        fare: 100,
    },
    upto50: {
        fare: 300,
    },
    upto100: {
        fare: 500,
    },
    upto200: {
        fare: 1000,
    },
    upto300: {
        fare: 1200,
    },
    upto400: {
        fare: 1500,
    },
};
function fareCalculate(){
    const totalFare = getTotalFare();
    const results = document.getElementById("amount");

    if(isNaN(totalFare)){
        results.textContent = totalFare;
    }
        else{
            results.textContent = 'Total Amount: Ksh$(totalFare)';
        }
}
function getTotalFare(){
    const distance = parseInt(document.getElementById("distance").value);
    const people = parseInt(document.getElementById("people").value);
    let fare = 0;
    if (distance >=1 && distance<=10){
        fare = calculateFare("upto10", people);
    }
    else if (distance>=11 && distance<=50){
        fare = calculateFare("upto50", people);
    }
    else if (distance>=51 && distance<=100){
        fare = calculateFare("upto100", people);
    }
    else if (distance>=101 && distance<=200){
        fare = calculateFare("upto200", people);
    }
    else if (distance>=201 && distance<=300){
        fare = calculateFare("upto300", people);
    }
    else if (distance>=301 && distance<=400){
        fare = calculateFare("upto400", people);
    }
    else {
        return"Bus does not go beyond this point";
    }
    return fare;
}
function calculateFare( FareMapKey, people){
    return fareMap[FareMapKey].fare * people;
}
