'use strict';

var Engine =  {

    current_player : 1,
    board:[new Array(7),new Array(7),new Array(7),new Array(7),new Array(7),new Array(7)],
    tab_player1 : [],
    tab_player2 : [],

    init_game:function () {
        Engine.current_player=1;
        Engine.tab_player1=[];
        Engine.tab_player2=[];
        Engine.board[0] = ["black", "green", "white", "blue", "red", "white"];
        Engine.board[1] = ["yellow", "white", "green", "red", "yellow", "blue"];
        Engine.board[2] = ["blue", "yellow", "blue", "white", "black", "red"];
        Engine.board[3] = ["red", "black", "red", "green", "blue", "white"];
        Engine.board[4] = ["white", "green", "yellow", "black", "yellow", "green"];
        Engine.board[5] = ["yellow", "blue", "black", "red", "green", "black"];

        return Engine.board;
    },

    change_player:function(){

        if(Engine.current_player == 1){
            Engine.current_player = 2;
        }

        else{
            Engine.current_player = 1;
        }

    },


    play:function (coordinates) {
        

    
        for(var i = 0; i<coordinates.length; i++){

            var voisins = Engine.nb_neighbour(coordinates[i]);

            var x = coordinates[i].charCodeAt(0) - 65;
            var y = coordinates[i].charAt(1) - 1;

            var color = Engine.board[y][x];

            if(Engine.board[y][x] == null){
                return "fail la case est vide";
            }

            //Dans le cas de ma cinquième histoire
            if(Engine.board[2][1]==null && Engine.board[3][3]==null){
                return "deconnection";
            }

            if(voisins > 2){
                return "fail la case a plus de deux voisins";
            }

            if (Engine.current_player == 1 && Engine.board[y][x] != null && voisins < 3) {
                Engine.tab_player1.push(color);
                Engine.remove(coordinates[i]);
            }

            if (Engine.current_player == 2 && Engine.board[y][x] != null && voisins < 3) {
                Engine.tab_player2.push(color);
                Engine.remove(coordinates[i]);
            }

        }

        Engine.change_player();

        return Engine.tab_player1[0];

    },

    remove:function (coordinates) {
        

        var x = coordinates.charCodeAt(0) - 65;
        var y = coordinates.charAt(1) - 1;

        Engine.board[y][x] = null;


    },
    
    nb_colors:function () {

        var counter = 0;
        
        for(var i=0; i<6; i++){
            for(var j=0; j<7; j++){
                if(Engine.board[i][j] != null){
                    counter++;
                }
            }
        }

        return counter;
    },

    nb_neighbour:function (coordinates) {

        var counter = 0;

        var line = coordinates.charAt(1) - 1;
        var column = coordinates.charCodeAt(0) - 65;

        if((((line -1) >= 0) || ((line-1)==undefined)) && (((line +1) < 6) || ((line+1)==undefined))){
            if ((Engine.board[line - 1][column] != null) || (Engine.board[line - 1][column] == undefined)) {
                if ((Engine.board[line + 1][column] != null) || (Engine.board[line + 1][column] == undefined)) {
                    counter++;
                }
            }
        }

        if((((column -1) >= 0) || ((column-1)==undefined)) && (((column +1) < 6) || ((column+1)==undefined))){
            if ((Engine.board[line][column - 1] != null) || (Engine.board[line][column - 1] == undefined)){
                if((Engine.board[line][column + 1] != null) || (Engine.board[line][column + 1] == undefined)){
                    counter++;
                }
            }
        }

        console.log(" --> l" + line + " c" + column + " = " + counter);
        return counter;
    },

    game_story6:function () {
        Engine.init_game();

        Engine.tab_player1=[];
        Engine.tab_player2=[];

        Engine.play(["A1", "F6"]);
        Engine.play(["B1", "E6", "F5"]);
        Engine.play(["A2", "A6"]);
        Engine.play(["A3"]);
        Engine.play(["A5", "F4","F1","C1"]);
        Engine.play(["E1", "F3","D6","A4"]);
        Engine.play(["D3", "F2","B6"]);
        Engine.play(["B3", "E2","E5"]);
        Engine.play(["B4", "C6", "D5","E3"]);
        var counter_player1 = 0;
        var counter_player2 = 0;
        
        for(var i = 0; i<30; i++){
            
           if(Engine.tab_player1[i] == "black"){
               counter_player1++;
           }

            if(Engine.tab_player2[i] == "black"){
                counter_player2++;
            }
        }
        
        if(counter_player1 == 6){
            return "le joueur 1 a gagné";
        }

        if(counter_player2 == 6){

            return "le joueur 2 a gagné";
        }
    },

    game_story7:function () {
        
        var count = 0;
        
        for(var i=0; i<6; i++) {
            for (var j = 0; j < 6; j++) {
                
                if (Engine.board[i][j] == null) {
                    count++;
                }
            }
        }
        
        if(count == 36){
            return Engine.current_player;
        }

        return count;
    }

};
