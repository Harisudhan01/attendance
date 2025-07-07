var buttons = document.getElementsByClassName("pr");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    this.style.backgroundColor = "green";
  });
}
var button2=document.getElementsByClassName("ab");
for(var j=0;j< button2.length; j++){
    button2[j].addEventListener("click",function(){
        this.style.backgroundColor="red";
    });
}



function nextpage() {
  var selectedPage = document.getElementById("next").value;
  var selectedDate = document.querySelector('input[name="selectdate"]').value;

  if (selectedPage !== "") {
    if (selectedDate !== "") {
     
      window.location.href = selectedPage + "?selectdate=" + selectedDate;
    } else {
      alert("Please select a date!");
    }
  } else {
    alert("Please select a course!");
  }
}

var a = new URLSearchParams(window.location.search);
var c = a.get("selectdate");
if (c) {
    document.getElementById("dte").textContent = c;
}

