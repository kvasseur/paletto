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
        Engine.board[4] =["white", "green", "yellow", "black", "yellow", "green"];
        Engine.board[5] = ["yellow", "blue", "black", "red", "green", "black"];
            
        

        return Engine.board;
    },


    play:function () {

        Engine.tab_player1.push("yellow");

        return Engine.tab_player1[0];

    },

    remove:function () {
        
        var compteur = 0;
        
        Engine.board[5][0] = null;
        
        for(var i=0; i<6; i++){
            for(var j=0; j<6; j++){
                if(Engine.board[i][j] != null){
                    compteur++;
                }
            }
        }
        
        return compteur;
    }




};
