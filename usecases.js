const working_wages = 20;
const part_time = 4;
const full_time = 8;
let total_wage ;

// generate random number
function ran(){
    return Math.floor(Math.random()*10)+1;
}

//check if present or not
function attendance() {
    const val = ran();
    if (val>5){
        return true;
    }
    else{
        
        return false;
    }
}
// calculate working hours
function emp_working_hour (){
    const random = ran();
    let emp_hour = part_time; 
    if(random>5) {
        emp_hour = full_time;
    }
     //total
    total_wage = emp_hour* working_wages;
    return emp_hour;
}

// calculate wages of employee and tell part-time or full-time employee
function wages() {
   let att = attendance();
   (att===true) ? console.log("employee is present !!"):console.log("employee is absent !!");
    switch(emp_working_hour()) {
        case 8 : console.log(`you are a full-time employee with daily working wage = ${total_wage}`);
        break;
        case 4 :console.log(`you are a part-time employee with daily working wage = ${total_wage}`);
        break;
        default : console.log(`you are a no-time employee with daily working wage = ${0}`);
    }
}
// calculate monthly wage
function month_wage() {
    var total_month_wage = 0;
    for(let val=0;val<20;val++){
        if(attendance()===true){
            emp_working_hour();
            total_month_wage += total_wage;
        }
    }
    console.log(`your monthly wage is ${total_month_wage}`);
}

wages();
month_wage();

 




