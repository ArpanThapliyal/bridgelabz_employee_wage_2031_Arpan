const working_wages = 20;
const part_time = 4;
const full_time = 8;
var total_wage ;

// generate random number
function ran(){
    return Math.floor(Math.random()*10)+1;
}

//check if present or not
function attendance() {
    const val = ran();
    if (val>6){
        console.log("employee is present !!");
        wages();
    }
    else{
        console.log("employee is absent !!");
    }
}
// calculate working hours
function emp_working_hour (){
    const random = ran();
    let emp_hour = part_time; 
    if(random>5) {
        emp_hour = full_time;
    }
    return emp_hour;
}

// calculate wages of employee and tell part-time or full-time employee
function wages() {
    //total
    total_wage = emp_working_hour()* working_wages;

    switch(emp_working_hour()) {
        case 8 : console.log(`you are a full-time employee with working wage = ${total_wage}`);
        break;
        case 4 :console.log(`you are a part-time employee with working wage = ${total_wage}`);
        break;
        default : console.log(`you are a no-time employee with working wage = ${0}`);
    }
}

attendance();


 




