export function validateEmail(email) {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    console.log(email, String(email).toLowerCase())
    return re.test(String(email).toLowerCase());
  }