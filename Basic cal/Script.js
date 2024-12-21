console.log("Script loaded");
let string = "";
let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((item) => {
  item.addEventListener('click', (e) => {
    // Logging the clicked button's text
    
    if(e.target.innerHTML=='='){
        string=eval(string)
        document.querySelector('input').value=string
    }else if(e.target.innerHTML=='C'){

    // Appending the clicked number to the string
    string=" ";

    document.querySelector('input').value=string
    }else{
        string += e.target.textContent;

        document.querySelector('input').value=string
    }
  });
});

// exp
