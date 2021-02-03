function send() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var email = document.getElementById("email").value;
    var textarea = document.getElementById("textarea").value;

    if (name != "" && surname != "" && email != "" && textarea != "") {
        window.location = "../index.html";
    } else {
        alert("Please don't let any field blank");
    }
}