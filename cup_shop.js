
openModalPerson.onclick = function () {
	openModalPerson.style.display = "none";
}

/**  ФУНКЦІЯ  ПЕРЕВІРКИ  КОРИСТУВАЧА  (ФОРМА  1)**/
var userCount = 0;
var userArray = [];

var Valid = [];
var Regest = [];

document.getElementById("identif").onclick = addUser; //авторизація
document.getElementById("butreg").onclick = addPerson; //реєстрація



/* ФУНКЦИЯ ДОБАВЛЕНИЯ ПОЛЬЗОАВАТЕЛЕЙ  */
function addUser() {
	var name = document.getElementsByName("name")[0];
	var surname = document.getElementsByName("surname")[0];
	var email = document.getElementsByName("mail")[0];
	var pass = document.getElementsByName("pass")[0];


	var okName = validateName(name.value);
	var okSurname = validateSurname(surname.value);
	var okEmail = validateEmail(email.value);
	var okPass = validatePass(pass.value);


	if (okName && okSurname && okEmail && okPass) {
		newUser = new user(name.value, surname.value, email.value, pass.value, userCount);

		var user0 = newUser.arrUser();
		var userView = joinDate(user0);
		console.log(userView);
		userArray.push(userView);
		userArray[userCount] = userView;
		userStorage.userss[userCount] = numuser.join(",");
		console.log(userArray);
		userArray = JSON.parse(localStorage.getItem("userStorage"));

		userCount++;

		clearRegForm();
		saveUser();
		enter();

	}
	splitDataSends();
	audit(Regest, Valid);

}

function saveUser() {

	localStorage.setItem("userStorage", JSON.stringify(userStorage.users));
 }
 
 function getUser() {
	if(localStorage.getItem("userStorage")){
	   var users = localStorage.getItem("userStorage");
	   userArray = JSON.parse(users);
	   return userArray;
	}
	
 }

function splitDataSends() {
	var dataForms = document.getElementsByClassName("data");
	var dataUserPlace = [];
	for (var i = 0; i < dataForms.length; i++) {
		dataUserPlace[i] = dataForms[i].placeholder;
	}
	console.log(dataUserPlace);
	splitDates(userArray, dataUserPlace)
}

function splitDates(arrU, arrP) {
	var table = document.getElementsByClassName("tablePerson")[0];


	table.innerHTML = "";
	var tmp = "";
	var dataUser = [];

	var str = document.createElement("th")
	str.id = "images";
	var image = document.createElement('img');
	image.type = 'button';
	image.value = 'delite';
	image.className = "output2"
	qwer.appendChild(image);

	for (var i = 0; i < arrU.length; i++) {
		dataUser = arrU[i].join(",");
		dataTab = dataUser.split(",")

		tmp += "<table>";
		tmp += "<th>Користувач " + (parseInt(dataTab[dataTab.length - 1]) + 1) +
			"</th>";
		for (var j = 0; j < dataTab.length - 1; j++) {
			tmp += "<tr><td>" + arrP[j] + "</td><td>" + dataTab[j] + "</td></tr>";
		}
		tmp += "</table>";
	}
	table.innerHTML = tmp;
}


function audit(Regest, Valid) {

	if ((Regest[0] && Regest[1] && Regest[2] && Regest[3] && Regest[6]) == (Valid[0] && Valid[1] && Valid[2] && Valid[3] && Valid[4])) {
		var textV1 = document.getElementsByName("pName")[0];
		var textV2 = document.getElementsByName("pSurname")[0];
		var textV3 = document.getElementsByName("pMail")[0];
		var textV4 = document.getElementsByName("pPass")[0];

		console.log(true)
	} else {
		var textV1 = document.getElementsByName("pName")[0];
		var textV2 = document.getElementsByName("pSurname")[0];
		var textV3 = document.getElementsByName("pMail")[0];
		var textV4 = document.getElementsByName("pPass")[0];

		document.autoriz.name.style.background = "red"
		textV1.style.color = "red";

		document.autoriz.surname.style.background = "red"
		textV2.style.color = "red";

		document.autoriz.email.style.background = "red"
		textV3.style.color = "red";

		document.autoriz.pass.style.background = "red"
		textV4.style.color = "red";

		textV1.innerHTML = ("Невірно введено ім'я")
		textV2.innerHTML = ("Невірно введено фамілію")
		textV1.innerHTML = ("Невірно введено E-mail")
		textV2.innerHTML = ("Невірно введено пароль")

		console.log(false)
	}
}


/*  КОНСТРУКТОР   ОБЬЕКТОВ  */

function user(name, surname, email, pass, idUser) {
	this.name = name;
	this.surname = surname;
	this.email = email;
	this.pass = pass;
	this.idUser = idUser;

	this.arrUser = function arrUser() {
		var put = [];
		put[0] = this.name;
		put[1] = this.surname;
		put[2] = this.email;
		put[3] = this.pass;
		put[4] = this.idUser;

		return put
	}
}

/* проверка     ПОЛЬЗОВАТЕЛЯ  */

function joinDate(array) {
	var str = array.join(",");
	var Valid = str.split(",");

	return Valid;
}

// ОЧИСТКА  ФОРМЫ 

function clearRegForm() {
	var input = document.getElementsByClassName("mug")
	for (var i = 0; i < input.length; i++) {
		input[i].value = "";
	} 
}


/*  ФУНКЦИИ ВАЛИДАЦИИ FORM */

function validateNameAut(name) {
	var text = document.getElementsByName("pName")[0];
	var p = /^\D{3}\D*$/gi;
	var ok = false;

	if (p.test(name)) {
		text.style.color = "green";
		document.autoriz.name.style.background = "green";
		ok = true;
	}
	else {
		text.style.color = "red";
		document.autoriz.name.style.background = "red";
	}
	return ok// повертаємо поле перевірки так або ні
}


function validateSurnameAut(surname) {
	var text = document.getElementsByName("pSurname")[0];
	var p = /^\D{3}\D*$/gi;
	var ok = false;

	if (p.test(surname)) {
		text.style.color = "green";
		document.autoriz.surname.style.background = "green";
		ok = true;
	}
	else {
		text.style.color = "red";
		document.autoriz.surname.style.background = "red";
	}
	return ok// повертаємо поле перевірки так або ні
}

function validateEmailAut(email) {
	var text = document.getElementsByName("pEmail")[0];
	var p = /^(\w+\.)*\w+@\w+(\.\w+)*\.\D{2,5}$/gi;
	var ok = false;

	if (p.test(email)) {
		text.style.color = "green";
		document.autoriz.mail.style.background = "green";
		ok = true;
	}
	else {
		text.style.color = "red";
		document.reg.mail.style.background = "red";
	}
	return ok// повертаємо поле перевірки так або ні
}

/* на радіокнопки регулярка не потрібна!!! */

function validatePassAut(pass) {
	var text = document.getElementsByName("pPass")[0];
	var p = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z!@#$%^&*].{5,16})$/g;
	var ok = false;

	if (p.test(pass)) {
		text.style.color = "green";
		document.reg.pass.style.background = "green";
		ok = true;
	}
	else {
		text.style.color = "red";
		document.reg.pass.style.background = "red";
	}
	return ok// повертаємо поле перевірки так або ні
}

var regMass = [];
function enter() {

   var name = document.getElementById('userName');
   var surname = document.getElementById('userSurname');
   var mail = document.getElementById('userEmail');
   var pass = document.getElementById('userPassword');
   var ok = false;


   if (userArray.length >= 1) {
	  var okName = validateNameAut(name.value);
	  var okSurname = validateSurnameAut(surname.value);
      var okMail = validateEmailAut(mail.value);
      var okPass = validatePassAut(pass.value);
      if (okName == true && okSurname == true && okMail == true && okPass == true) {

         for (var i = 0; i <= userArray.length; i++) {
            regMass = userArray[i].split(',');

            if (regMass[0] == name.value && regMass[1] == surname.value && regMass[2] == mail.value && regMass[3] == pass.value) {
               

               var src = regMass[4];
               profImg.src = src;
               

               profName.innerHTML = regMass[0];
			   myName.innerHTML += "<p class='paragraph'>" + regMass[0] + "</p>";
               mySurname.innerHTML += "<p class='paragraph'>" + regMass[1] + "</p>";
               myMail.innerHTML += "<p class='paragraph'>" + regMass[2] + "</p>";
			   myPass.innerHTML += "<p class='paragraph'>" + regMass[3] + "</p>";
               console.log('Такий користувач існує!');
               clearRegForm();
               
               ok=true;

               localStorage.prof=JSON.stringify(regMass);
               return ok;

            }
            else if(i==userArray.length-1 && regMass[0] !== name.value && regMass[1] !== surname.value && regMass[2] !== mail.value && regMass[3] !== pass.value) {
               console.log('Такий користувач не реєструвався!');
               document.getElementsByName('pName')[0].innerHTML += '<br><p class="">Користувача з таким іменем не зареєстровано</p>';

            }
         }
      }
   } else {
      alert('Ще нікого не зареєстровано');
   }

}

//red.onclick=function(){
//	src=document.getElementById('output').src;
//	profImg.src=src;
// }


/*  ДОБАВЛЕНИЯ ПОЛЬЗОАВАТЕЛЕЙ    ФОРМА  2  */

var personCount = 0;
var personArray = [];

/* ФУНКЦИЯ ДОБАВЛЕНИЯ ПОЛЬЗОАВАТЕЛЕЙ  */
function addPerson() {
	var myname = document.getElementsByName("myname")[0];
	var mysurname = document.getElementsByName("mysurname")[0];
	var myemail = document.getElementsByName("myemail")[0];
	var mypass = document.getElementsByName("mypass")[0];
	var myphone = document.getElementsByName("myphone")[0];
	var myinfo = document.getElementsByName("myinfo")[0];

	var okMyname = validateName(myname.value);
	var okMysurname = validateSurname(mysurname.value);
	var okMyemail = validateEmail(myemail.value);
	var okMypass = validatePass(mypass.value);
	var okMyphone = validatePhone(myphone.value);
	var okText = validateText(myinfo.value);



	if (okMyname && okMysurname && okMyemail && okMypass && okMyphone && okText == true) {
		newPerson = new person(myname.value, mysurname.value, myemail.value, mypass.value, myphone.value, myinfo.value, personCount);

		var user0 = newPerson.arrUser();
		var personView = joinDates(user0);
		console.log(personView);
		personArray.push(personView);
		personArray[personCount] = personView;
		var numpers = personArray[personCount];
		personStorage.persons[personCount] = numpers;
		console.log(personArray);
		personCount++;

		clearsRegForm();
	}
	storage();
}

/*  КОНСТРУКТОР   ОБЬЕКТОВ  */

function person(myname, mysurname, myemail, mypass, myphone, myinfo, _dataUrl, idPerson) {
	this.myname = myname;
	this.mysurname = mysurname;
	this.myemail = myemail;
	this.mypass = mypass;
	this.myphone = myphone;
	this.myinfo = myinfo;
	this.idPerson = idPerson;

	this.arrUser = function arrUser() {
		var dif = [];
		dif[0] = this.myname;
		dif[1] = this.mysurname;
		dif[2] = this.myemail;
		dif[3] = this.mypass;
		dif[4] = this.myphone;
		dif[5] = this.myinfo;
		dif[6] = this.idUser;

		return dif
	}
}

// новий користувач* 
// send класс почты

personStorage = {}
personStorage.persons = [];
function storage() {
	personStorage.persons;
	localStorage.setItem("personStorage", personStorage.persons);
	localStorage.setItem("personStorage", JSON.stringify(personStorage.persons));
	
	personArray.length = 0;
	temp = personArray[0].split(",");

	document.getElementsByClassName("send")[0].innerHTML = temp[0];
	if (localStorage.count == 0) {
		document.getElementsByClassName("send")[0].innerHTML = temp[0];
	}
}

document.body.onload = function () { 
	if(localStorage.getItem("personStorage")){
		personArray = JSON.parse(localStorage.getItem("personStorage")) }
	}

/* проверка     ПОЛЬЗОВАТЕЛЯ  */

function joinDates(array) {
	var str = array.join(",");
	var Regest = str.split(",");
	return Regest;
}

// ОЧИСТКА  ФОРМЫ 

function clearsRegForm() {
	var input = document.getElementsByClassName("data")
	for (var i = 0; i < input.length; i++) input[i].value = ""
}


/*  ФУНКЦИИ ВАЛИДАЦИИ FORM */

function validateName(myname) {
	var text = document.getElementsByName("pMyname")[0];
	var p = /^\D{3}\D*$/gi;
	var ok = false;

	if (p.test(myname)) {
		text.style.color = "green";
		document.regest.myname.style.background = "green";
		ok = true;
	}
	else {
		text.style.color = "red";
		document.regest.myname.style.background = "red";
	}
	return ok// повертаємо поле перевірки так або ні
}

function validateSurname(mysurname) {
	var text = document.getElementsByName("pMysurname")[0];
	var p = /^\D{3}\D*$/gi;
	var ok = false;

	if (p.test(mysurname)) {
		text.style.color = "green";
		document.regest.mysurname.style.background = "green";
		ok = true;
	}
	else {
		text.style.color = "red";
		document.regest.mysurname.style.background = "red";
	}
	return ok// повертаємо поле перевірки так або ні
}

function validateEmail(myemail) {
	var text = document.getElementsByName("pMyemail")[0];
	var p = /^(\w+\.)*\w+@\w+(\.\w+)*\.\D{2,5}$/gi;
	var ok = false;

	if (p.test(myemail)) {
		text.style.color = "green";
		document.regest.myemail.style.background = "green";
		ok = true;
	}
	else {
		text.style.color = "red";
		document.regest.myemail.style.background = "red";
	}
	return ok// повертаємо поле перевірки так або ні
}

function validatePass(mypass) {
	var text = document.getElementsByName("pMypass")[0];
	var p = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])([0-9a-zA-Z!@#$%^&*].{5,16})$/g;
	var ok = false;

	if (p.test(mypass)) {
		text.style.color = "green";
		document.regest.mypass.style.background = "green";
		ok = true;
	}
	else {
		text.style.color = "red";
		document.regest.mypass.style.background = "red";
	}
	return ok// повертаємо поле перевірки так або ні
}

function validatePhone(myphone) {
	var text = document.getElementsByName("pMytel")[0];
	var p = /^[\-( ]?(0)\d{2}[\-) ]?\d{3}([\- ]?\d{2}){2}$/;
	var ok = false;

	if (p.test(myphone)) {
		text.style.color = "green";
		document.regest.myphone.style.background = "green";
		ok = true;
	}
	else {
		text.style.color = "red";
		document.regest.myphone.style.background = "red";
	}
	return ok// повертаємо поле перевірки так або ні
}


function validateText(myinfo) {
	var text = document.getElementsByName("pMyinfo")[0];
	var p = /^[\s\S]{20}[\s\S]*$/gi;
	var ok = false;

	if (p.test(myinfo)) {
		text.style.color = "green";
		document.regest.myinfo.style.background = "green";
		ok = true;
	}
	else {
		text.style.color = "red";
		document.regest.myinfo.style.background = "red";
	}
	return ok// повертаємо поле перевірки так або ні
}


function splitDataSend() {
	var dataForm = document.getElementsByClassName("data");
	var dataPersonPlace = [];
	for (var i = 0; i < dataForm.length; i++) {
		dataPersonPlace[i] = dataForm[i].placeholder;
	}
	console.log(dataPersonPlace);
	splitData(personArray, dataPersonPlace);
}

//подія event
fr.onchange = function (e) {
	input = e.target;
	var reader = new FileReader();

	reader.onload = function () {
		dataUrl = reader.result;
		output.src = dataUrl;
	}
	reader.readAsDataURL(input.files[0]);
}

//onmousemove
function change1() {
	cup1.src = "./img/1.jpg";
}
function change2() {
	cup1.src = "./img/1a.jpg";
}

function change21() {
	cup2.src = "./img/2.jpg";
}
function change22() {
	cup2.src = "./img/2a.jpg";
}

function change31() {
	cup3.src = "./img/3.jpg";
}
function change32() {
	cup3.src = "./img/3a.jpg";
}

function change41() {
	cup4.src = "./img/4.jpg";
}
function change42() {
	cup4.src = "./img/4a.jpg";
}

function change51() {
	cup5.src = "./img/5.jpg";
}
function change52() {
	cup5.src = "./img/5a.jpg";
}

function change61() {
	cup6.src = "./img/6.jpg";
}
function change62() {
	cup6.src = "./img/6aa.png";
}


document.getElementsByClassName("hover")[0].onclick = function (e) {
	prod = e.target;
	if(prod.closest(".card").childNodes[0].src){
	pictr = prod.closest(".card").childNodes[0].src;
	tekst = prod.closest(".card").childNodes[1].childNodes[0].innerText;
	type = prod.closest(".card").childNodes[1].childNodes[1].innerText;
	made = prod.closest(".card").childNodes[1].childNodes[2].innerText;
	price = prod.closest(".card").childNodes[1].childNodes[3].childNodes[1].innerText;
	}
	
	prod.id = "bb";
	pictr = bb.closest(".shell").childNodes[1].childNodes[1].src;
	tekst = bb.closest(".shell").childNodes[1].childNodes[3].childNodes[1].innerText;
	made = bb.closest(".shell").childNodes[1].childNodes[3].childNodes[5].innerText;
	type = bb.closest(".shell").childNodes[1].childNodes[3].childNodes[3].innerText;
	price = bb.closest(".shell").childNodes[1].childNodes[3].childNodes[7].childNodes[1].innerText;

	var cartProd = document.createElement('div');
	cartProd.className = "cartProd";

	var pictr2 = document.createElement('img');
	pictr2.src = pictr;
	pictr2.style = "height: 100px; width:100px; padding: 5px;";

	var text2 = document.createElement('p');
	text2.innerText = tekst;
	text2.style.cssText = "color: black; padding: 10px; font-size: 20px;";

	var made2 = document.createElement('p');
	made2.innerText = made;
	made2.style.cssText = "color: black; padding: 10px; font-size: 18px;";

	var type2 = document.createElement('p');
	type2.innerText = type;
	type2.style.cssText = "color: black; padding: 10px; font-size: 15px;";

	var price2 = document.createElement('p');
	price2.className = "cena";
	price2.innerText = price;
	price2.style.cssText = "color: black; padding: 10px; font-size: 20px;";

	document.getElementById("cont").appendChild(cartProd);
	cartProd.appendChild(pictr2);
	cartProd.appendChild(text2);
	cartProd.appendChild(made2);
	cartProd.appendChild(type2);
	cartProd.appendChild(price2);

	var deltr = document.createElement('input');
	deltr.type = 'button';
	deltr.value = 'Видалити';
	deltr.className = "deltr";
	deltr.id = "deltr";
	cartProd.appendChild(deltr);

	document.getElementsByClassName("bascket-buy")[0].onclick = function (x) {
		del = x.target;

		var counter = document.getElementById("h3Trash");
		
		if (counter.innerText != 0) {
			counter.style.display = "inline-block"
		} else {
			counter.style.display = "none"
		}

		if (x.target.className == 'del') {
			del = e.target;
			del.id = "tt1"
		}
		if (x.target.className == 'deltr') {
			cont.removeChild(del.closest('.cartProd'));
			counter.innerText--;
		}
	}

	var counter = document.getElementById("h3Trash");
	counter.innerText++;
	if (counter.innerText != 0) {
		counter.style.display = "inline-block"
	} else {
		counter.style.display = "none"
	}

	sumPrice();

	prod.id = "";	
}


/*document.getElementsByClassName("hover")[0].onclick = function (e) {
	    prod = e.target;
	prod.id = "bb";
	if(prod.closest(".card").childNodes[0].src){
	pictr = bb.closest(".card").childNodes[0].src;
	tekst = prod.closest(".card").childNodes[1].childNodes[0].innerText
	}
	    else{
	    pictr = bb.closest(".shell").childNodes[1].childNodes[1].src;
	    tekst = bb.closest(".shell").childNodes[1].childNodes[3].childNodes[1].innerText;
	    made = bb.closest(".shell").childNodes[1].childNodes[3].childNodes[5].innerText;
	    type = bb.closest(".shell").childNodes[1].childNodes[3].childNodes[3].innerText;
	    price = bb.closest(".shell").childNodes[1].childNodes[3].childNodes[7].childNodes[1].innerText;
	    }*/


// ** СТВОРЕННЯ  НОВОЇ  ЧАШКИ **
var cups = []
var newcup = document.getElementById("hover");

function cup(name, type, made, price, img) {
	this.name = name;
	this.type = type;
	this.made = made;
	this.price = price;
	this.img = img;
}

cups.cupprint = function() {
	var strCup = "";
	for (var i = 0; i < cups.length; ++i) {
		strCup += '<div class="shell"><div class="position card"><img src=" ' + cups[i].img + '" alt="cup" id=""><div class="child"><h3>' + cups[i].name + '</h3><h3>Ємність: ' + cups[i].type + ' мл</h3><h3>Бренд: ' + cups[i].made + '</h3><span class="span">Ціна:<h3 class="mach"> ' + cups[i].price + ' грн.</h3></span><a class="buy" href="#">КУПИТИ</a></div></div></div>';
	}
	newcup.innerHTML += strCup;	
}
document.getElementById("tab1").onclick = function () {cups.cupprint()}

function deletecup(i) {
	cups.splice(i, -1);
	cupprint();
	localStorage.newcup = JSON.stringify(cups);
}


// ** СТВОРЕННЯ НОВОГО ВІКНА **
function cupadd() {
	var win = window.open();
	win.document.open();
	win.document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="./cup_add.css"><link href="https://fonts.googleapis.com/css2?family=Anton&family=Palette+Mosaic&display=swap" rel="stylesheet"><title>CUP add</title></head><body><div id ="cpadd"><h1>ДОДАТИ ЧАШКУ</h1><div id ="cpaddimg"><img id ="cpimg" src ="./img/noimages1.png" alt="noimages"><p>Виберіть зображення товару:<br/><input type ="file" multiple id ="cpsel" accept ="image/*"></p></div><div id ="cpformadd"><form name ="fcpadd"><p>Введіть назву чашки:<input type ="text" id ="cpname"required></p><p>Введіть ємність чашки:<input type ="text" id ="cptype"required></p><p>Введіть країну-виробника:<input type ="text"id ="cpcontr"required></p><p>Введіть ціну чашки:<input required type = "text" id = "cpprice" class = "cena"></p><input id ="сpsub" type ="button" value ="Додати"></form></div></div></body></html>');

	var inputapi = win.document.getElementById("cpsel")
		inputapi.onchange = function (e) {
			var input = e.target;
			
			var reader = new FileReader();
			reader.onload = function(){
				var dataURL = reader.result;
				var output = win.document.getElementById('cpimg');
				output.src = dataURL;
			};
			reader.readAsDataURL(input.files[0]);
		}
	  
		var inputad = win.document.getElementById("сpsub")
			inputad.onclick = function (e) {
			cups.push(new cup(win.cpname.value, win.cptype.value, win.cpcontr.value ,win.cpprice.value, win.cpimg.src));
			cups.cupprint();
		  win.close();
		  localStorage.newcup = JSON.stringify(cups);
		}
	
	win.document.close();
	document.getElementById("cupadded").onclick = function () { cupadd() }
}

var cprice = document.getElementById("cost");

function sumPrice() {
    var prices = document.getElementsByClassName("cena");
    var sum = 0;
    var xcont = document.getElementById("cont");

	for (var i = 0; i < prices.length; i++) {
        sum += parseInt(prices[i].innerText);
		cprice.innerText = ("Товарів на суму " + sum + "грн.");
        if (xcont.innerHTML != 0) {
            cprice.style["display"] = "inline-flex";
        } 
    }
    hgfl.appendChild(cprice);
    return sum;
}
	
//setTimeout
var x = document.getElementById("openModalPerson");
setTimeout(function () {
	x.value = "3 seconds";
	x.style.display = "block";
}, 3000);
		// приветствие появится через 3000 миллисекунд (3 секунды)

	//startTime
/*function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	// добавить ноль перед цифрами <10
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById("starttime").innerHTML = h + ":" + m + ":" + s;
	var t = setTimeout(function () { startTime() }, 1000);
}
function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}*/
