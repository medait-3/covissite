







var map = L.map('map').setView([0, 0], 1);
L.tileLayer('https://api.maptiler.com/maps/darkmatter/256/{z}/{x}/{y}.png?key=qHdCKa3B8bKNWJZy9AT7', {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);

$(document).ready(function(){
    $.getJSON("https://covidma.herokuapp.com/api", function(data){
        var taab = [];
        var tab = '';
        x= data[1];
        $.each(x,function(key,val){

                tab += '<tbody><tr>';
                tab += '<td>'+val.region+'</td>';
                tab += '<td>'+val.cases+'</td>';
                 tab += '<td>'+val.latitude+'</td>';
                tab += '</tr></tbody>';

                if(val.cases<10 && val.cases != 0){
                    var circle = L.circle([val.latitude,val.longitude], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 10000
                    }).addTo(map);
                }
                if(val.cases<=30 && val.cases>10){
                    var circle = L.circle([val.latitude,val.longitude], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 20000
                    }).addTo(map);
                }
                if(val.cases<=60 && val.cases>30){
                    var circle = L.circle([val.latitude,val.longitude], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 30000
                    }).addTo(map);
                }
                if(val.cases<=90 && val.cases>60){
                    var circle = L.circle([val.latitude,val.longitude], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 40000
                    }).addTo(map);
                }
                if(val.cases<=120 && val.cases>90){
                    var circle = L.circle([val.latitude,val.longitude], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 50000
                    }).addTo(map);
                }
                if(val.cases<=150 && val.cases>120){
                    var circle = L.circle([val.latitude,val.longitude], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 60000
                    }).addTo(map);
                }
                if(val.cases>150){
                    var circle = L.circle([val.latitude,val.longitude], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 80000
                    }).addTo(map);
                }
                if(val.cases != 0){
                    circle.bindPopup("La région: <b>"+val.region+"</b> contient: <b>"+val.cases+" cas.</b>");
                    taab.push(circle);
                }
        });
      $('#taable').append(tab);
     var group = new L.featureGroup(taab);
    map.fitBounds(group.getBounds());  
    });
});


var imageUrl = 'https://i.imgur.com/ASmSLId.png',
imageBounds = [[22.056114, -16.559092], [26.913254, -10.430743]];

L.imageOverlay(imageUrl, imageBounds).addTo(map);


//top scrulll
$(document).ready(function(){


$(window).on('scroll',function(){

if($(this).scrollTop()>100) {
    $('.navbar').addClass('bg-black')
}else{
    $('.navbar').removeClass('bg-black')
}

});

});

/// <reference types="jquery" />
$(function () {
    // Search And Menu Popup
    $(".search, .menu").height($(window).height());
    $(window).resize(function () {
        $(".search, .menu").height($(window).height());
    });

    $(".search-center").css("top", ($(window).height() - $(".search-center").height()) / 2);
    $(".menu ul").css("top", ($(window).height() - $(".menu ul").height()) / 2);

    $(".fa-search:first").click(function () {
        $(".search").animate({
            top: "0"
        }, 500, function () {
            $(".search-center").fadeIn(400);
        });
    });

    $(".search .container > h3").click(function () {
        $(".search-center").fadeOut(400);
        $(".search").delay(400).animate({
            top: "-100%"
        }, 500);
    });

    $(".fa-bars").click(function () {
        $(".menu").animate({
            top: "0"
        }, 500, function () {
            $(".menu ul").fadeIn(400);
        });
    });

    $(".menu i").click(function () {
        $(".menu ul").fadeOut(400);
        $(".menu").delay(400).animate({
            top: "-100%"
        }, 500);
    });

    $(window).resize(function () {
        if ($(window).width() >= "992") {
            $(".menu").css("top", "-100%");
        }    
    });

    // Run Nice Scroll
    $("html").niceScroll({
        cursorcolor: '#0091FF',
        cursorwidth: "10",
        cursorborderradius: 0,
        cursorborder: '1px solid #0091FF'
    });
});










$(document).ready(function(){
    $.getJSON("https://covidma.herokuapp.com/api", function(data){
        var taab = [];
        var tab = '';
        f= data[0];
        $.each(f,function(key,val){
               
        });
      $('#taable').append(tab);
     var group = new L.featureGroup(taab);
    
    });
});

const headingCounter = document.getElementsByClassName('heading_counter')
const v = 2;

function headingOne (){
    if(scrollY > 300){
        headingCounter[0].textContent = parseFloat(headingCounter[0].textContent) + 1
        if(headingCounter[0].textContent == f.confirmed){
            clearInterval(oneTimer)
        }
}
}
let oneTimer = setInterval(headingOne,13)

function headingTwo (){
    if(scrollY > 300){
        headingCounter[1].textContent = parseFloat(headingCounter[1].textContent) + 1
        if(headingCounter[1].textContent == f.recovered){
            clearInterval(twoTimer)
        }
}
}
let twoTimer = setInterval(headingTwo,55)
function headingThree (){
    if(scrollY > 300){
        headingCounter[2].textContent = parseFloat(headingCounter[2].textContent) + 1
        if(headingCounter[2].textContent == f.deaths){
            clearInterval(threeTimer)
        }
}
}
let threeTimer = setInterval(headingThree,51)
function headingFour (){
    if(scrollY > 300){
        headingCounter[3].textContent = parseFloat(headingCounter[3].textContent) + 1
        if(headingCounter[3].textContent == f.negative){
            clearInterval(fourTimer)
        }
}
}
let fourTimer = setInterval(headingFour,9);

