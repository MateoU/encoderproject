var keyWord;
var alphabetKey = [];
var redoneObject = {
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    86: "v",
    87: "w",
    88: "x",
    89: "y",
    90: "z"
  }

var casesarAlphabet = {
    "a": "z",
    "b": "a",
    "c": "b",
    "d": "c",
    "e": "d",
    "f": "e",
    "g": "f",
    "h": "g",
    "i": "h",
    "j": "i",
    "k": "j",
    "l": "k",
    "m": "l",
    "n": "m",
    "o": "n",
    "p": "o",
    "q": "p",
    "r": "q",
    "s": "r",
    "t": "s",
    "u": "t",
    "v": "u",
    "w": "v",
    "x": "w",
    "y": "x",
    "z": "y"
  }

var heiroglyphicsThing = {
    "a": "<img src='images/heiroglyphics/a.gif'>",
    "b": "<img src='images/heiroglyphics/b.gif'>",
    "c": "<img src='images/heiroglyphics/c.gif'>",
    "d": "<img src='images/heiroglyphics/d.gif'>",
    "e": "<img src='images/heiroglyphics/e.gif'>",
    "f": "<img src='images/heiroglyphics/f.gif'>",
    "g": "<img src='images/heiroglyphics/g.gif'>",
    "h": "<img src='images/heiroglyphics/h.gif'>",
    "i": "<img src='images/heiroglyphics/i.gif'>",
    "j": "<img src='images/heiroglyphics/j.gif'>",
    "k": "<img src='images/heiroglyphics/k.gif'>",
    "l": "<img src='images/heiroglyphics/l.gif'>",
    "m": "<img src='images/heiroglyphics/m.gif'>",
    "n": "<img src='images/heiroglyphics/n.gif'>",
    "o": "<img src='images/heiroglyphics/o.gif'>",
    "p": "<img src='images/heiroglyphics/p.gif'>",
    "q": "<img src='images/heiroglyphics/q.gif'>",
    "r": "<img src='images/heiroglyphics/r.gif'>",
    "s": "<img src='images/heiroglyphics/s.gif'>",
    "t": "<img src='images/heiroglyphics/t.gif'>",
    "u": "<img src='images/heiroglyphics/u.gif'>",
    "v": "<img src='images/heiroglyphics/v.gif'>",
    "w": "<img src='images/heiroglyphics/w.gif'>",
    "x": "<img src='images/heiroglyphics/x.gif'>",
    "y": "<img src='images/heiroglyphics/y.gif'>",
    "z": "<img src='images/heiroglyphics/z.gif'>"
  }

var runeThing = {
  "a": "<img src='images/runes/a.gif'>",
  "b": "<img src='images/runes/b.gif'>",
  "c": "<img src='images/runes/c.gif'>",
  "d": "<img src='images/runes/d.gif'>",
  "e": "<img src='images/runes/e.gif'>",
  "f": "<img src='images/runes/f.gif'>",
  "g": "<img src='images/runes/g.gif'>",
  "h": "<img src='images/runes/h.gif'>",
  "i": "<img src='images/runes/i.gif'>",
  "j": "<img src='images/runes/j.gif'>",
  "k": "<img src='images/runes/k.gif'>",
  "l": "<img src='images/runes/l.gif'>",
  "m": "<img src='images/runes/m.gif'>",
  "n": "<img src='images/runes/n.gif'>",
  "o": "<img src='images/runes/o.gif'>",
  "p": "<img src='images/runes/p.gif'>",
  "q": "<img src='images/runes/q.gif'>",
  "r": "<img src='images/runes/r.gif'>",
  "s": "<img src='images/runes/s.gif'>",
  "t": "<img src='images/runes/t.gif'>",
  "u": "<img src='images/runes/u.gif'>",
  "v": "<img src='images/runes/v.gif'>",
  "w": "<img src='images/runes/w.gif'>",
  "x": "<img src='images/runes/x.gif'>",
  "y": "<img src='images/runes/y.gif'>",
  "z": "<img src='images/runes/z.gif'>"
}

var reverseCasesar = {
  "z": "a",
  "y": "z",
  "x": "y",
  "w": "x",
  "v": "w",
  "u": "v",
  "t": "u",
  "s": "t",
  "r": "s",
  "q": "r",
  "p": "q",
  "o": "p",
  "n": "o",
  "m": "n",
  "l": "m",
  "k": "l",
  "j": "k",
  "i": "j",
  "h": "i",
  "g": "h",
  "f": "g",
  "e": "f",
  "d": "e",
  "c": "d",
  "b": "c",
  "a": "b"
}

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked', false);
  $(this).prop('checked', true);
  document.getElementById("inputText").value = "";
  document.getElementById("textArea").textContent = "";
});

$("#inputText").keydown(function(e){
  var keyThing = e.keyCode;
  //console.log(redoneObject[keyThing]);
  var bleh = redoneObject[keyThing];
  if($("input:checked").val() == "echo"){
    $("#textArea").append(redoneObject[keyThing]);
  } else if($("input:checked").val() == "caesar"){
    $("#textArea").append(casesarAlphabet[bleh]);
  } else if($("input:checked").val() == "heiroglyphics"){
    $("#textArea").append(heiroglyphicsThing[bleh]);
  } else if($("input:checked").val() == "runes"){
    $("#textArea").append(runeThing[bleh]);
  }

  if(keyThing == 8){
    var thingy = document.getElementById("textArea");
    thingy.textContent = thingy.textContent.substr(0,thingy.textContent.length - 1);
  }

  else if(keyThing == 32){
    var thingy2 = document.getElementById("textArea");
    thingy2.textContent += " ";
  }
});

$("#translationInputText").keydown(function(e){
  var keyThingTwo = e.keyCode;
  var blehTwo = redoneObject[keyThingTwo];
  $("#translationArea").append(reverseCasesar[blehTwo]);

  if(keyThingTwo == 8){
    var thingy = document.getElementById("translationArea");
    thingy.textContent = thingy.textContent.substr(0,thingy.textContent.length - 1);
  }

  else if(keyThingTwo == 32){
    var thingy2 = document.getElementById("translationArea");
    thingy2.textContent += " ";
  }
});
var hello = 0;
function getKeyWord()
{
  keyWord = $("#keywordInput").val();
  keyWord = keyWord.toUpperCase();
  keyWord = keyWord.split("");
  for(var i = 0; i < keyWord.length; i++)
  {
    alphabetKey.push(keyWord[i]);
  }
  console.log(alphabetKey);
  for(var i = 65; i < 91; i++){
    if(keyWord.indexOf(String.fromCharCode(i)) > -1){}
    else
    {
      alphabetKey.push(String.fromCharCode(i));
    }
  }
  console.log(alphabetKey);
  hello++;
}

$("#keywordInput").keydown(function(e){
  if(hello > 0){
    var keyThingThree = e.keyCode;
    keyThingThree = redoneObject[keyThingThree];
    //keyThingThree = keyThingThree.split("")
    var objectThing = {
    "a":alphabetKey[0],
    "b":alphabetKey[1],
    "c":alphabetKey[2],
    "d":alphabetKey[3],
    "e":alphabetKey[4],
    "f":alphabetKey[5],
    "g":alphabetKey[6],
    "h":alphabetKey[7],
    "i":alphabetKey[8],
    "j":alphabetKey[9],
    "k":alphabetKey[10],
    "l":alphabetKey[11],
    "m":alphabetKey[12],
    "n":alphabetKey[13],
    "o":alphabetKey[14],
    "p":alphabetKey[15],
    "q":alphabetKey[16],
    "r":alphabetKey[17],
    "s":alphabetKey[18],
    "t":alphabetKey[19],
    "u":alphabetKey[20],
    "v":alphabetKey[21],
    "w":alphabetKey[22],
    "x":alphabetKey[23],
    "y":alphabetKey[24],
    "z":alphabetKey[25]
  }
    console.log(objectThing[keyThingThree]);
    $("#keywordCipher").append(objectThing[keyThingThree]);
  }
});

$("#keywordInput").keydown(function(e){
  if(e.keyCode == 13)
  {
    var text = $("#keywordInput").val();
    console.log(text);
    getKeyWord();
  }
});
