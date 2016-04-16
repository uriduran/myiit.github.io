var closedmen = '<img id= "threebar" alt="Menu" src="http://i.imgur.com/kAXCJ8s.png">'
var openmen = '<img id= "threebarc" alt="Menu" src="http://i.imgur.com/ex7Hcuq.png?2">'


//Function to change the top menu icon to show whether icon is open or closed.
$(document).ready(function(){
		$count=1;
		$('#menulink').click(function(){
			if($count%2!=0)
			{
			$('#menu').animate({"marginLeft":"0px"},300,function(){
				$('#menulink').html(openmen);
			});
			
			$count++;
			}
			else
			{
			$('#menu').animate({"marginLeft":"-200px"},300,function(){
			$('#menulink').html(closedmen);
			});
			
			$count++;
			}
		});
        
       
        
   
  $('#menu li:has("ul")').children('ul').hide(); //hide submenu
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
