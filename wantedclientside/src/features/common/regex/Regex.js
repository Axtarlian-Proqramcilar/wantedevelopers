const regexObject = {
  emailRegex: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
  passwordRegex:
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  nameRegex: /^[a-zA-Z ]{2,30}$/,
  phoneRegex: /^[0-9]{10}$/,
  addressRegex: /^[a-zA-Z0-9\s,'-]{3,}$/,
  pincodeRegex: /^[0-9]{6}$/,
  cityRegex: /^[a-zA-Z\s]{3,}$/,
  stateRegex: /^[a-zA-Z\s]{3,}$/,
  countryRegex: /^[a-zA-Z\s]{3,}$/,
  gstRegex:
    /^[0-9]{2}[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}[1-9a-zA-Z]{1}[zZ]{1}[0-9a-zA-Z]{1}$/,
  panRegex: /^[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}$/,
  aadharRegex: /^[0-9]{12}$/,
  bankRegex: /^[a-zA-Z0-9\s,'-]{3,}$/,
  ifscRegex: /^[A-Za-z]{4}[a-zA-Z0-9]{7}$/,
  accountRegex: /^[0-9]{9,18}$/,
  amountRegex: /^[0-9]{1,10}$/,
  descriptionRegex: /^[a-zA-Z0-9\s,'-]{3,}$/,
  dateRegex: /^[0-9]{4}-[0-9]{2}-[0-9]{2}$/,
  timeRegex: /^[0-9]{2}:[0-9]{2}$/,
  dateTimeRegex: /^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}$/,
};
