const working_wages = 20;
const part_time = 4;
const full_time = 8;
var total_wage ;

//check if present or not
function attendance() {
    const val = Math.floor(Math.random()*10)+1;
    if (val>6){
        console.log("employee is present !!");
        wages();
    }
    else{
        console.log("employee is absent !!");
    }
}

// calculate wages of employee and tell part-time or full-time employee
function wages() {
    const random = Math.floor(Math.random()*10)+1
    let emp_type = "part";
    let emp_working_hour = part_time; 
    if(random>5) {
        emp_type = "full"
        emp_working_hour = full_time;
    }
    //total
    total_wage = emp_working_hour* working_wages;
    switch(emp_type) {
        case "full" : console.log(`you are a full-time employee with working wage = ${total_wage}`);
        break;
        case "part" :console.log(`you are a part-time employee with working wage = ${total_wage}`);
        break;
        default : console.log(`you are a no-time employee with working wage = ${0}`);
    }
}

attendance();


 




