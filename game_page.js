player1_name_ = localStorage.getItem("player1_name_");
player2_name_= localStorage.getItem("player2_name_");
 player_1_score = 0;
 player_2_score = 0;
 document.getElementById("player1_name_").innerHTML= player1_name_ + ": ";
 document.getElementById("player2_name_").innerHTML= player2_name_ + ": ";
 document.getElementById("player_1_score").innerHTML= player_1_score;
 document.getElementById("player_2_score").innerHTML= player_2_score;
 document.getElementById("player_question").innerHTML= "Question Turn " +  player1_name_;
 document.getElementById("player_answer").innerHTML= "Answer Turn " +  player2_name_;
 function send(){
     get_word = document.getElementById("word").value;
     word= get_word.toLowerCase();
     console.log("word in lower case = " + word);
     charAt1 = word.charAt(1); 
     console.log(charAt1);
     length_divide_2 = Math.floor(word.length/2);
     charAt2 =  word.charAt(length_divide_2);
     console.log(charAt2);
     length_minus_1 = word.length -1;
     charAt3 = word.charAt(length_minus_1);
     console.log(charAt3);
     remove_CharAt1 = word.replace( charAt1 ,"_ ");
     remove_CharAt2 = remove_CharAt1.replace( charAt2 ,"- ");
     remove_CharAt3 = remove_CharAt2.replace( charAt3 ,"- ");
     console.log(remove_CharAt3);
     question_word = "<h4 id='word_display'> Q. "+remove_CharAt3+"</h4>"; 
     input_box = "<br>Answer : <input type='text' id='input_check_box'>"; 
     check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"; 
     row = question_word + input_box + check_button ; 
     document.getElementById("output").innerHTML = row; 
     document.getElementById("word").value = "";
 }
 question_turn = "player1";
 answer_turn =  "player2";
 function check(){
     get_answer= document.getElementById("input_check_box").value;
     answer= get_answer.toLowerCase();
     console.log("answer in lower case -" + answer);
     if (answer == word){
            if (answer_turn == "player1"){
                player_1_score= player_1_score + 1;
                document.getElementById("player_1_score").innerHTML = player_1_score;
            }
            else {
                player_2_score= player_2_score + 1;
                document.getElementById("player_2_score").innerHTML = player_2_score;
            }
     }
     if (question_turn == "player1"){
       question_turn =  "player2"  ;
       document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name_;
     }
     else {
        question_turn =  "player1"  ;
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name_;
      }
      if (answer_turn == "player1"){
        answer_turn =  "player2"  ;
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name_;
      }
      else {
         answer_turn =  "player1"  ;
         document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name_;
       }
       document.getElementById("output").innerHTML = "";
 }
 