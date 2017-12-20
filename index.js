'use strict';

var SudokuSolving = require("sudoku-js/sudoku.js");
var p = require("sudoku-parser/sudoku-parser.js");

// read text files with puzzles / grids
p.SudokuFileParser.parseSudokuPuzzles();
var puzzles = p.SudokuFileParser.getPuzzlesArray();

// solve file each by each  
var allData = {}
puzzles.forEach(function(puzzle,index){
    let s = new SudokuSolving(puzzle);
    let solution = s.solve();

    allData[parseInt(index)] = {'grid':puzzle.join(""),'solution':solution}
})

// export all grids and solutions as json
exportPuzzlesToFile(allData);

function exportPuzzlesToFile(content){
    var fs = require('fs'),
    path = require('path'),   
    filePath = path.join(__dirname, "./data/export.json");

    fs.writeFileSync(filePath, JSON.stringify(content));
}