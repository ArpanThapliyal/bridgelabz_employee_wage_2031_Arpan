const working_wages = 20;
const part_time = 4;
const full_time = 8;
let total_wage ;
let month = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
let obj ={ } // object for anual data
let uni=0;   // universal indexing 

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
   if(att===true){
    console.log("employee is present !!");
    }
   else{
    console.log("employee is absent !!");
    return;
    }    

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
    var total_month_hour = 0;
    for(let val=0;val<20;val++){
        if(attendance()===true){
            total_month_hour+=emp_working_hour();
            total_month_wage += total_wage;
        }
    } 
    obj["total_month_hour"] = total_month_hour;
    obj["total_month_wage"] = total_month_wage;

    return total_month_wage;

}

// calculate wage till working hours of 160 or max days of 20
function conditional_wage_calculation() {
    var final_wage = 0;
    var total_hour = 0;
    var days = 0;
    while(days<20 && total_hour<=160){
        if(attendance()===true){
            total_hour += emp_working_hour();
            final_wage += total_wage;
        }
        days++;
    }
    console.log(`your conditionally calculate monthly wage is ${final_wage}`);
}

// calculate wage for 12 months
let arr = [];
function anually_wage(){
    var anually = 0;
    uni=0;
    for(let i=0;i<12 ;i++){
        obj["month"]=month[i];
        anually+=month_wage();
        arr[i] = obj;
        obj={};    
    } 
    console.log(`total anual wage is ${anually}`);
    console.log(arr);
}
// wages();
// console.log(`your monthly wage is ${month_wage()}`);
// conditional_wage_calculation();
anually_wage();


 




