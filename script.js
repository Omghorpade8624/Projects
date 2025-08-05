// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Apply saved theme
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// Filter projects
const filterButtons = document.querySelectorAll(".filter");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.getAttribute("data-category");

    projectCards.forEach((card) => {
      const isMatch = category === "all" || card.dataset.category === category;
      card.style.display = isMatch ? "block" : "none";
    });
  });
});

// Chatbot mock
const chatInput = document.getElementById("chat-input");
const chatBox = document.getElementById("chat-box");

chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const msg = chatInput.value.trim();
    if (msg === "") return;

    addMessage("user", msg);
    chatInput.value = "";

    // Simulated bot reply
    setTimeout(() => {
      let reply = "I don't understand.";
      if (msg.toLowerCase().includes("hi")) reply = "Hello! How can I help?";
      if (msg.toLowerCase().includes("project")) reply = "You can check the projects section above!";
      addMessage("bot", reply);
    }, 500);
  }
});

function addMessage(sender, text) {
  const div = document.createElement("div");
  div.className = sender;
  div.textContent = text;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Contact form handler
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent (mock). You can hook this to EmailJS later.");
});
