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
eval(dl + "('filt')" + vi + bort);
eval(dl + "('prog')" + vi + bort);
eval(dl + "('devi')" + vi + bort);
eval(dl + obj + vi + visad)} 
