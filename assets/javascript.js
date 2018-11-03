var sunny = $("#sunny");
var cloudy = $("#cloudy");
var rainy = $("#rainy");
var snowy = $("#snowy");
var stormy = $("#stormy");
weatherHide();
$('#projectName').addClass('animated rubberBand');

//CODE NEEDS TO BE ADDED TO APPEND TEAM NAME TO DOM USING ANIMATION
// $('#teamName').addClass('animated rubberBand');



var weatherArray = [{
        teamName: "IND",
        teamCity: "Dome"
    },
    {
        teamName: "ARI",
        teamCity: "Dome"
    },
    {
        teamName: "ATL",
        teamCity: "Dome"
    },
    {
        teamName: "BAL",
        teamCity: "Baltimore"
    },
    {
        teamName: "CLE",
        teamCity: "Cleveland"
    },
    {
        teamName: "BUF",
        teamCity: "Buffalo"
    },
    {
        teamName: "CAR",
        teamCity: "Charlotte"
    },
    {
        teamName: "CHI",
        teamCity: "Chicago"
    },
    {
        teamName: "CIN",
        teamCity: "Cincinnati"
    },
    {
        teamName: "DAL",
        teamCity: "Dome"
    },
    {
        teamName: "DEN",
        teamCity: "Denver"
    },
    {
        teamName: "DET",
        teamCity: "Dome"
    },
    {
        teamName: "GB",
        teamCity: "Green Bay"
    },
    {
        teamName: "HOU",
        teamCity: "Dome"
    },
    {
        teamName: "JAX",
        teamCity: "Jacksonville"
    },
    {
        teamName: "KC",
        teamCity: "Kansas City"
    },
    {
        teamName: "LAC",
        teamCity: "Los Angeles"
    },
    {
        teamName: "LAR",
        teamCity: "Los Angeles"
    },
    {
        teamName: "MIA",
        teamCity: "Miami"
    },
    {
        teamName: "MIN",
        teamCity: "Dome"
    },
    {
        teamName: "NE",
        teamCity: "Foxborough"
    },
    {
        teamName: "NO",
        teamCity: "Dome"
    },
    {
        teamName: "NYG",
        teamCity: "East Rutherford"
    },
    {
        teamName: "NYJ",
        teamCity: "East Rutherford"
    },
    {
        teamName: "PHI",
        teamCity: "Philadelphia"
    },
    {
        teamName: "OAK",
        teamCity: "Oakland"
    },
    {
        teamName: "PIT",
        teamCity: "Pittsburgh"
    },
    {
        teamName: "SEA",
        teamCity: "Seattle"
    },
    {
        teamName: "SF",
        teamCity: "Santa Clara"
    }, {
        teamName: "TB",
        teamCity: "Tampa"
    },
    {
        teamName: "TEN",
        teamCity: "Nashville"
    },
    {
        teamName: "WAS",
        teamCity: "Landover"
    }
];

function getWeek(weekVar) {
    return Math.max(Math.min(weekVar - 35, 16), 1);
}

function weatherHide() {
    sunny.hide();
    cloudy.hide();
    rainy.hide();
    snowy.hide();
    stormy.hide();
};

function weatherAnimate(weather) {
    weatherHide();
    weather.show();
    $('#weatherDiv').addClass('animated shake');
    $('#weatherDiv').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
        function() {
            $(this).removeClass('animated shake');
        });
};

// $(function() {
//     var params = {
//         // Request parameters
//     };

//     $.ajax({
//****************************url:THIS IS WHERE WE REQUEST FAN NEWS
//             },
//             type: "GET",
//             // Request body
//             data: "{body}",
//         })
//         .done(function(data) {
//             // alert("success");
//             console.log(data);


//             for (var i = 0; i < 3; i++) {

//                 var hNum = i + 1;

//                 $("#headline" + hNum).text(data[i].Title);

//                 $("#news" + hNum).attr({
//                     text: "Link to Article",
//                     href: data[i].Url,
//                     target: "_blank",
//                     class: "noDot"
//                 })
//             }

//         })
//         .fail(function() {
//             // alert("error");
//         });
// });

// $(".teamList").on("click", function() {
//     var team = $(this).attr("data-name");
//     var gamesArray = [];
//     var gamesObj = {
//         homeTeam: "",
//         awayTeam: ""
//     };
//     var secondArray = [];
//     var thirdArray = [];
//     $("#weatherDiv").empty();



// //This is where we request 
//     $(function() {
//         var params = {
//             // Request parameters
//         };

//         $.ajax({
//           //  ****************************url:THIS IS WHERE WE REQUEST HOME AND AWAY TEAMS
//                 },
//                 type: "GET",
//                 // Request body
//                 data: "{body}",
//             })
//             .done(function(data) {
//                 // alert("success");
//                 console.log(data);

//                 for (var i = 0; i < data.length; i++) {

//                     gamesObj = {
//                         homeTeam: data[i].HomeTeam,
//                         awayTeam: data[i].AwayTeam
//                     }
//                     gamesArray.push(gamesObj);
//                 }

//                 console.log(gamesArray);

//                 for (var i = 0; i < gamesArray.length; i++) {
//                     if (team == gamesArray[i].homeTeam || team == gamesArray[i].awayTeam) {
//                         secondArray.push(gamesArray[i].homeTeam);
//                     }
//                 }

//                 console.log(secondArray);
//                 var city = secondArray[0];
//                 var hostSite = "";

//                 for (var i = 0; i < weatherArray.length; i++) {
//                     if (city === weatherArray[i].teamName) {

//                         hostSite = weatherArray[i].teamCity;

//                     }
//                 }

//                 console.log(hostSite);

//                 if (hostSite === "Dome") {
//                     var domeText = "This game is played in a dome";
//                     $("#weatherDiv").append(domeText);

//                     weatherHide();
//                 } else {
//                     var APIkey = "2a4426e3c44bb755d8a331c143ed022d";
//                     var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + hostSite + "&appid=" + APIkey;
//                     // Create an AJAX call to retrieve data Log the data in console
//                     $.ajax({
//                         url: queryURL,
//                         method: "GET",
//                     }).done(function(response) {
//                         console.log(response);

//                         var K = response.main.temp;
//                         var tempConverter = (K - 273.15) * 1.80 + 32;
//                         var currentTemp = Math.round(tempConverter);

//                         var cityDiv = $("<div>").html("Game Site: " + response.name);
//                         var windDiv = $("<div>").html("Current Wind Speed: " + response.wind.speed + " MPH");
//                         var humidityDiv = $("<div>").html("Current Humidity: " + response.main.humidity + " degrees, F");
//                         var tempDiv = $("<div>").html("Current Temperature: " + currentTemp + " degrees, F");

//                         $("#weatherDiv").append(cityDiv);
//                         cityDiv.append(tempDiv);
//                         tempDiv.append(windDiv);
//                         windDiv.append(humidityDiv);

//                         if (currentTemp < 32) {
//                             weatherAnimate(stormy);
//                         } else {
//                             weatherAnimate(sunny);
//                         }

//                     })
//                 }
//             })
//             .fail(function() {
//                 alert("error 1");
//             });
//     });

//     $(function() {
//         var params = {
//             // Request parameters
//         };

//         $.ajax({
//             //****************************url:THIS IS WHERE WE REQUEST INJURIES
//                 },
//                 type: "GET",
//                 // Request body
//                 data: "{body}",
//             })
//             .done(function(data) {
//                 // alert("success");            
//                 // console.log(data);

//                 $("#myDiv").empty();

//                 for (var i = 0, num = 1; i < data.length && num <= 10; i++) {

//                     if ((data[i].DeclaredInactive) && (data[i].Position === "TE" || data[i].Position === "QB" ||
//                             data[i].Position === "WR" || data[i].Position === "RB")) {
//                         num++;
//                         var newInjDiv = $("<ul>");
//                         newInjDiv.text(data[i].Position + " " + data[i].Name + " is Inactive");
//                         $("#myDiv").append(newInjDiv);
//                     }
//                 }

//             })
//             .fail(function() {
//                 alert("error 2");
//             });
//     });

//     $(function() {
//         var params = {
//             // Request parameters
//         };

//         $.ajax({
//             //****************************url:THIS IS WHERE WE REQUEST TEAM NEWS
//                 },
//                 type: "GET",
//                 // Request body
//                 data: "{body}",
//             })
//             .done(function(data) {

//                 $("#newsDiv").empty();

//                 for (var i = 0; i < 10; i++) {
//                     var newNewsDiv = $('<li>');
//                     var newA = $("<a>", {
//                         text: data[i].Title,
//                         href: data[i].Url,
//                         target: "_blank",
//                         class: "noDot"
//                     });

//                     $("#newsDiv").append(newNewsDiv);
//                     newNewsDiv.append(newA);
//                 }
//             })
//             .fail(function() {
//                 alert("error 3");
//             });
//     });


// })
