'use strict';

var Engine =  {

    current_player : 1,
    board:[],
    tab_player1 : [],
    tab_player2 : [],

    init_game:function () {

        Engine.board = [
            ["black", "green", "white", "blue", "red", "white"],
            ["yellow", "white", "green", "red", "yellow", "blue"],
            ["blue", "yellow", "blue", "white", "black", "red"],
            ["red", "black", "red", "green", "blue", "white"],
            ["white", "green", "yellow", "black", "yellow", "green"],
            ["yellow", "blue", "black", "red", "green", "black"]
        ]

        return Engine.board;
    },


    play:function () {

        Engine.tab_player1.push("yellow");

        return Engine.tab_player1[0];

    },

    /*remove:function () {
        var compteur = 0;
        Engine.board[5][0] = null;
        for(var i=0; i<7; i++){
            for(var j=0; j<7; j++){
                if(Engine.board[i][j] != null){
                    compteur++;
                }
            }
        }
        
        return compteur;
    }*/




};
