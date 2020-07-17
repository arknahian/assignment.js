function brickCalculator(floor){
    var feet = 1000;
    var firstTenFloor = 0;
    var seccondTenFloor = 0;
    var step3;
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
            var step3 = feet * 10 * floor;
            return firstTenFloor+ seccondTenFloor + step3;
        }

}
var result = brickCalculator(23);
console.log(result)