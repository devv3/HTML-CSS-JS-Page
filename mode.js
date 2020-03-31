var imgList = ["image1.jpg","image2.jpg", "image3.jpg" ];

var myButton = document.getElementById("myButton");
myButton.onclick = function( e ){
    var elem = e.target,
    imageIndex = parseInt(elem.dataset.img,10);
    if( imageIndex <= (imgList.length -1) ) {
        elem.src = imgList[imageIndex++];
        elem.dataset.img = imageIndex;
    } else {
        elem.src = imgList[0];
        elem.dataset.img = 1;
    }
}