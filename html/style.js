$(document).ready(function(){
    window.addEventListener('message', function(event) {
        var data = event.data;
		if (data.show == false){
			if (data.posi == "bottom"){
		$("body").show();
        //$(".wave:after").css("top", (40-data.health) + "%");
   		soMany = 50-data.health;
		document.querySelectorAll('.wave')[0].style.setProperty("--top", `${soMany}%`);
		
		armorJS = 50 - data.armor
        document.querySelectorAll('.wave2')[0].style.setProperty("--top", `${armorJS}%`);
		
		foodJS = 50 - data.food
		document.querySelectorAll('.wave3')[0].style.setProperty("--top", `${foodJS}%`);
		
		waterJS = 50 - data.thirst
        document.querySelectorAll('.wave4')[0].style.setProperty("--top", `${waterJS}%`);
        
		oxyegnJS = 50 - data.oxygen
		document.querySelectorAll('.wave5')[0].style.setProperty("--top", `${oxyegnJS}%`);
        
		tensionJS = 50 - data.tension
		document.querySelectorAll('.wave6')[0].style.setProperty("--top", `${tensionJS}%`);
		}
		else
		{		$(".main").css("top", "15vh");
				$(".main").css("right", "5vw");
				$("body").show();
				soMany = 50-data.health;
				document.querySelectorAll('.wave')[0].style.setProperty("--top", `${soMany}%`);
				
				armorJS = 50 - data.armor
				document.querySelectorAll('.wave2')[0].style.setProperty("--top", `${armorJS}%`);
				
				foodJS = 50 - data.food
				document.querySelectorAll('.wave3')[0].style.setProperty("--top", `${foodJS}%`);
				
				waterJS = 50 - data.thirst
				document.querySelectorAll('.wave4')[0].style.setProperty("--top", `${waterJS}%`);
				
				oxyegnJS = 50 - data.oxygen
				document.querySelectorAll('.wave5')[0].style.setProperty("--top", `${oxyegnJS}%`);
				
				tensionJS = 50 - data.tension
				document.querySelectorAll('.wave6')[0].style.setProperty("--top", `${tensionJS}%`);
		}
		}
		else
		{
			 $("body").hide();
		}
    });
});