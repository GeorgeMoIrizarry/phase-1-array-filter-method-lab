// Code your solution here
console.log("hello")
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(driverArr, aString) {
    return driverArr.filter( function (driverName) {
        return aString.toLowerCase() === driverName.toLowerCase()
    })
}
console.log(findMatching(drivers, 'boBby'))
function fuzzyMatch(driverArr, firstletStr) {
    return driverArr.filter( function (driverName) {
        return firstletStr.charAt(0) === driverName.charAt(0)
    } )
}
console.log(fuzzyMatch(drivers, 'Stop'))
const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ]
function matchName(driverObj, aString) {
    return driverObj.filter( function (obj) {
        return aString === obj.name
    })
}
console.log(matchName(driver, 'Sammy'))