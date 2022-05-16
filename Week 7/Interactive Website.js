// Changing the colour one of the text which made up the body of the website
function change_text(){
  let element = document.getElementById("paragraph_1");

  if (element.style.color == "red"){
  element.style.color = "black";
  } else {
  element.style.color = "red";
  }
}

// Changing the background colour of the website
function change_background(){
  if (document.body.style.backgroundColor == "purple") {
  document.body.style.backgroundColor = "#FFFFFF";
  } else {
  document.body.style.backgroundColor = "purple";
  }
}

// Displaying the interactiveness of the website through the submission of form
function change_text(){}
function change_background(){}
function submit_form(){
  let fname = document.getElementById("fname");
  let surname = document.getElementById("sname");
  let title = documet.getElementById("title");
  let content = document.getElementById("content");
  window.alert(`Hello" ${fname.value} ${surname.value}. The ${"title"} of your blog was really nice`);
}

// Reading a file to the webpage using the body <onload = "myFunction()">
function pickAndReadFile(callback) {
    var el = document.createElement('input');
    el.setAttribute('type', 'file');
    el.style.display = 'none';
    document.body.appendChild(el);
    el.onchange = function (){
        const reader = new FileReader();
        reader.onload = function () {
            callback(reader.result);
            document.body.removeChild(el);
        };
        reader.readAsBinaryString(el.files[0]);
    }
    el.click();
}
