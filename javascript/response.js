function submit() {
    var myText = document.getElementById("submit");
    let userResponse = document.querySelector("#userResponse");
    let usersText = document.querySelector("#usersText");

    usersText.innerHTML = "You betweeted: " + userResponse.value;
}
