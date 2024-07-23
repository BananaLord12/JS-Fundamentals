function employeeShower(employees){
    for(let empolyee of employees){
        let person = {name: empolyee, Number: Number(String(empolyee).length)};
        console.log(`Name: ${person.name} -- Personal Number: ${person.Number}`)
    }
}

employeeShower(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);