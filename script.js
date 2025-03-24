const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", function() {
    const text = document.getElementById("animated-text");
    const words = text.innerText.split(" ");
    text.innerHTML = "";
    
    words.forEach(word => {
      const span = document.createElement("span");
      span.innerText = word;
      text.appendChild(span);
      text.appendChild(document.createTextNode(" "));
    });
  });
  