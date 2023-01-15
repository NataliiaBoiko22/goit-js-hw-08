
import { throttle } from "lodash";

const inputForm = document.querySelector(".feedback-form");

inputForm.addEventListener("input", throttle(()=> {
  const mail = inputForm.elements.email.value;
  const msg = inputForm.elements.message.value;
  localStorage.setItem("feedback-form-state", JSON.stringify({ mail, msg }));
//   console.log(localStorage.getItem("feedback-form-state"));
}, 500));

window.addEventListener("load", () => {
  const getFormStore = localStorage.getItem("feedback-form-state");
  if (getFormStore) {
    const { mail, msg } = JSON.parse(getFormStore);
    inputForm.elements.email.value = mail;
    inputForm.elements.message.value = msg;
  } else {
    inputForm.elements.email.value = "";
    inputForm.elements.message.value = "";
}
});

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log({ mail: inputForm.elements.email.value, msg: inputForm.elements.message.value });
  inputForm.reset();
  localStorage.removeItem("feedback-form-state");
});

