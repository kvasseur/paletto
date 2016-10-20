'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

PalettoTestCase.prototype.testStory1 = function () {
    
    var tab = Engine.init_game();
    
    assertEquals(tab[0], ["black", "green", "white", "blue", "red", "white"]);
    assertEquals(tab[1], ["yellow", "white", "green", "red", "yellow", "blue"]);
    assertEquals(tab[2], ["blue", "yellow", "blue", "white", "black", "red"]);
    assertEquals(tab[3], ["red", "black", "red", "green", "blue", "white"]);
    assertEquals(tab[4],  ["white", "green", "yellow", "black", "yellow", "green"]);
    assertEquals(tab[5],  ["yellow", "blue", "black", "red", "green", "black"]);
    
};

PalettoTestCase.prototype.testStory2 = function () {

    var test = Engine.play(["A6"]);

    var nb = Engine.nb_colors();
    
    assertEquals(test, "yellow");
    assertEquals(nb, 35);

    
};

PalettoTestCase.prototype.testStory3 = function () {


    var nb = Engine.nb_colors();
    assertEquals(nb, 35);

};

PalettoTestCase.prototype.testStory4 = function () {

    Engine.play(["A1","F6"]);

    /*for(var i=0; i<6; i++){
        for(var j=0; j<6; j++){
            console.log(Engine.board[i][j]);
        }
    }*/

    var test = Engine.nb_colors();

    /*for(var i = 0; i<10; i++){
        console.log(Engine.tab_player1[i]);
    }

    for(var j = 0; j<Engine.tab_player2.length; j++){
        console.log(Engine.tab_player2[j]);
    }*/


    
    var nb = Engine.nb_colors();

    assertEquals(nb, 33);

};

PalettoTestCase.prototype.testStory5 = function () {
    
    Engine.board[0] = [null, null, null, "blue", "red", "white"];
    Engine.board[1] = [null, null, null, "red", "yellow", null];
    Engine.board[2] = [null, null, "blue", "white", "black", null];
    Engine.board[3] = ["red", "black", "red", null, null, null];
    Engine.board[4] = [null, "green", "yellow", null, null, null];
    Engine.board[5] = [null, null, "black", null, null, null];
    
    
    
    var test = Engine.play(["C3"]);
    
    assertEquals(test, "deconnection");

};

PalettoTestCase.prototype.testStory6 = function () {

    

    /*for(var i = 0; i<Engine.tab_player1.length; i++){
        console.log(Engine.tab_player1[i]);
    }*/

    /*var j = 0; j<Engine.tab_player2.length; j++){
        console.log(Engine.tab_player2[j]);
    }*/

    var test = Engine.game_story6();

    assertEquals(test, "le joueur 1 a gagné");


};

PalettoTestCase.prototype.testStory7 = function () {

    Engine.init_game();

    Engine.play(["A1", "F6"]);
    Engine.play(["A2", "A6"]);
    Engine.play(["A5", "F6"]);
    Engine.play(["E6", "B1","F5"]);
    Engine.play(["A3","F2"]);
    Engine.play(["C1", "F4"]);
    Engine.play(["E1", "D6","A4","F3"]);
    Engine.play(["D1", "B6"]);
    Engine.play(["E2", "E5"]);
    Engine.play(["C6", "D5","E3"]);
    Engine.play(["B5"]);
    Engine.play(["D2"]);
    Engine.play(["B2", "D3"]);
    Engine.play(["E4"]);
    Engine.play(["C5", "B3"]);
    Engine.play(["D4", "C2"]);
    Engine.play(["C3"]);
    Engine.play(["B4"]);
    Engine.play(["C4"]);

    /*for(var i = 0; i<Engine.tab_player1.length; i++){
        console.log(Engine.tab_player1[i]);
    }*/

    /*var j = 0; j<Engine.tab_player2.length; j++){
     console.log(Engine.tab_player2[j]);
     }*/


    var test = Engine.game_story7();

    assertEquals(test, 36);


};

