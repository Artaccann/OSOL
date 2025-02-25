const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." +
             "Curabitur ac nunc et justo cursus gravida." 
             "Aenean imperdiet, odio in eleifend cursus, odio orci volutpat lectus," +
             "nec auctor nunc tortor nec purus.";

let index = 0;
function typeText() {
    if(index < text.length) {
        output.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 50);
    }
}
typeText();