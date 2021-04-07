console.log("Hello");


var arrImages = [];
var timeDisplay = 0;
var clicked = 0;
var totalClick = 0;
var arrImagesName = [];
var chartData=[];
var chartData2=[];


function Product(imageName, url) {
    this.imageName = imageName;
    this.url = url;
    this.timeDisplay = timeDisplay;
    this.clicked = clicked;
    arrImages.push(this);
}

new Product('Bag', 'img/bag.jpg');
new Product('Banana', 'img/banana.jpg');
new Product('Bathroom', 'img/bathroom.jpg');
new Product('Boots', 'img/boots.jpg');
new Product('Breakfast', 'img/breakfast.jpg');
new Product('Bubblegum', 'img/bubblegum.jpg');
new Product('Chair', 'img/chair.jpg');
new Product('Cthulhu', 'img/cthulhu.jpg');
new Product('Dog-Duck', 'img/dog-duck.jpg');
new Product('Dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('Pet-sweep', 'img/pet-sweep.jpg');
new Product('Scissors', 'img/scissors.jpg');
new Product('Shark', 'img/shark.jpg');
new Product('Sweep', 'img/sweep.png');
new Product('Tauntaun', 'img/tauntaun.jpg');
new Product('Unicorn', 'img/unicorn.jpg');
new Product('USB', 'img/usb.gif');
new Product('Water-Can', 'img/water-can.jpg');
new Product('Wine-Glass', 'img/wine-glass.jpg');


var imageIndexes=[];





function selectImage() {
    var firstImageIndex;
    var secondImageInedx;
    var thirdImageIndex;
    do {
        firstImageIndex = Math.floor(Math.random() * arrImages.length);
    } while (imageIndexes.includes(firstImageIndex));
    do {
        secondImageInedx = Math.floor(Math.random() * arrImages.length);
    } while (secondImageInedx == firstImageIndex || imageIndexes.includes(secondImageInedx));
    do {
        thirdImageIndex = Math.floor(Math.random() * arrImages.length);
    } while (thirdImageIndex == firstImageIndex || thirdImageIndex == secondImageInedx || imageIndexes.includes(thirdImageIndex));

    imageIndexes=[];
    imageIndexes.push(firstImageIndex);
    imageIndexes.push(secondImageInedx);
    imageIndexes.push(thirdImageIndex);

    displayImages(firstImageIndex, secondImageInedx, thirdImageIndex);

}



var firstImage = document.getElementById("firstImage");
var secondImage = document.getElementById("secondImage");
var thirdImage = document.getElementById("thirdImage");


var currentFirst;
var currentSecond;
var currentThird;

function displayImages(first, second, third) {
    currentFirst = arrImages[first];
    currentSecond = arrImages[second];
    currentThird = arrImages[third];

    firstImage.setAttribute("src", currentFirst.url);
    arrImages[first].timeDisplay += 1;

    secondImage.setAttribute("src", currentSecond.url);
    arrImages[second].timeDisplay += 1;

    thirdImage.setAttribute("src", currentThird.url);
    arrImages[third].timeDisplay += 1;
}

selectImage();

var content = document.getElementById("firstSec");
content.addEventListener('click', changeImages);


function changeImages(event) {

    if (event.target.id == "firstImage") {
        currentFirst.clicked++;
    }
    else if (event.target.id == "secondImage") {
        currentSecond.clicked++;
    }
    else {
        currentThied.clicked++;
    }

    selectImage();

    totalClick++;
    if (totalClick == 25) {
        content.removeEventListener('click', changeImages);
    }
    console.log(event.target.id);
}


var list = document.getElementById("logs");

//Logs
function displayLogs() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    arrImagesName=[];
    chartData=[];
    chartData2=[];

    var chartSec=document.getElementById("chartSec");
    while (chartSec.firstChild) {
        chartSec.removeChild(chartSec.firstChild);
    }

    var chart=document.createElement("canvas");
        chart.setAttribute("id","myChart");
        chartSec.appendChild(chart);

    for (let i = 0; i < arrImages.length; i++) {
        var li = document.createElement("li");
        list.appendChild(li);
        li.textContent = arrImages[i].imageName + " had " + arrImages[i].clicked
            + " votes, and was seen " + arrImages[i].timeDisplay + " times ";
        arrImagesName.push(arrImages[i].imageName);
        chartData.push(arrImages[i].clicked);
        chartData2.push(arrImages[i].timeDisplay)

    }

    //Chart data
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: arrImagesName,
            datasets: [{
                label: '# of display Times',
                data: chartData2,
                backgroundColor: 
                    'rgba(255, 99, 132, 0.2)'
                ,
                borderColor: 
                    'rgba(255, 99, 132, 1)'

                ,
                borderWidth: 1
            },
            {
                label: '# of clicked ',
                data: chartData,
                backgroundColor: 
                    'rgba(255, 159, 64, 0.2)'
                ,
                borderColor: 
                    'rgba(255, 159, 64, 1)'
                ,
                borderWidth: 1
            }
        ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

}




