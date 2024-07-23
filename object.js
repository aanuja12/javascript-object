const employees =[
    {
        name:'kushal',
        age: 20,
        designation: 'web developer',
        salary:15000
    },
    {
        name:'dhanashree',
        age: 21,
        designation: 'web developer',
        salary:20000
    },
    {
        name:'Anuja',
        age: 21,
        designation: 'web developer',
        salary:25000
    },
    {
        name:'Niyati',
        age: 22,
        designation: 'web developer',
        salary:26000
    },
]

//     const mappedEmployees = employees.map((employee) => {
    
//      return {
//          ...employee,
//          salary: employee.salary * 2
//      }
//  })
//     console.log(mappedEmployees);



// const sum = (a,b, ...numbers) => {
//     let numberSum = a + b
//     numbers.forEach((num) => {
//         numberSum += num
//     })

//     return numberSum
// }
// const numbers = [1,2,3,4,5,6,7]
// console.log(sum(1,2,3,4,5,6,7))



function evaluateAfter3s(handler, seconds) {
    setTimeout(handler, seconds * 1000)
}

evaluateAfter3s(() => {
    console.log("Evaluating");
}, 3)

const intervalid = setInterval(() => {
    console.log("Running every 1 second");
}, 1000)

setTimeout(() => {
    clearInterval(intervalId)
}, 6000)

function evaluateAfter3s(handler, seconds) {
    setTimeout(handler, seconds * 1000)
}

evaluateAfter3s(() => {
    console.log("Evaluating");
}, 3)

const intervalId = setInterval(() => {
    console.log("Running every 1 second");
}, 1000)

setTimeout(() => {
    clearInterval(intervalId)
}, 6000)
