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
	var total = 0.0;
    var str = "";
    if(lista != null)
    {
        
        str += `
        <thead class="cosHead">
            <tr class="cosHead">
                <th class="tabHead">IMAGINE</th>
                <th class="tabHead">PRODUS</th>
                <th class="tabHead">PRET</th>
                <th class="tabHead">CANTITATE</th>
            </tr>
        </thead>
        <tbody>
        `

        for(i=0; i<lista.length; i++) {
            if (lista[i]===null){continue;}
            total += parseFloat(lista[i].pret) * parseFloat(lista[i].cantitate);
            str +=`
            <tr id="tblRow">
                <td class="image_cos"><div class="image_cos" style="background-image:url(${lista[i].imagine}"></div></td>
                <td class="nume_cos"><div>&nbsp;${lista[i].nume}&nbsp;</div></td>
                <td class="pret_cos"><div>&nbsp;${parseFloat(lista[i].pret).toFixed(2)}</div></td>
                <td class="moneda_cos"><div>${lista[i].moneda}&nbsp;&nbsp;</div></td>
                <td><input id="campcantitate${i}" class="cantitate" type="number" value="${lista[i].cantitate}"/></td>
                <td><button id="mofica" onclick="modificaProdus(${i})">Modifica</button></td>
                <td><button id="add_rem" onclick="stergeProdus(${i})">Sterge</button></td>
            </tr>
            `
        }

        str += `
            <tr>
                <td>TOTAL</td>
                <td>${total.toFixed(2)}</td>
                <td>EUR</td>
            </tr>
        </tbody>
        `

        document.querySelector(".tabel_cumparaturi").innerHTML=str;
    }
}

function stergeProdus(index) {
    var cos = window.localStorage.getItem("cos");

    lista.splice(index, 1);

    window.localStorage.setItem("cos", JSON.stringify(lista));

    draw();
}


function modificaProdus(index) {
    if(document.getElementById("campcantitate" + index).value > 0) {
        var cos = window.localStorage.getItem("cos");

        lista[index].cantitate = String(document.getElementById("campcantitate" + index).value);

        window.localStorage.setItem("cos", JSON.stringify(lista));
    }

    draw();
}

//   localStorage.setItem("localStore", JSON.stringify(deleteItem(JSON.parse(localStorage.getItem("localStore")), '1461570048166')));
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