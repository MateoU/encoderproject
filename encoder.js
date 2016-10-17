
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

  $("input[type='radio']").click(function(){
    $("input:checked").prop('checked', false);
    $(this).prop('checked', true);
    document.getElementById("inputText").value = "";
    document.getElementById("textArea").textContent = "";
  });

  $("#inputText").keydown(function(e){
    var keyThing = e.keyCode;
    console.log(redoneObject[keyThing]);
    var bleh = redoneObject[keyThing];
    if($("input:checked").val() == "echo"){
      //console.log(redoneObject[keyThing]);
      $("#textArea").append(redoneObject[keyThing]);
    } else if($("input:checked").val() == "caesar"){
      $("#textArea").append(casesarAlphabet[bleh]);
    } else if($("input:checked").val() == "heiroglyphics"){
      $("#textArea").append(heiroglyphicsThing[bleh]);
    }
  });
