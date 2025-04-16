
const accountId = 144553
let accountEmail = "hitesh@google.com"
let accountPassword = '12345'
accountCity = "jaipur"

// accountId =2  // not allowed

accountEmail  = "hc@hc.com"
accountPassword ="212121"
accountCity = "bengluru"

let accontState;
console.log(accountId)

/* 
prefer not to use var
because of issue in block scope and functional scope

*/

console.table([accountId,accountEmail,accountPassword,accountCity,accontState])