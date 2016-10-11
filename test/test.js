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

    var test = Engine.play();
    assertEquals(test, "yellow");

};

/*PalettoTestCase.prototype.testStory3 = function () {

    var test = Engine.play();
    assertEquals(test, "yellow");

};*/
