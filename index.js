const btnE1 = document.getElementById("btn");
const resultE1 = document.getElementById("result");
const birthdayE1 = document.getElementById("birthday");

function calculateAge(){
    const birthdayValue = birthdayE1.value;
    if (birthdayValue === ""){
        alert("Please Enter your birth date");
    }
    else{
        const age = getAge(birthdayValue);
        resultE1.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
        
    }
}
function getAge(birthdayValue){
    const currentDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const month = currentDate.getMonth() - birthdayDate.getMonth();
    
    if(
        month < 0 ||
        (month === 0 && currentDate.getDate() < birthdayDate.getDate())
    ){
        age--;
    }
    return age;
}
btnE1.addEventListener("click", calculateAge);