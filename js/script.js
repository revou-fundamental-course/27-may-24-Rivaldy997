// ini js

//input nama
//let username =prompt('Siapakah nama anda?','');
//document.getElementById('username').innerHTML = username;

//banner slide
var slideIndex= 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs((slideIndex += n));
}

function showDivs(n) {
    var i;
    var imgList = document.getElementsByClassName('banner-slideshow');
    if (n > imgList.length) slideIndex = 1;
    else if (n < 1) slideIndex = imgList.length;

    for (i = 0; i < imgList.length; i++) {
        imgList[i].style.display = "none";
    }
    imgList[slideIndex-1].style.display = "block";
}

 //ini input form
function validateForm() {
    const name= document.forms['message-form']['full-name'].value
    const phoneNumber= document.forms['message-form']['phone-number'].value
    const email= document.forms['message-form']['email'].value
    const birthDate= document.forms['message-form']['birth-date'].value
    const gender= document.forms['message-form']['gender'].value
    const messages= document.forms['message-form']['messages'].value

    if (name == '' || phoneNumber == '' || email == ''|| birthDate == '' || gender == '' || messages == '') {
        alert("Tidak boleh ada yang kosong");
        return false;
    }

    setSenderUI(name, phoneNumber, email, birthDate, gender, messages);

    return false;
}
    
function setSenderUI(name, phoneNumber, email, birthDate, gender, messages) {
    document.getElementById('sender-full-name').innerHTML = name;
    document.getElementById('sender-phone-number').innerHTML = phoneNumber;
    document.getElementById('sender-email').innerHTML = email;
    document.getElementById('sender-birth-date').innerHTML = birthDate;
    document.getElementById('sender-gender').innerHTML = gender;
    document.getElementById('sender-messages').innerHTML = messages;
}