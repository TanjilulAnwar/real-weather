

$(document).ready(function () {
    
    //get location
    navigator.geolocation.getCurrentPosition(success,error);

    function success(pos){
   var lat =pos.coords.latitude;
   var long = pos.coords.longitude;
   weather (lat,long);
    }
    
    function error(m) {
        switch(m.code) {
            case m.PERMISSION_DENIED:
                alert("Location Was Blocked");
              break;
            
          }
      }
    function weather(lat,long) {
        var Url = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
        $.getJSON(Url, function (data) {

            console.log(data);
            console.log("Update dom is working");
            updateDOm(data);
        });


    };
    function updateDOm(data) {
        var city = data.name;
        var tmpcr = Math.round(data.main.temp);
        var descrptn = data.weather[0].description;
        var icon = data.weather[0].icon;
        $('#city').html(city);
        $('#temp').html(tmpcr);
        $('#desc').html(descrptn);
        $('#icon').attr('src',icon);
    }


 





})