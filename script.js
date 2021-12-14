let email = document.getElementById("emailtxt");
let firstName = document.getElementById("firstnametxt");
let secondName = document.getElementById("secondnametxt");
let phoneNumber = document.getElementById("phonetxt");
let password = document.getElementById("passwordtxt");
let confirmPassword = document.getElementById("confirmtxt");
let form = document.querySelector("form");
let Check = document.getElementById("checktxt");

function validateInput() {
	if (email.value.trim() === "") {
		getError(email, "enter email");
	} else {
		if (!emailValidation(email.value.trim())) {
			getError(email, "invalid email")
		} else {
			getSuccess(email);
		}

	}
	// if(!Check.checked){
	// getError(Check, "please accept the condition");
	// }else{
	// getSuccess(Check)
	// }
	if (firstName.value.trim() === "") {
		getError(firstName, " enter firstName");
	} else {
		getSuccess(firstName);
	}

	if (secondName.value.trim() === "") {
		getError(secondName, "enter secondName");
	} else {
		getSuccess(secondName);
	}
	if (password.value.trim() === "") {
		getError(password, "enter password");
	} else {
		getSuccess(password);
	}
	if (confirmPassword.value.trim() === "") {
		getError(confirmPassword, "re-type password");
	} else {
		if (password.value.trim() !== confirmPassword.value.trim()) {
			getError(confirmPassword, " password and re-typed password not match");
		} else {
			getSuccess(confirmPassword);
		}


	}
}
document.querySelector("button").addEventListener("click", (e) => {
	e.preventDefault();
	validateInput();
})

function getSuccess(input) {
	let parentEle = input.parentElement;
	let messageElement = parentEle.querySelector("small");
	messageElement.style.visibility = "hidden";
	messageElement.innerText = "";
	parentEle.classList.add("success");
	parentEle.classList.remove("error");
}

function getError(input, message) {
	let parentEle = input.parentElement;
	let messageElement = parentEle.querySelector("small");
	messageElement.style.visibility = "visible";
	messageElement.innerText = message;
	parentEle.classList.remove("success");
	parentEle.classList.add("error");
}

function emailValidation(email) {
	let check = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return check.test(String(email).toUpperCase());
}


// let url= "http://localhost:8080/api/v1/user/register"


async function registerNewUser(e) {

	console.log("this is my email:", email);

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify({
		"username": "gent@",
		"firstName": "gentille",
		"lastName": "benjamin",
		"email": "uwa@gmail.com",
		"password": "1234Um!2456781",
		"passwordConf": "1234Um!2456781",
		"sex": "female",
		"age": "14",
		"role": "guest",
		"phoneNumber": "07810423536"
	});

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: raw,
		redirect: 'follow'
	};

	fetch("localhost:8080/api/v1/user/register", requestOptions)
		.then(response => response.text())
		.then(result => console.log(result))
		.catch(error => console.log('error', error));



}