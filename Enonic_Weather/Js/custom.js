//var APPID = "a29dc0cc72931350a87fb592faaad652";
var APPID = "1972545c68af173f275c5208ce0f3dad";
var OsloTemp;
var LondonTemp;
var MinskTemp;

//var loc;

function updateByName(country, check){
    var url = "http://api.openweathermap.org/data/2.5/weather?" +
        "q=" + country +
        "&units=metric" +
        "&APPID=" + APPID;
    sendRequest(url, check);
}

function sendRequest(url, check){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            var data = JSON.parse(xmlhttp.responseText);
            var weather = {};
            //weather.icon.weather[0].id;
            if (check == "no"){
                weather.OsloTemp = data.main.temp;
            }
            if (check == "en"){
                weather.LondonTemp = data.main.temp;
            }
            if (check == "mi"){
                weather.MinskTemp = data.main.temp;
            }
            
            Oppdater(weather, check);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function Oppdater(weather, check){
    if (check == "no"){
        OsloTemp.innerHTML = weather.OsloTemp;
    }

    if (check == "en"){
        LondonTemp.innerHTML = weather.LondonTemp;
    }

    if (check == "mi"){
        MinskTemp.innerHTML = weather.MinskTemp;
    }
}

function getData(){
    OsloTemp = document.getElementById("OsloTemp");
    LondonTemp = document.getElementById("LondonTemp");
    MinskTemp = document.getElementById("MinskTemp");

    updateByName("Oslo,no", "no");
    updateByName("London,uk", "en");
    updateByName("Minsk", "mi");
    
    time = document.getElementById("time");
    time.innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}

window.onload = function (){
    getData();
}

$("document").ready(function(){
    window.setInterval(function(){
        getData();
    }, 60000);
});