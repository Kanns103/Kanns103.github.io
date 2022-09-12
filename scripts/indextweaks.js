!function(){"use strict";function r(){function e(){var r={width:u.width/u.naturalWidth,height:u.height/u.naturalHeight},a={width:parseInt(window.getComputedStyle(u,null).getPropertyValue("padding-left"),10),height:parseInt(window.getComputedStyle(u,null).getPropertyValue("padding-top"),10)};i.forEach(function(e,t){var n=0;o[t].coords=e.split(",").map(function(e){var t=1==(n=1-n)?"width":"height";return a[t]+Math.floor(Number(e)*r[t])}).join(",")})}function t(e){return e.coords.replace(/ *, */g,",").replace(/ +/g,",")}function n(){clearTimeout(d),d=setTimeout(e,250)}function r(e){return document.querySelector('img[usemap="'+e+'"]')}var a=this,o=null,i=null,u=null,d=null;"function"!=typeof a._resize?(o=a.getElementsByTagName("area"),i=Array.prototype.map.call(o,t),u=r("#"+a.name)||r(a.name),a._resize=e,u.addEventListener("load",e,!1),window.addEventListener("focus",e,!1),window.addEventListener("resize",n,!1),window.addEventListener("readystatechange",e,!1),document.addEventListener("fullscreenchange",e,!1),u.width===u.naturalWidth&&u.height===u.naturalHeight||e()):a._resize()}function e(){function t(e){e&&(!function(e){if(!e.tagName)throw new TypeError("Object is not a valid DOM element");if("MAP"!==e.tagName.toUpperCase())throw new TypeError("Expected <MAP> tag, found <"+e.tagName+">.")}(e),r.call(e),n.push(e))}var n;return function(e){switch(n=[],typeof e){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(e||"map"),t);break;case"object":t(e);break;default:throw new TypeError("Unexpected data type ("+typeof e+").")}return n}}"function"==typeof define&&define.amd?define([],e):"object"==typeof module&&"object"==typeof module.exports?module.exports=e():window.imageMapResize=e(),"jQuery"in window&&(window.jQuery.fn.imageMapResize=function(){return this.filter("map").each(r).end()})}();

imageMapResize();

var tweakpicc = document.getElementById('tweakpic');
var timeoutt = document.getElementById('timeout');
var buttonsarrows = document.getElementsByClassName('buttonsarrows');
var button1 = document.getElementById('button1');
var button3 = document.getElementById('button3');
var versiontweak = document.getElementById('versiontweak');
var consoletext = document.getElementById('consoletext');
var count = 0;
var counthome = 0;
var countapps = 0;
var countstatus = 0;
var countlock = 0;
var count2 = 0;

function controlcentre() {
  enablebutton3();
  // button2.style.opacity = '0.3';
  // button2.style.pointerEvents = 'none';
  tweakpicc.src = '../images/merriam/controlcentremockup.png';
  consoletext.innerHTML = 'Control Centre';
}
function systemwide() {
  count +=1;
  enablebuttons();
  // button2.style.opacity = '0.3';
  // button2.style.pointerEvents = 'none';
  tweakpicc.src = '../images/merriam/systemwide1.png';
  consoletext.innerHTML = 'System Wide';
}
function homescreen() {
  counthome+=1;
  enablebuttons();
  // button2.style.opacity = '0.3';
  // button2.style.pointerEvents = 'none';
  tweakpicc.src = '../images/merriam/homescreen1.png';
  consoletext.innerHTML = 'Home Screen';
}
function apps() {
  countapps+=1;
  enablebuttons();
  // button2.style.opacity = '0.3';
  // button2.style.pointerEvents = 'none';
  tweakpicc.src = '../images/merriam/apps1.png';
  consoletext.innerHTML = 'Apps';
}
function statusbar() {
  countstatus+=1;
  enablebuttons();
  // button2.style.opacity = '0.3';
  // button2.style.pointerEvents = 'none';
  tweakpicc.src = '../images/merriam/status1.png';
  consoletext.innerHTML = 'Status bar';
}
function lockscreen() {
  countlock+=1;
  enablebuttons();
  // button2.style.opacity = '0.3';
  // button2.style.pointerEvents = 'none';
  tweakpicc.src = '../images/merriam/lockscreen1.png';
  consoletext.innerHTML = 'LockScreen';
}
function appswitcher() {
  enablebutton3();
  // button2.style.opacity = '0.3';
  // button2.style.pointerEvents = 'none';
  tweakpicc.src = '../images/merriam/appswitcher.png';
  consoletext.innerHTML = 'App Switcher';
}
function blurs() {
  enablebutton3();
  // button2.style.opacity = '0.3';
  // button2.style.pointerEvents = 'none';
  tweakpicc.src = '../images/merriam/blurs.png';
  consoletext.innerHTML = 'Blurs';
}
function tweaksettings() {
  enablebutton3();
  // button2.style.opacity = '0.3';
  // button2.style.pointerEvents = 'none';
  tweakpicc.src = '../images/merriam/tweaksettings.png';
  consoletext.innerHTML = 'Tweak Settings';
}

function leftbuttonclick() {
  count =0;
  counthome =0;
  countapps =0;
  countstatus =0;
  countlock =0;
  tweakpicc.src = '../images/merriam/merriamdarkmockup.png';
  button1.style.opacity = '0.3';
  button1.style.pointerEvents = 'none';
  // button2.style.opacity = '0.3';
  // button2.style.pointerEvents = 'none';
  button3.style.opacity = '0.3';
  button3.style.pointerEvents = 'none';
  consoletext.innerHTML = 'Home page';
}

function downbuttonclick() {

  count ++;
  if(count === 2) {
    tweakpic.src = '../images/merriam/systemwide2.png';
  }
  if(count === 3) {
    counthome-= 1;
    countapps-= 1;
    countstatus-= 1;
    countlock-= 1;
    tweakpic.src = '../images/merriam/systemwide3.png';
    count -= 2;
    button1.style.opacity = '0.3';
    button1.style.pointerEvents = 'none';
    // button2.style.opacity = '1';
    // button2.style.pointerEvents = 'auto';
  }

  counthome ++;
  if(counthome === 2) {
    button1.style.opacity = '0.3';
    button1.style.pointerEvents = 'none';
    tweakpic.src = '../images/merriam/homescreen2.png';
    counthome -=2;
  }

  countapps ++;
  if(countapps === 2) {
    tweakpic.src = '../images/merriam/apps2.png';
    countstatus-= 1;
    countlock-= 1;
  }
  if(countapps === 3) {
    tweakpic.src = '../images/merriam/apps3.png';
    countapps -= 2;
    button1.style.opacity = '0.3';
    button1.style.pointerEvents = 'none';
    // button2.style.opacity = '1';
    // button2.style.pointerEvents = 'auto';
  }

  countstatus ++;
  if(countstatus === 2) {
    button1.style.opacity = '0.3';
    button1.style.pointerEvents = 'none';
    tweakpic.src = '../images/merriam/status2.png';
    countstatus -=2;
  }

  countlock ++;
  if(countlock === 2) {
    button1.style.opacity = '0.3';
    button1.style.pointerEvents = 'none';
    tweakpic.src = '../images/merriam/lockscreen2.png';
    countlock -=2;
  }
}

function enablebuttons() {
  for (i = 0; i < buttonsarrows.length; i++) {
    buttonsarrows[i].style.opacity ='1';
    buttonsarrows[i].style.pointerEvents ='auto';
  }
}
function enablebutton3() {
  button3.style.opacity ='1';
  button3.style.pointerEvents ='auto';
}

function respring() {
  var respringvideo = document.getElementById('respringvideo');
  tweakpic.src = '../images/merriam/merriamrespring.png';
  respringvideo.style.display = 'block';
  respringvideo.play();
  consoletext.innerHTML = 'Respring';
  setTimeout(function(){
    respringvideo.style.display = 'none';
    tweakpic.src = '../images/merriam/merriamdarkmockup.png';
    consoletext.innerHTML = 'Home page';
  }, 3000);
}
