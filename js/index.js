const TOKEN = "6963624064:AAElHp1ljnlnszJ73x6CjfQ5MpH2UjxZgAE";
const CHATID = "-4032479615";
const formEl = document.querySelector(".js-form");
const popupEl = document.getElementById("popup");

formEl.addEventListener("submit", onFormSubmit);

async function onFormSubmit(e) {
  e.preventDefault();

  const formElements = e.currentTarget.elements;
  const mail = formElements.mail.value;
  const name = formElements.name.value;
  const phone = formElements.phone.value;

  if (phone.trim() === "" && name.trim() === "" && mail.trim() === "") {
    alert("At least one field must be filled in");
    return;
  }

  const url = `https://api.telegram.org/bot${TOKEN}/sendMessage?chat_id=${CHATID}&text=Mail: ${mail} NAME: ${name} PHONE: ${phone}`;

  try {
    await fetch(url);
  } catch (error) {
    console.error("Error sending message to Telegram:", error);
  }

  popupEl.classList.remove("visually-hidden");
  window.setTimeout(hidePopup, 3000);
  formEl.reset();
}

function hidePopup() {
  popupEl.classList.add("visually-hidden");
}
