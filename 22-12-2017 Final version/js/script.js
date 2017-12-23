$(document).ready(function(){

	// mobile menu nav from left toogle
	$("#icon-bar").click(function(){
		if($(".nav-xs").css("left") != "0px"){
			$(".nav-xs").animate({left: "0px"},500);
			$("#icon-bar").attr("class","fa fa-arrow-left");
		}else{
			$(".nav-xs").animate({left: "-120%"},500);
			$("#icon-bar").attr("class","fa fa-bars");
		}
	});

	//open search input on click mainMenuItem > icon
	$(".mainMenuItem > i").click(function(){
		if($(".mainMenuItemItem").css("display") == "none"){
			$(".mainMenuItem > .fa-search").addClass("fa-times");
			$(".mainMenuItemItem").fadeIn();
		}else{
			$(".mainMenuItemItem").fadeOut();
			$(".mainMenuItem > .fa-search").removeClass("fa-times");
		}
	});

	//mobile menu nav lists accordion
	$(".mobileMenuLists > li").click(function(){
		$(this).parent().find(".active").removeClass("active");
		$(this).attr("class", "active");
		$(this).css("padding-bottom", "0px")
		if($(this).find("ul").css("display") == "none"){
			$(this).parent().find("li ul").hide(1);
			$(this).find("ul").show(1);
		}else{
			$(this).css({
				transition: "none",
				paddingBottom: "11px"
			})
			$(this).find("ul").hide(1);
		}
	});

	//if element is visible on screen return true
	function isScrolledIntoView(elem){
	    if($(window).width() > 481){
	    	var $elem = $(elem);
		    var $window = $(window);
		    var docViewTop = $window.scrollTop();
		    var docViewBottom = docViewTop + $window.height();

		    var elemTop = $elem.offset().top;
		    var elemBottom = elemTop + $elem.height();

		    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
		}else{
			return true;
		}
	}
	//counters section
	var likesCount = 0, calendarCount = 0, customersCount = 0, televisionCount = 0;
	var count = true;
	function countCounters(){
		if(count){
			if(isScrolledIntoView($("#counters"))){
				//count for like value procent
				var likeInterval = setInterval(function(){
					if(likesCount < 100){
						likesCount++;
						$(".likeCount").html(likesCount+"%");
					}else{
						clearInterval(likeInterval)
					}
				},10);
				// count for calendar value
				var calendarInterval = setInterval(function(){
					if(calendarCount < 10){
						calendarCount++;
						$(".calendarCount").html(calendarCount);
					}else{
						clearInterval(calendarInterval);
					}
				},100);
				// count for customer value
				var customersInterval = setInterval(function(){
					if(customersCount < 2954){
						customersCount+=11;
						$(".customersCount").html(customersCount);
					}else{
						clearInterval(customersInterval);
						$(".customersCount").html(2954);
					}
				},1);
				// count for television value
				var televisionInterval = setInterval(function(){
					if(televisionCount < 3597){
						televisionCount+=13;
						$(".televisionCount").html(televisionCount);
					}else{
						clearInterval(televisionInterval);
						$(".televisionCount").html(3597);
					}
				},1);
				count = false;
			}
		}
	}
	countCounters();


	//item slider section
	var test = true;
    function setItemCount(){
    	if(test){
    		$('.carousel-correspondence .item').each(function() {
	            var itemToClone = $(this);
	            var a;
	            if($(window).width() > 1183){
	            	a = 4;
	            }else{
	            	a = 3;
	            }
	            for (var i = 1; i < a; i++){
	                itemToClone = itemToClone.next();
	                if (!itemToClone.length) {
	                    itemToClone = $(this).siblings(':first');
	                }
	                itemToClone.children(':first-child').clone()
	                    .addClass("cloneditem-" + (i))
	                    .appendTo($(this));
	            }
	        });
    	}
    }
    setItemCount();
    $(window).on("resize", function(){
    	if(test){
    		setItemCount();
    		test = false;
    	}
    });

    //manufacturers slider section
    $(".brand-slider a").clone().appendTo(".brand-slider")
    $(".brand-slider").css("width", $(".brand-slider").children().length * 266);

    var slidePos = 0;

    $(".buttons-div button, .buttons-div-xs button").click(function(){
    	$(this).parent().find(".active").removeClass("active");
    	$(this).attr("class", "active");
    	
    	if($(this).parent().hasClass("buttons-div")){
    		var marginValue = 494 * $(this).attr("id");
    	}else if($(this).parent().hasClass("buttons-div-xs")){
    		var marginValue = 247 * $(this).attr("id");
    	}
    	if($(this).attr("id") > slidePos){
    		$(".brand-slider").animate({
	    		marginLeft: "-"+marginValue+"px"
	    	});
    	}else{
    		$(".brand-slider").animate({
	    		marginLeft: "-"+marginValue+"px"
	    	});
    	}
    	slidePos = $(this).attr("id");
    });

 	//owlCarousel section
    $(".owl-carousel-items .col-md-4").clone().appendTo(".owl-carousel-items")
    $(".owl-carousel-items").css("width", $(".owl-carousel-items").children().length * 300);

    var owlSlidePos = 0;

    $(".btns button").click(function(){
    	$(this).parent().find(".active").removeClass("active");
    	$(this).attr("class", "active");
    	
    	if($(this).parent().hasClass("btns")){
    		if($(document).width() < 992){
    			var owlMarginValue = 720 * $(this).attr("id");
    		}else{
    			var owlMarginValue = 600 * $(this).attr("id");
    		}
    		
    	}
    	if($(this).attr("id") > owlSlidePos){
    		$(".owl-carousel-items").animate({
	    		left: "-"+owlMarginValue+"px"
	    	});
    	}else{
    		$(".owl-carousel-items").animate({
	    		left: "-"+owlMarginValue+"px"
	    	});
    	}
    	owlSlidePos = $(this).attr("id");
    });
    //go up buttonu
	$("#goUp").click(function(){
		$('html, body').animate({scrollTop : 0},700);
	});
	function goUp(){
		//go up buttonu
		if($(this).scrollTop() > $("#counters").offset().top){
			$("#goUp").fadeIn(1000);
		}else{
			$("#goUp").fadeOut(1000);
		}
	}
	goUp();
	//on document scroll
	$(document).on("scroll resize", function(){
		//make desktop navbar fixed if scroll down over 192px
		if($(this).scrollTop() > 192){
			$(".menuNavBar").parent().css({
				position: "fixed",
				top: "0px",
				width: "100%",
				zIndex: "4"
			})
		}else{
			$(".menuNavBar").parent().css({
				position: "static"
			})
		}

		//make mobile navbar fixedon if scroll down over 192px
		if($(this).scrollTop() > 1){
			$(".mobileNavBarFix").css({
				position: "fixed",
				top: "0px",
				width: "100%",
				zIndex: "4"
			})
		}else{
			$(".mobileNavBarFix").css({
				position: "static"
			})
		}

		goUp();
		countCounters();

	});

});

//slider functions
var sliderItems = [];

function sliderItem(heading, text, targetUrl, img){
	this.heading = heading;
	this.text = text;
	this.targetUrl - targetUrl;
	this.img = img;
	sliderItems.push([heading,text,targetUrl,img])
}

var itemOne = new sliderItem("Customer Service <br> Is On Display All The Time!", "Service Center is ready to help with all your <br> appliance repair and service needs.", "#","images/home-slide-1-1920x600.jpg");
var itemTwo = new sliderItem("Customer Support <br> Is Not a Service, <br> It's an Attitude.","", "#","images/home-slide-2-1920x600.jpg");
var itemTwo = new sliderItem("Professional. Friendly. <br> Courteous.","Service Center is ready to help with all your <br>  appliance repair and service needs.", "#","images/home-slide-3-1920x600.jpg");

for(a=0; a<sliderItems.length; a++){
	var newBtn = document.createElement("button");
	if(a==0){
		newBtn.className = "active";
	}
	newBtn.id = a;
	newBtn.addEventListener("click", function(){
		$(".slider-btns .active").removeClass("active");
		this.className="active";
		indexNumber = this.id;
		$(".slider-content h1, .slider-content h3").animate({
			opacity:"0"
		},1);
		$(".slider-content").parent().find("img").animate({
			opacity:"0"
		},1);
		$(".slider-content h1").html(sliderItems[indexNumber][0]);
		$(".slider-content h3").html(sliderItems[indexNumber][1]);
		$(".slider-content a").attr("href", sliderItems[indexNumber][2]);
		$(".slider-content").parent().find("img").attr("src", sliderItems[indexNumber][3])
		$(".slider-content h1, .slider-content h3").animate({
			opacity:"1"
		},500);
		$(".slider-content").parent().find("img").animate({
			opacity:"1"
		},500);
	});
	$(".slider-btns").append(newBtn);
}