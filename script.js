
// $(function(){
//     var val = o;
//     var numOfBeers = $("#numBeers").val();
//     alert(numOfBeers);
// })

// // for testing
// $(function() {
//     $("button").click(function() {
//         $("h2").toggleClass("green");
//     });
// });

$(document).ready(
    function () {
        // add event handlers
        $("#splitCost").click(costEqualSpliter);
        // $("#tpipLength").click(showPopup);
    }
)

function costEqualSpliter() {
    // 1 beer price
    var liquidOuncesInBeer = 0.54;
    // total drank beers
    var totalFromDrankBeers = 0;
    // 1 glass of wine
    var liquidOuncesInWine = 0.6;
    // total drank wine
    var totalFromDrankWine = 0;
    // 1 shot
    var liquidOuncesInShot = 0.6;
    // total drank shots
    var totalFromDrankShots = 0;

    var totalLiquidOunces = 0;

    var bloodAlcoholContent = 0;

    // get number of beer person had
    var numBeers = parseFloat($("#numBeers").val());

    // get number of wine person had
    var numWine = parseFloat($("#numWine").val());

    // get number of shots person had
    var numShots = parseFloat($("#numShots").val());

    // get how much person weights
    var weight = parseFloat($("#weight").val());

    // get Hours Since Your First Drink
    var hoursPassed = parseFloat($("#hoursPassed").val());
    
    // calculation

    // find total total From Drank Beers
    var totalFromDrankBeers = numBeers * liquidOuncesInBeer;
    // find total total from drank wine
    var totalFromDrankWine = numWine * liquidOuncesInWine;
    // find total total from drank shots
    var totalFromDrankShots = numShots * liquidOuncesInShot;

    // find total liquid ounces
    totalLiquidOunces = (totalFromDrankBeers + totalFromDrankWine + totalFromDrankShots) * 7.5;
    // find Blood Alcohol Content
    bloodAlcoholContent = totalLiquidOunces * weight;
    bloodAlcoholContent = bloodAlcoholContent - (hoursPassed * 0.015);

    // output on the screen
    $("#costOutput").text(bloodAlcoholContent.toFixed(3));

    $("p.output").show();

}