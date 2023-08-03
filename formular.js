const horske = document.getElementById("horske"),
  horskeN = document.getElementById("horskeN"),
  detske = document.getElementById("detske"),
  detskeN = document.getElementById("detskeN"),
  silnicni = document.getElementById("silnicni"),
  silnicniN = document.getElementById("silnicniN"),
  gravel = document.getElementById("gravel"),
  gravelN = document.getElementById("gravelN"),
  tazne = document.getElementById("tazne"),
  stresni = document.getElementById("stresni"),
  ochotenZaplatit = document.getElementById("ochotenZaplatit"),
  vysledek = document.getElementById("vysledek"),
  vysledne = document.getElementById("vysledne"),
  sum = document.getElementById("sum"),
  odeslat = document.getElementById("odeslat"),
  email = document.getElementById("email");

sum.addEventListener("click", () => {
  let sum = 0;
  if (horske.checked === true) {
    sum += parseInt(horskeN.value) * parseInt(horske.value);
  }
  if (detske.checked === true) {
    sum += parseInt(detskeN.value) * parseInt(detske.value);
  }
  if (silnicni.checked === true) {
    sum += parseInt(silnicniN.value) * parseInt(silnicni.value);
  }
  if (gravel.checked === true) {
    sum += parseInt(gravelN.value) * parseInt(gravel.value);
  }
  sum *= parseInt(document.getElementById("dnuZapujcky").value);

  if (stresni.checked) {
    sum *= 1.05;
  } else if (tazne.checked) {
    sum *= 1.1;
  } else {
    sum = sum;
  }

  vysledne.value = Math.ceil(sum);
  vysledek.value =
    sum <= parseInt(ochotenZaplatit.value)
      ? `Vešel jste se do ceny.`
      : `Cena je bohužel vyšší­.`;
});

email.addEventListener("keyup", () => {
  let control = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;

  if (email.value.match(control)) {
    odeslat.classList.remove("hidden");
  }
  if (!email.value.match(control)) {
    odeslat.classList.add("hidden");
  }
});
