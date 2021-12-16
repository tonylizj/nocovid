submitButtonHTML = "<input type=\"SUBMIT\" name=\"what\" value=\"Submit\">";
noButtonHTML = "<input type=\"radio\" name=\"q1\" value=\"No\">";

const nocovid = async () => {
  while (!document.querySelector(".uw-section--inner")) {
    await new Promise(r => setTimeout(r, 50));
  }

  while (!document.querySelector(".uw-section--inner").childNodes[15]) {
    await new Promise(r => setTimeout(r, 50));
  }

  while (!document.querySelector(".uw-section--inner").childNodes[15][2] || !document.querySelector(".uw-section--inner").childNodes[15][12]) {
    await new Promise(r => setTimeout(r, 50));
  }

  let noButton = document.querySelector(".uw-section--inner").childNodes[15][2];
  let submitButton = document.querySelector(".uw-section--inner").childNodes[15][12];

  if (submitButton.outerHTML === submitButtonHTML && noButton.outerHTML === noButtonHTML) {
    noButton.click();
    submitButton.click();
    console.log("submitted");
  } else {
    console.log("page may have been modified, aborting..");
  }
};

nocovid();
