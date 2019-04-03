	var load;

	function load() {
		load = setTimeout(showLoader, 100);
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
					draw();
			  })
		}
		
		function draw(){
		
			var str = "";
			for(let i in lista.produse){
                if (lista.produse[i]===null){continue;}
				str+=`
					<div class="col-lg-2 col-md-6 col-sm-8 col-xs-12">
						<div class="global col-xs-7">
							<a href="detalii.html?produse=${i}"><div class="image" style="background-image:url(${lista.produse[i].imagine})"></div></a>
							<a class="ref_nume" href="detalii.html?produse=${i}"><div class="nume">${lista.produse[i].nume}</div></a>
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

