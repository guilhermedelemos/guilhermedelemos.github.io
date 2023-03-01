function createCookiePolicy() {
  const cookies = {
    allowCookies: true,
    date: new Date()
  }
  return cookies;
}

function getCookie(name) {
  let newName = name + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i=0; i<ca.length; i++) {
    let c = ca[i];
    while(c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if(c.indexOf(newName) == 0) {
      return c.substring(newName.length, c.length);
    }
  }
  return undefined;
}

function setCookie(name, value, exdays=1) {
  const now = new Date();
  now.setTime(now.getTime() + (exdays*24*60*60*1000));
  let expires = 'expires='+now.toUTCString();
  const newCookie = name + '=' + value + ';' + expires + ';path=/';
  document.cookie = newCookie;
}

function getToastCookies() {
  const toast = document.getElementById('toastCookies');
  return new bootstrap.Toast(toast);
}

const toastCookies = getToastCookies();
const cookieName = 'cookiesPolicy';

function showToastCookies() {
  if(getCookie(cookieName) === undefined) {
    toastCookies.show();
  }
}

function acceptCookies() {
  const cookie = createCookiePolicy();
  setCookie(cookieName, JSON.stringify(cookie));
  toastCookies.hide();
}

const acceptCookiesBtn = document.getElementById('acceptCookiesBtn');
acceptCookiesBtn.addEventListener('click', () => {
  acceptCookies();
});

showToastCookies();
