const button = document.querySelector(".button_wrapper");
button.addEventListener("click",compute)
function compute(e) 
{
const FREQ = document.querySelector(".Freq");
const DECAY = document.querySelector(".Decay");
const SUSTAIN = document.querySelector(".Sustain");
const RELEASE = document.querySelector(".Release");
const ATTACK = document.querySelector(".Attack");
const NOTE = document.getElementById("noteselector");
const VOICE = document.getElementById("Voices");
const WAVE = document.getElementById("Swave");
//const NOTE = document.getElementById("noteselector");
//const NOTE = document.getElementById("noteselector");
var command = "";
var Language = "BASIC";
var startregel = 10;
let attack = ATTACK.value;
let sustain = SUSTAIN.value;
let decay = DECAY.value;
let release = RELEASE.value;
var highbyte =0;
var lowbyte=0;
console.log()


if (sustain > 240) {alert("ERROR SUSTAIN GREATER THAN 240");}
if (release > 15) {alert("ERROR RELEASE GREATER THAN 15");}

switch(parseInt(NOTE.value)) {
    case 0: highbyte =1; lowbyte=12;break;
    case 1: highbyte =1; lowbyte=28;break;
    case 2: highbyte =1; lowbyte=45;break;
    case 3: highbyte =1; lowbyte=62;break;
    case 4: highbyte =1; lowbyte=81;break;
    case 5: highbyte =1; lowbyte=102;break;
    case 6: highbyte =1; lowbyte=123;break;
    case 7: highbyte =1; lowbyte=145;break;
    case 8: highbyte =1; lowbyte=169;break;
    case 9: highbyte =1; lowbyte=195;break;
    case 10: highbyte =1; lowbyte=221;break;
    case 11: highbyte =1; lowbyte=250;break;
    case 12: highbyte =1; lowbyte=0;break;
    case 13: highbyte =1; lowbyte=0;break;
    case 14: highbyte =1; lowbyte=0;break;
    case 15: highbyte =1; lowbyte=0;break;
    case 16: highbyte =2; lowbyte=24;break;
    case 17: highbyte =2; lowbyte=56;break;
    case 18: highbyte =2; lowbyte=90;break;
    case 19: highbyte =2; lowbyte=125;break;
    case 20: highbyte =2; lowbyte=163;break;
    case 21: highbyte =2; lowbyte=204;break;
    case 22: highbyte =2; lowbyte=246;break;
    case 23: highbyte =3; lowbyte=35;break;
    case 24: highbyte =3; lowbyte=83;break;
    case 25: highbyte =3; lowbyte=134;break;
    case 26: highbyte =3; lowbyte=187;break;
    case 27: highbyte =3; lowbyte=244;break;
    case 28: highbyte =3; lowbyte=0;break;
    case 29: highbyte =3; lowbyte=112;break;
    case 30: highbyte =3; lowbyte=180;break;
    case 31: highbyte =3; lowbyte=251;break;
    case 32: highbyte =4; lowbyte=48;break;
    case 33: highbyte =4; lowbyte=112;break;
    case 34: highbyte =4; lowbyte=180;break;
    case 35: highbyte =4; lowbyte=251;break;
    case 36: highbyte =5; lowbyte=71;break;
    case 37: highbyte =5; lowbyte=152;break;
    case 38: highbyte =5; lowbyte=237;break;
    case 39: highbyte =6; lowbyte=71;break;
    case 40: highbyte =6; lowbyte=167;break;
    case 41: highbyte =7; lowbyte=12;break;
    case 42: highbyte =7; lowbyte=119;break;
    case 43: highbyte =7; lowbyte=233;break;
    case 44: highbyte =0; lowbyte=0;break;
    case 45: highbyte =0; lowbyte=0;break;
    case 46: highbyte =0; lowbyte=0;break;
    case 47: highbyte =0; lowbyte=0;break;
    case 48: highbyte =8; lowbyte=97;break;
    case 49: highbyte =8; lowbyte=225;break;
    case 50: highbyte =9; lowbyte=104;break;
    case 51: highbyte =9; lowbyte=247;break;
    case 52: highbyte =10; lowbyte=143;break;
    case 53: highbyte =11; lowbyte=48;break;
    case 54: highbyte =11; lowbyte=218;break;
    case 55: highbyte =12; lowbyte=143;break;
    case 56: highbyte =13; lowbyte=78;break;
    case 57: highbyte =14; lowbyte=24;break;
    case 58: highbyte =14; lowbyte=239;break;
    case 59: highbyte =15; lowbyte=210;break;
    case 60: highbyte =0; lowbyte=195;break;
    case 61: highbyte =0; lowbyte=0;break;
    case 62: highbyte =0; lowbyte=0;break;
    case 63: highbyte =0; lowbyte=0;break;
    case 64: highbyte =16; lowbyte=195;break;
    case 65: highbyte =17; lowbyte=195;break;
    case 66: highbyte =18; lowbyte=209;break;
    case 67: highbyte =19; lowbyte=239;break;
    case 68: highbyte =21; lowbyte=31;break;
    case 69: highbyte =22; lowbyte=96;break;
    case 70: highbyte =23; lowbyte=181;break;
    case 71: highbyte =25; lowbyte=30;break;
    case 72: highbyte =26; lowbyte=156;break;
    case 73: highbyte =28; lowbyte=49;break;
    case 74: highbyte =29; lowbyte=223;break;
    case 75: highbyte =31; lowbyte=165;break;
    case 76: highbyte =33; lowbyte=0;break;
    case 77: highbyte =35; lowbyte=0;break;
    case 78: highbyte =0; lowbyte=0;break;
    case 79: highbyte =0; lowbyte=0;break;
    case 80: highbyte =33; lowbyte=135;break;
    case 81: highbyte =35; lowbyte=134;break;
}



  if (Language == "BASIC") {
  command += (startregel + " poke 54296,15 \n");
  startregel +=10;
if (VOICE.value == "Voice1") 
{
  command += (startregel + " poke 54276," + VOICE.value + "\n");
  startregel +=10;
  command += (startregel + " poke 54296,15 \n");
  startregel +=10;
  command += (startregel + " poke 54296,15 \n");
  startregel +=10;
  command += (startregel + " poke 54296,15 \n");







}




alert(command);
  }










  }

































