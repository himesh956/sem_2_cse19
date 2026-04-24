function checkChar() {

    let char = document.getElementById("char").value;

    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
        char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {

        document.getElementById("result").innerHTML = "It is a vowel";
    } else {
        document.getElementById("result").innerHTML = "It is a consonant";
    }
}