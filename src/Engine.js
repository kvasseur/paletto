'use strict';

var Engine =  {

    current_player : 1,
    board:[new Array(7),new Array(7),new Array(7),new Array(7),new Array(7),new Array(7)],
    tab_player1 : [],
    tab_player2 : [],

    init_game:function () {

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
        

        var x = coordinates.charCodeAt(0) - 65;
        var y = coordinates.charAt(1) - 1;

        var couleur = Engine.board[y][x];

        if(Engine.current_player == 1 && Engine.board[y][x]!= null) {

            Engine.tab_player1.push(couleur);
            

        }

        if(Engine.current_player == 2 && Engine.board[y][x]!= null) {

            Engine.tab_player2.push(couleur);
            
        }
        

        return Engine.tab_player1[0];

    },

    remove:function (coordinates) {
        

        var x = coordinates.charCodeAt(0) - 65;
        var y = coordinates.charAt(1) - 1;
        
        Engine.board[y][x] = null;
        
        
    },
    
    nb_couleurs:function () {
        var compteur = 0;
        
        for(var i=0; i<6; i++){
            for(var j=0; j<7; j++){
                if(Engine.board[i][j] != null){
                    compteur++;
                }
            }
        }

        return compteur;
    }






};
