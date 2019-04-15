var load;

	function load() {
		load = setTimeout(showLoader, 70);
	}

	function showLoader() {
		document.getElementById("loader").style.display = "none";
	}


var lista = [];

function post(){
    lista = JSON.parse(window.localStorage.getItem("cos"));
    load();
    draw();
}

function draw(){
		
    var str = "";
    if(lista != null)
    {
        for(i=0; i<lista.length; i++){
            if (lista[i]===null){continue;}
            str+=`
            <ul style="text-align: center;">
                <li class="tabHead">IMAGINE</li>
                <li class="tabHead">PRODUS</li>
                <li class="tabHead">PRET</li>
                <li class="tabHead">CANTITATE</li>
            </ul>
            <tbody>
            <tr id="tblRow">
                <td class="image_cos"><div class="image_cos" style="background-image:url(${lista[i].imagine}"></div></td>
                <td class="nume_cos"><div>&nbsp;${lista[i].nume}&nbsp;</div></td>
                <td class="pret_cos"><div>&nbsp;${lista[i].pret.toFixed(2)}</div></td>
                <td class="moneda_cos"><div>${lista[i].moneda}&nbsp;&nbsp;</div></td>
                <td><input id="campcantitate" class="cantitate" type="number" value="${lista[i].cantitate}"/></td>
                <td><button id="add_rem" onclick="stergeProdus(${i})")>Sterge</button></td>
            </tr>
            <tr>
            <td>TOTAL</td>
            <td></td>
            <td>${lista[i].moneda}</td>
            </tr>
            </tbody>
            `
        }
        document.querySelector(".tabel_cumparaturi").innerHTML=str;
    }
}

function stergeProdus() {
    var cos = window.localStorage.getItem("cos");
  
    lista = [];
  
    lista = JSON.parse(cos);
  
    localStorage.removeItem({lista: document.getElementById("tblRow")});
    window.localStorage.setItem("cos", JSON.stringify(lista));
  }


/*
Lista produse:
GET /produse
Optional: GET /cos (pentru a afisa cate produse sunt in cos)

Detalii Produs:
GET /produse/idProdus
Optional: GET /cos (pentru a afisa cate produse sunt in cos)

Adaugare in cos:
GET /cos/idProdus/cantitate  ==> cantitatea curenta
PUT /cos/idProdus/

Lista cos:
GET /cos

Butonul cumpara:
DELETE /cos
FOR(var i in cos){
	GET /produse/${i}/stoc
	PUT /produse/${i}/stoc
}

Admin:
GET /produse

Admin Adaugare:
POST /produse

Admin editare:
PUT /produse/idProdus
Optional: GET /cos/idProdus/
Optional: PUT /cos/idProdus/

Admin stergere:
DELETE /produse/idProdus
DELETE /cos/idProdus/

*/