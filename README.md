# **Introduction**
This repository contains the Employee Wage Calculator, which demonstrates various programming constructs using JavaScript. It calculates employee wages based on daily attendance, working hours, and monthly and annual wage summaries. The program is inspired by use cases (UCs) outlined in Node.js constructs and is implemented with a focus on modularity and reusability.


# **Technologies Used**
- JavaScript: Core programming language.
- Node.js: Development environment (optional for CLI-based execution).
  
## **Program Logic**

### **Attendance Simulation**
- **Uses**:
  - `Math.random()` to generate random numbers for simulating attendance.
  - `if-else` conditional statements to check if the employee is present or absent.
  - Constants:
    - `part_time = 4` (hours), `full_time = 8` (hours).

---

### **Daily Wage Calculation**
- **Uses**:
  - Constants:
    - `working_wages = 20` (wage per hour).
  - `switch-case` to determine if the employee is part-time or full-time.
  - Arithmetic operations for wage calculation:
    - `emp_hour * working_wages`.

---

### **Monthly Wage Calculation**
- **Uses**:
  - **Loops**:
    - A `for` loop to iterate over 20 working days.
  - Function:
    - `attendance()` to determine if the employee is present each day.
  - Aggregator variables:
    - `total_month_wage` and `total_month_hour` to accumulate wages and hours.

---

### **Conditional Wage Calculation**
- **Uses**:
  - **While Loop**:
    - Runs until the total working hours reach 160 or the number of days reaches 20.
  - Function:
    - `attendance()` to decide if the employee works on a given day.
  - Aggregator variables:
    - `total_hour` and `final_wage` to track hours worked and wages.
  - Logical conditions:
    - `while (days < 20 && total_hour <= 160)`.

---

### **Annual Wage Calculation**
- **Uses**:
  - **Array**:
    - `arr[]` to store monthly wage data.
  - **Object**:
    - `obj{}` to store the following data for each month:
      - `month`
      - `total_month_wage`
      - `total_month_hour`
  - **Loops**:
    - A `for` loop to iterate over all 12 months.
  - Function:
    - `month_wage()` to calculate wages for each month.

---
