function drawing(){
		$('.changebox').on('mouseenter', function(){
		$(this).addClass('blue');
		console.log("Entered");
	});
}

function createCells(d){
	for (i = 0; i < d; i++){
	var cell = "<td></td>"
	$('tr').last().append(cell);
};
}
function createRows(){
	var row = "<tr></tr>";
	$('.container').append(row);

}

function loadGrid(d){
		for (n = 0; n < d; n++){
		createRows();
		createCells(d);
};
}


$(document).ready(function(){
	//console.log("Javascript!");
	var d = 16;

	loadGrid(d);

	$('td').addClass("changebox");
	$('td').css({"height": "30", "width": "30"});

	drawing();


	$('.shake').on('click', function(){
		$('tr').remove();
		 d = prompt("Enter new grid dimensions");
			
		 if (isNaN(d)){
		 	alert("Please enter a number!");
		 }
		 else {
		 var gd = 480 / d;
		 loadGrid(d);
		$('td').addClass("changebox");
		$('td').css({"height": gd, "width": gd});
		$('tr').css({"width": gd});
		drawing();
	}




		//maybe add shake animation
});

	$('button').click(function(){
		 
        $(".container").effect( "shake", {direction:'up'}, 1000 );
        $(".circle").effect( "shake", {direction:'up'}, 1000 );


		});

	
});

