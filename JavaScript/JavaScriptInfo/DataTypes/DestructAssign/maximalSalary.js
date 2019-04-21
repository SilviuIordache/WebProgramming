let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 500
};

let topSalaries = function(salaries){
    let maxSalary = -1;
    let topPaidPerson = "";
    for (let [key, value] of Object.entries(salaries)) {
        if (value > maxSalary) {
            maxSalary = value;
            topPaidPerson = key;
        } 
    }
    alert(`${topPaidPerson} has the biggest salary of: ${maxSalary}`);
}

topSalaries(salaries);