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

    var test = Engine.play("A6");
    Engine.remove("A6");
    
    var nb = Engine.nb_couleurs();
    
    assertEquals(test, "yellow");
    assertEquals(nb, 35);
    
    
};

PalettoTestCase.prototype.testStory3 = function () {

    Engine.remove("A6");
    var nb = Engine.nb_couleurs();
    assertEquals(nb, 35);

};

PalettoTestCase.prototype.testStory4 = function () {
    Engine.change_player();
    
    Engine.play("A1");
    Engine.play("F6");
    
    Engine.remove("A1");
    Engine.remove("F6");

    var test = Engine.nb_couleurs();
    /*for(var i = 0; i<10; i++){
        console.log(Engine.tab_player1[i]);
    }

    for(var j = 0; j<10; j++){
        console.log(Engine.tab_player2[j]);
    }*/

    /*for(var i=0; i<6; i++){
        for(var j=0; j<6; j++){
            if(Engine.board[i][j] != null){
                console.log(Engine.board[i][j]);
            }
        }
    }*/
    
    var nb = Engine.nb_couleurs();

    assertEquals(nb, 33);

};
