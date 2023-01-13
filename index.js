// Code your solution in this file!

function returnFirstTwoDrivers(parameter) {
    return parameter.slice(0,2)
} 

function returnLastTwoDrivers (parameter) {
    return parameter.slice(-2)
}

const selectingDrivers = [(returnFirstTwoDrivers), (returnLastTwoDrivers)];

function createFareMultiplier(intParameter){
    const fare = function(fare) {
        return intParameter * fare;
    }
    return fare ;
}

function fareDoubler(fareToDouble){
    const oldFunction = createFareMultiplier;
    return oldFunction(fareToDouble)(2);
}

function fareTripler(fareToTriple){
    const oldFunction = createFareMultiplier;
    return oldFunction(fareToTriple)(3);
}

function selectDifferentDrivers (arrayOfDrivers, func) {
    if (func === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers);

    } else {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}
