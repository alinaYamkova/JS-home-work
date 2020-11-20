///////////ZADACHA 3///////////////////////////////////////////////////

const findBestEmployee = function (employees) {
  'use strict';
  //Write code under this line

let max = Math.max(...Object.values(developers));

  for (key in developers) {
    if (max === developers[key]) {
      return key;
    }
  }
}
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99
}
console.log(findBestEmployee(developers));

  ////////////////// 2й варыант//////////////////////////////////////

  // let max = 0;
  // let name = "";
  // for (const key in employees) {
  
  //   if(employees[key] > max) {
  //     max = employees[key];
  //     name = key;
  //   } 
  // }
    
  // return name;
// };


///////////////////////////ZADACHA4//////////////////////////////////

const countTotalSalary = function(employees) {
  'use strict';
  // Write code under this line
  let salary = 0;
 for (const key in employees) {
  salary += employees[key]
 }
 return salary;
};

const developers = {
    mango: 300,
    poly: 250,
    alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000