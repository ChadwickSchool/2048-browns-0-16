var grid = [];
var UP_ARROW = '38';
var DOWN_ARROW = '40';
var LEFT_ARROW = '37';
var RIGHT_ARROW = '39';
var R_KEY = '82';


//As soon as webpage loads run these two functions
$(document).ready(function(){
	setUpBoard();
	printBoard();
	console.log("Loaded webpage"); //how you do print statements in javascript
});

function setUpBoard(){

	// initialize board to have no values
	for(var i=0; i<4; i++){
		var innergrid = [];
		for(var j=0; j<4; j++){
			innergrid.push("x");
		}
		grid.push(innergrid);
	}

	addTile();

}

function clearBoard(){
	for(var r=0; r < grid.length; r++)
	{
			for(var c=0; c<grid[r].length; c++)
			{
							grid[r][c] = "x";
			}
	}
	addTile();
}




function addTile() {
		var x = Math.round(Math.random()*3);
		var y = Math.round(Math.random()*3);
		while(grid[x][y] !== "x")
		{
			x = Math.round(Math.random()*3);
			y = Math.round(Math.random()*3);
		}

			console.log("x " + x + " y " + y );
			if(Math.random() <= .8)
			{
				grid[x][y] = "2";
			}
			else
			{
				grid[x][y] = "4";
			}
}


function printBoard(){
	var board = '<br/>' + "*--------------*" + '<br/>';
	for(var i=0; i<grid.length; i++){
		board += "|   ";
		for(var j=0; j<grid[i].length; j++){
			board += grid[i][j] + "   |   ";
		}
		board += '<br/>';
		board += "*--------------*";
		board += '<br/>';
	}

	//console.log(board);
	document.getElementById("container").innerHTML = board;
}


//function gets called anytime  a key is pressed
//e is a special variable
// that references the event obeject that reads if the user is interacting with
//the window
document.onkeydown = function(e) {

    //makes it work in internet explorer which uses window.event and not e
    e = e || window.event;

    //keyCode is actually a character value which we convert to a String
    //to use triple equals sign
		if(e.keyCode == R_KEY){
			clearBoard();
		}
    if (e.keyCode == UP_ARROW) {
        // up arrow
				console.log("Pressed up")
				for(var i=0; i < 3; i++)
				{
					moveTilesUp();
				}
				for(var i=0; i < grid.length; i++)
				{
					combineTilesUp();
				}
				addTile();

    }
    //double equals sign will convert it for us
    else if (e.keyCode == DOWN_ARROW) {
        // down arrow
				console.log("Pressed down");
				for(var i=0; i < 3; i++)
				{
					moveTilesDown();
				}
				for(var i=0; i < grid.length; i++)
				{
					combineTilesDown();
				}
				addTile();

    }
    else if (e.keyCode == LEFT_ARROW) {
       // left arrow
       console.log("Pressed left");
			 for(var i=0; i < 3; i++)
			 {
				 moveTilesLeft();
			 }
			 for(var i=0; i < grid.length; i++)
			 {
				 combineTilesLeft();
			 }
			 addTile();

    }
    else if (e.keyCode == RIGHT_ARROW) {
       // right arrow
       console.log("Pressed right");
			 for(var i=0; i < 3; i++)
			 {
				 moveTilesRight();
			 }
			 for(var i=0; i < grid.length; i++)
			 {
				 combineTilesRight();
			 }
			 addTile();
    }
    printBoard(); //have to recall print board to get the board to update
};

function moveTilesUp()
{

    for(var r=0; r < grid.length; r++)
    {
        for(var c=0; c<grid[r].length; c++)
        {
            if(r !== 0  && grid[r][c] !== "x" && grid[r-1][c] === "x")
            {
                grid[r-1][c] = grid[r][c];
                grid[r][c] = "x";
            }

        }

    }

}

function moveTilesDown()
{
	for(var r=3; r >= 0; r--)
	{

		for(var c=0; c<grid[r].length; c++)
		{
			if(r !== 3 && grid[r][c] !== "x" && grid[r+1][c] === "x")
			{
				grid[r+1][c] = grid[r][c];
				grid[r][c] = "x";
			}
		}
	}
}

function moveTilesRight()
{
	for(var c=3; c >= 0; c--)
	{
		for(var r=0; r<grid[c].length; r++)
		{
			if(c !== 3 && grid[r][c] !== "x" && grid[r][c+1] === "x")
			{
				grid[r][c+1] = grid[r][c];
				grid[r][c] = "x"
			}
		}
	}
}

function moveTilesLeft()
{
	for(var c=0; c < grid.length; c++)
	{
		for(var r=0; r<grid[c].length; r++)
		{
			if(c !== 0 && grid[r][c] !== "x" && grid[r][c-1] === "x")
			{
				grid[r][c-1] = grid[r][c];
				grid[r][c] = "x"
			}
		}
	}
}

function combineTilesUp()
{
	for(var r=0; r < grid.length; r++)
	{
			for(var c=0; c<grid[r].length; c++)
			{
				if(r !== 0 && grid[r][c] !== "x" && grid [r][c] === grid[r-1][c] )
				{
					var tileTotal = parseInt(grid[r-1][c]) + parseInt(grid[r][c]);
					grid[r-1][c] = tileTotal + "";
					grid[r][c] = "x";
			}
		}
	}
}

function combineTilesDown()
{
	for(var r=3; r >= 0; r--)
	{

		for(var c=0; c<grid[r].length; c++)
		{
			if(r !== 3 && grid[r][c] !== "x" && grid [r][c] === grid[r+1][c] )
			{
				var tileTotal = parseInt(grid[r+1][c]) + parseInt(grid[r][c]);
				grid[r+1][c] = tileTotal + "";
				grid[r][c] = "x";
		}
	}
}
}
function combineTilesRight()
{
	for(var c=3; c >= 0; c--)
	{
		for(var r=0; r<grid[c].length; r++)
		{
			if(c !== 3 && grid[r][c] !== "x" && grid[r][c+1] === grid[r][c] )
			{
				var tileTotal = parseInt(grid[r][c+1]) + parseInt(grid[r][c]);
				grid[r][c+1] = tileTotal + "";
				grid[r][c] = "x";
					}
				}
			}
		}
function combineTilesLeft()
{
	for(var c=0; c < grid.length; c++)
	{
		for(var r=0; r<grid[c].length; r++)
		{
			if(c !== 0 && grid[r][c] !== "x" && grid[r][c] === grid[r][c-1] )
			{
				var tileTotal = parseInt(grid[r][c-1]) + parseInt(grid[r][c]);
				grid[r][c-1] = tileTotal + "";
				grid[r][c] = "x";
			}
		}
	}
}
