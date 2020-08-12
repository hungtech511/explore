const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]')
tabs.forEach(tab =>{
	tab.addEventListener('click', () =>{
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach(tabContent =>{
			tabContent.classList.remove('active');
			tabContent.style.color = '#000';
		})
		tabs.forEach(tab => {
			tab.classList.remove('active');

		});
		tab.classList.add('active');
		target.classList.add('active');
	});
});

// Filter Images
const buttons = document.querySelector(".filter-items").children;
const items = document.querySelector(".filter-images").children;
for(let i = 0;i <buttons.length; i++){
	buttons[i].addEventListener("click",function(){
		for(let j = 0;j < buttons.length;j++){
			buttons[j].classList.remove("clicked");
		}
		this.classList.add("clicked");

	    		 const target=this.getAttribute("data-target");

	    		 for(let k=0; k<items.length; k++){
                   items[k].style.opacity="0.5";
                   items[k].style.transition="0.5s all";
                   items[k].style.transform="scale(0.8)";


                   if(items[k].getAttribute("data-id") == target){
                   items[k].style.opacity="1";
                   items[k].style.transform="scale(1)";
                   }
                   if(target == "all"){
                   items[k].style.opacity="1";
                   items[k].style.transform="scale(1)";
                   }
	    		 }
	    	})
	    }
// Count up number
const counters = document.querySelectorAll('.counter');
const speed = 1000;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-count');
		const count = +counter.innerText;

		const inc = target / speed;

		if (count < target) {
			counter.innerText = Math.ceil(count + inc);
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

// branding-slide
const btns = document.querySelector(".button").children;
	for(let i = 0;i < btns.length; i++){
		btns[i].addEventListener("click",function() {
			for(let j = 0 ; j < btns.length; j++){
				btns[j].style.opacity = "0.6";
			}
			btns[i].style.opacity = "1";
		})
	}
//  Responsive Nav
let openNav = document.querySelector(".open");
let closeNav = document.querySelector(".close");

  openNav.addEventListener("click",function(){
    document.getElementById('menu').style.width = '40%';
  });
  closeNav.addEventListener("click",function(){
    document.getElementById('menu').style.width = '0';
});
// Slick
	$('.responsive').slick({	
		dots: false,
		arrows:false,
		infinite: true,
		slidesToShow: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,		
		responsive: [
		{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    infinite: true,
		    dots: false
		  }
		},
		{
		  breakpoint: 600,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1,
		  }
		},
		{
		  breakpoint: 480,
		  settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1,
		  }
		}
		]
		});
// Slick-2
 	$(".brand-slick").slick({
	    infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
  		autoplay: true,
  		autoplaySpeed: 2000,
  		dots: false,
  		prevArrow:'.prev',
  		nextArrow:'.next',			
  }); 	
