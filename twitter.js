// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://*twitter.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=twitter.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';





    

    // Your code here...
let interval=1000;


let translateButtonSelector='#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010.r-18u37iz > main > div > div > div > div > div > section > div > div > div:nth-child(1) > div > div > article > div > div > div:nth-child(3) > div:nth-child(1) > div > div.css-1rynq56.r-bcqeeo.r-qvutc0.r-1qd0xha.r-n6v787.r-1cwl3u0.r-16dba41.r-6koalj.r-1w6e6rj.r-14gqq1x > span'
let postContentSelector='#id__6km1tvk6c79' 
let translateButtonSelector2='#react-root > div > div > div.css-175oi2r.r-13qz1uu.r-417010 > main > div > div > div > div > div > section > div > div > div:nth-child(2) > div > div > article > div > div > div:nth-child(3) > div:nth-child(1) > div > div.css-1rynq56.r-bcqeeo.r-qvutc0.r-1qd0xha.r-n6v787.r-1cwl3u0.r-16dba41.r-6koalj.r-1w6e6rj.r-14gqq1x > span'



setInterval(() => {

    
    let postContent=document.querySelector(postContentSelector)
    


    hideChinese();
    translate();


}, interval);


function translate(){
    let translateButton=document.querySelector(translateButtonSelector)
    let translateButton2=document.querySelector(translateButtonSelector2);


    
    try {
        translateButton.click();
        
    } catch (error) {
    }

    try {
        translateButton2.click();
        
    } catch (error) {
    }


    

}



function hideChinese(){
// Find all elements containing Chinese characters
 var chineseElements = document.querySelectorAll(':lang(zh), :lang(zh-Hans), :lang(zh-Hant), :lang(zh-HK), :lang(zh-TW)');
//chineseElements=findAllChinese();
  
// Replace Chinese elements with a button
chineseElements.forEach(function(element) {
  if(element.style.display === 'none' || element.classList.contains('needshow')){
    return 0;
  }
    var button = document.createElement('button');
  button.innerText = 'Show Element';
  button.lang='en'
  button.addEventListener('click', function() {
    // Show the original element when the button is clicked
    element.style.display = 'block';
    element.classList.add('needshow')
    button.style.display = 'none'; // Hide the button after showing the element
  });

  // Hide the original element and append the button
  element.style.display = 'none';
  element.parentNode.insertBefore(button, element);
});


}




    


    
})();
