// Code your solution here
function findMatching(driverNames,myString){
    
    
    return driverNames.filter(drivers => drivers.toLowerCase() === myString.toLowerCase())
    
      
}
    
function fuzzyMatch(driverNames,myString){
    return driverNames.filter(drivers => drivers.charAt() === myString.charAt())
    
    //const myFilterDriver = driverNames.filter(function driver(driver){
        //if(driver.charAt() === myString.charAt()){
            //return driver
        //}
    //})
    //return myFilterDriver
}
function matchName(driver,string){
    return driver.filter(drivers => drivers.name === string)
}