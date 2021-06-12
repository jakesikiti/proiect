	var load;

	function load() {
		load = setTimeout(showLoader, 70);
	}

	function showLoader() {
		document.getElementById("loader").style.display = "none";
	}

	var lista=[
		];
		function get(){
			
			fetch('https://magazin-c1a8a.firebaseio.com/.json')
			  .then(response => response.json())
			  .then(data => {
					lista=data;
					load();
					showSlides();
					draw();
			  })
		}
		
		function draw(){
		
			var str = "";
			for(let i in lista.produse){
                if (lista.produse[i]===null){continue;}
				str+=`
					<div class="col-xl-2 col-lg-3 col-md-4 col-sm-8 col-xs-12">
						<div class="global col-xs-7">
							<a href="detalii.html?produse=${i}"><div class="image" style="background-image:url(${lista.produse[i].imagine})"></div></a>
							<div class="nume">${lista.produse[i].nume}</div>
							<div class="pret_buton"><span class="pret">${lista.produse[i].pret.toFixed(2)}</span>
								<span class="moneda">${lista.produse[i].moneda}</span>
															
								<a href="detalii.html?produse=${i}" class="buton_detalii">Detalii</a>
							</div>	
						</div>
					</div>
				`
			}
			document.querySelector(".tobe").innerHTML=str;
		}

// Slide function.

	var slideIndex = 0;

		function showSlides() {
		  var slides = document.getElementsByClassName("slide");
		  var dots = document.getElementsByClassName("dot");
		  for (var i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"; 
			dots[i].style.display = "inline-block";
			
		  }
		  slideIndex++;
		  if (slideIndex > slides.length) {slideIndex = 1}    
		  for (var i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		  }
		  slides[slideIndex-1].style.display = "block";  
		  dots[slideIndex-1].className += " active";
		  setTimeout(showSlides, 3500);
		}

		
