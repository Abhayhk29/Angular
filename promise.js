/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var imageTestPromise = document.getElementById('imageTestPromise');

var images = ['images/1.jpeg', 'images/2.jpeg', 'images/3.jpg', 'images/4.jpg'];
 
function displayimages(images){
    var targetimage = images.shift(); // process doggies images one at a time
    if (targetimage){ // if not end of array
        console.log(targetimage);
        getImage(targetimage).then(function(url){ // load image then...
            var image_1 = document.createElement('img');
            image_1.setAttribute('src', url);
            imageTestPromise.appendChild(image_1); // add image to DIV
            displayimages(images); // recursion- call displayimages() again to process next image/doggy
        }).catch(function(url){ // handle an image not loading
            console.log('Error loading ' + url);
            displayimages(images); // recursion- call displayimages() again to process next image/doggy
        })
    }
}

function getImage(url){
    return new Promise(function(resolve, reject){
        var img = new Image()
        img.onload = function(){
            resolve(url)
        }
        img.onerror = function(){
            reject(url)
        }
        img.src = url
    })
}
 
displayimages(images);