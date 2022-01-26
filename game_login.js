function addUser(){
    player1_name_ = document.getElementById("player1_name_input").value;
    player2_name_ = document.getElementById("player2_name_input").value;
    localStorage.setItem("player1_name_" , player1_name_);
    localStorage.setItem("player2_name_" , player2_name_);
    window.location= "game_page.html";
}