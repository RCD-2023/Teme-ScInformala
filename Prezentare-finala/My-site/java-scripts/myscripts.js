//modalul 1 calculator SMD
const smdRezultat = document.getElementById("smd-result");
function calculeazaSMD() {
  // Preluarea valorilor din câmpurile de input
  let prob1 = parseFloat(document.getElementById("prob1").value);
  let prob2 = parseFloat(document.getElementById("prob2").value);
  // Verificare input user si alerta de lipsa date
  if (isNaN(prob1) || isNaN(prob2)) {
    alert(
      "Trebuiesc introduse valori intre 0 si 1 in campurile de probabilitati."
    );
    return;
  }
  //calcularea p si smd (variabile)
  let prob = (prob1 + prob2) / 2;
  let smd = Math.abs((prob1 - prob2) / Math.sqrt(prob * (1 - prob)));
  // Afișarea rezultatului în elementul cu id-ul "smd-result"
  smdRezultat.innerText = `SMD = ${smd.toFixed(3)}`;
}

// modalul 2 region finder
const regiuniWHO = {
  AFR: [
    "Angola",
    "Maroc",
    "Namibia",
    "Algeria",
    "Benin",
    "Botswana",
    "Burkina Faso",
    "Burundi",
    "Cameroon",
    "Capo Verde",
    "Central African Republic",
    "Chad",
    "Comoros",
    "Ivory Coast",
    "Democratic Republic of the Congo",
    "Equatorial Guinea",
    "Guinea",
    "Eritrea",
    "Ethiopia",
    "Gabon",
    "Gambia",
    "Ghana",
    "Guinea",
    "Guinea-Bissau",
    "Kenya",
    "Lesotho",
    "Liberia",
    "Madagascar",
    "Malawi",
    "Mali",
    "Mauritania",
    "Mauritius",
    "Mozambique",
    "Namibia",
    "Niger",
    "Republic of the Congo",
    "Rwanda",
    "São Tomé and Príncipe",
    "Senegal",
    "Seychelles",
    "Sierra Leone",
    "South Africa",
    "South Sudan",
    "Eswatini",
    "Togo",
    "Uganda",
    "Tanzania",
    "Zambia",
    "Zimbabwe",
    "Zanzibar",
  ],
  AMR: [
    "Peru",
    "Columbia",
    "USA",
    "America",
    "SUA",
    "Antigua and Barbuda",
    "Argentina",
    "Bahamas",
    "Barbados",
    "Belize",
    "Bolivia",
    "Brazil",
    "Canada",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Dominica Republic",
    "Ecuador",
    "El Salvador",
    "Grenada",
    "Guatemala",
    "Guyana",
    "Haiti",
    "Honduras",
    "Jamaica",
    "Mexico",
    "Nicaragua",
    "Panama",
    "Paraguay",
    "Peru",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Suriname",
    "Trinidad and Tobago",
    "United States",
    "Uruguay",
    "Venezuela",
  ],
  EUR: [
    "Albania",
    "Andorra",
    "Armenia",
    "Austria",
    "Azerbaijan",
    "Belarus",
    "Belgium",
    "Boznia and Herzegovina",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czeh Republic",
    "Cehia",
    "Denmark",
    "Danemarca",
    "Estonia",
    "Finlanda",
    "France",
    "Franta",
    "Georgia",
    "Germany",
    "Greece",
    "Hungary",
    "Iceland",
    "Ireland",
    "Israel",
    "Italy",
    "Kazakhstan",
    "Kyrgyzstan",
    "Latvia",
    "Lithuania",
    "Luxembourg",
    "Malta",
    "Moldova",
    "Monaco",
    "Montenegro",
    "Netherlands",
    "North Macedonia",
    "Norway,",
    "Poland",
    "Portugal",
    "Romania",
    "Russia",
    "San Marino",
    "Serbia",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "Tajikistan",
    "Turkey",
    "Turkmenistan",
    "Ukraine",
    "United Kingdom",
    "Uzbekistan",
  ],
  SEAR: [
    "Bangladesh",
    "Bhutan",
    "North Korea",
    "India",
    "Indonesia",
    "Maldives",
    "Myanmar",
    "Nepal",
    "Sri Lanka",
    "Thailand",
    "Timor-Leste",
    "Bali",
    "Singapore",
    "Coreea de Sud",
  ],
  EMR: [
    "Afghanistan",
    "Bahrain",
    "Djibouti",
    "Egypt",
    "Iran",
    "Iraq",
    "Jordan",
    "Kuwait",
    "Lebanon",
    "Libya",
    "Morocco",
    "Oman",
    "Pakistan",
    "Qatar",
    "Saudi Arabia",
    "Somalia",
    "Sudan",
    "Syria",
    "Tunisia",
    "United Arab Emirates",
    "Yemen,",
    "Dubai",
  ],
  WPR: [
    "Australia",
    "Brunei",
    "Cambodia",
    "China",
    "Cook Islands",
    "Fiji",
    "Japan",
    "Kiribati",
    "Laos",
    "Malaysia",
    "Marshall Islands",
    "Micronesia",
    "Mongolia,",
    "Nauru",
    "New Zealand",
    "Niue",
    "Palau",
    "Papua New Guinea",
    "Philippines",
    "Samoa",
    "Singapore",
    "Solomon Islands",
    "South Korea",
    "Tonga",
    "Tuvalu",
    "Vanuatu",
    "Vietnam",
    "Hong Kong",
  ],
};
function editChange() {
  let obj = document.getElementById("myedit");
  let countryName = obj.value.toLowerCase();
  let result = "";
  for (let region in regiuniWHO) {
    regiuniWHO[region].forEach((country) => {
      let countryName2 = country.toLowerCase().slice(0, countryName.length);
      if (countryName2 == countryName && countryName != "") {
        result +=
          '<table><tr><td><font color="black" size="5">' +
          country +
          ": " +
          "reg" +
          "&nbsp;" +
          region.toUpperCase() +
          "<font></td></tr></table>";
      }
    });
  }
  document.getElementById("result").innerHTML =
    result == ""
      ? '<font color="red" size="5"><i>&nbsp; Nu exista </i></font>'
      : result;
}
