dl="document.getElementById";ja="'block'";nej="'none'";
disp=".style.display=";obj = "(lager)";is=1;
visad="'visible'";bort="'hidden'";vi=".style.visibility=";

function skift(lager){
if (is==1){eval(dl + obj + disp + ja); is=2;}
else {eval(dl + obj + disp + nej); is=1;}}

function visa(lager){eval(dl + obj + disp + ja);}

function titta(lager){
eval(dl + "('general')" + vi + bort);
eval(dl + "('pres')" + vi + bort);
eval(dl + "('layo')" + vi + bort);
eval(dl + "('color')" + vi + bort);
eval(dl + "('filt')" + vi + bort);
eval(dl + "('prog')" + vi + bort);
eval(dl + "('devi')" + vi + bort);
eval(dl + obj + vi + visad)} 

// The cookie script below is based on Paul Snowden's work described on A List Apart
// <http://www.alistapart.com/stories/alternate/>
// Small modifications (no automatic cookie creation by onunload and a page reload) 
// by Magnus Stålnacke<http://w1.970.telia.com/~u97007522/>

function bytstil(title) {skift('cssbyt'); stilbyte(title); bakas(); setTimeout("laddaom()", 500)}


function stilbyte(title) {
var i, a, main;
for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
a.disabled = true;
if(a.getAttribute("title") == title) a.disabled = false;}}
}

function aktiv() {
var i, a;
for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");}
return null;}

function vald() {
var i, a;
for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title")) return a.getAttribute("title");}
return null;}

function baka(name,value,days) {
if (days) {var date = new Date(); date.setTime(date.getTime()+(days*24*60*60*1000)); var expires = "; expires="+date.toGMTString();}
else expires = "";document.cookie = name+"="+value+expires+"; path=/";}

function smaka(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);}
return null;}

window.onload = function(e) {
var cookie = smaka("GNOME-Commander");
var title = cookie ? cookie : aktiv();
stilbyte(title);}

function bakas() {
var title = aktiv();
baka("GNOME-Commander", title, 60);}

var cookie = smaka("GNOME-Commander");
var title = cookie ? cookie : vald();
stilbyte(title);

function laddaom(){document.location="index.html"}