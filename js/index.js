const TOKEN = "6963624064:AAElHp1ljnlnszJ73x6CjfQ5MpH2UjxZgAE";
const CHATID = "-4032479615";
const formEl = document.querySelector(".js-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  let formItems = e.currentTarget.elements;
  let mail = formItems.mail.value;

  let name = formItems.name.value;

  let phone = formItems.phone.value;

  if (phone.trim() === "" && name.trim() === "" && mail.trim() === "") {
    alert("at least one field must be filled in");
  }

  let url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHATID}&text=Mail:  ${mail}  NAME:  ${name}  PHONE:  ${phone}`;
  fetch(url);

  formEl.reset();
}
