
//Creating variables with the two different images to insert when clicked.
var closedmen = '<img id= "threebar" alt="Menu" src="http://i.imgur.com/kAXCJ8s.png">'
var openmen = '<img id= "threebarc" alt="Menu" src="http://i.imgur.com/ex7Hcuq.png?2">'
//Function to change the top menu icon to show whether icon is open or closed.
$(document).ready(function(){
		$count=1;
		$('#menulink').click(function(){
			if($count%2!=0)
			{
			$('#menu').animate({"marginLeft":"0px"},300,function(){ //opens up the side bar menu
				$('#menulink').html(openmen); //injects html with image to indicate menu opened.
			});
			$count++;
			}
			else
			{
			$('#menu').animate({"marginLeft":"-200px"},300,function(){ //closes the side bar menu
			$('#menulink').html(closedmen); //injects html with image to indicate menu closed
			});
			
			$count++;
			}
		});
$('#menu li:has("ul")').children('ul').hide(); //Hide submenu when a submenu item is clicked
$('#button').toggle(
function () {
    $('#right').animate({
        left: 150
    });
},
function () {
    $('#right').animate({
        left: 0
    });
});
$('#menu li:has("ul")').click(function(){ 
    $(this).children('ul').slideToggle(); //toggle submenu
});

});
