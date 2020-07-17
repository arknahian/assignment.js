//PROJECT: Feet To Mile funtion 

function feetToMile(feet) {
    var mile = feet / 5280;
    mile = mile.toFixed(9);
    return mile;
}


var roadMeasurement  = feetToMile(1000);
console.log(roadMeasurement)







//PROJECT: Wood Calculator 
var chair = 1;
var table = 3;
var bed = 5;
function woodCalculator (chair, table, bed) {

     var chairTotal = chair * 10;
     var tableTotal = table * 23;
     var bedTotal = bed * 25;
     var total = chairTotal + tableTotal + bedTotal;
    return total;
    if (total <0) {
        alert("nagative value can not defind");
      }
}


//PROJECT: Brick Calculator

function brickCalculator(floor){
    var feet = 1000;
    var firstTenFloor = 0;
    var seccondTenFloor = 0;
    var ThirdFloor;
        if(floor <= 10){
            var firstTenFloor = feet * 15 * floor;
            return firstTenFloor;
        }
        else{
            if(floor >=11 && floor <=20){
                var seccondTenFloor = feet * 12 * floor;
                return firstTenFloor + seccondTenFloor;
            }
        }
         if (floor >=21){
            var ThirdFloor = feet * 10 * floor;
            return firstTenFloor+ seccondTenFloor + ThirdFloor;
        }

}
var result = brickCalculator(23);
console.log(result)


















//PROJECT: Tiny Friend 
function tinyFriend(frndName) {
    let tiny = Infinity;
    let shortest = "";

    if (frndName.length > 0) {
        for (let i = 0; i < frndName.length; i++) {
            if (typeof frndName[i] === 'string' && frndName[i].length < tiny) {
                shortest = frndName[i];
                tiny = frndName[i].length;
            }
        }
    }

    return shortest;
}




