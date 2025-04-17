// YouTube Button Script
document.addEventListener("DOMContentLoaded", function () {
  // Create button element
  const ytButton = document.createElement("a");
  ytButton.href = "https://official.score808.my.id/search";
  ytButton.target = "_blank";
  ytButton.className = "youtube-button";

  // Add SVG icon
  ytButton.innerHTML = `<svg aria-hidden="true" fill="#ffffff" viewBox="0 0 24 24"><path d="M4.93,4.93C3.12,6.74 2,9.24 2,12C2,14.76 3.12,17.26 4.93,19.07L6.34,17.66C4.89,16.22 4,14.22 4,12C4,9.79 4.89,7.78 6.34,6.34L4.93,4.93M19.07,4.93L17.66,6.34C19.11,7.78 20,9.79 20,12C20,14.22 19.11,16.22 17.66,17.66L19.07,19.07C20.88,17.26 22,14.76 22,12C22,9.24 20.88,6.74 19.07,4.93M7.76,7.76C6.67,8.85 6,10.35 6,12C6,13.65 6.67,15.15 7.76,16.24L9.17,14.83C8.45,14.11 8,13.11 8,12C8,10.89 8.45,9.89 9.17,9.17L7.76,7.76M16.24,7.76L14.83,9.17C15.55,9.89 16,10.89 16,12C16,13.11 15.55,14.11 14.83,14.83L16.24,16.24C17.33,15.15 18,13.65 18,12C18,10.35 17.33,8.85 16.24,7.76M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10Z"></path></svg>
    <span class="subscribe-text">Live Now</span>
  `;

  // Create styles
  const style = document.createElement("style");
  style.textContent = `
    .youtube-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #ff0000;
  color: white;
  border-radius: 30px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0px;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  z-index: 99999;
  animation: float 3s ease-in-out infinite;
}

.youtube-button svg {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.subscribe-text {
  font-family: Arial, sans-serif;
  font-weight: 500;
  font-size: 0;
  max-width: 0;
  overflow: hidden;
  white-space: nowrap;
  transition: all 0.3s ease;
}

/* Hover Effects */
.youtube-button:hover {
  background-color: #e60000;
  width: 140px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  gap: 8px;
}

.youtube-button:hover .subscribe-text {
  font-size: 14px;
  max-width: 100px;
  padding-right: 8px;
}

.youtube-button:hover svg {
  transform: rotate(360deg);
}

/* Floating Animation */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

/* Click Ripple Effect */
.youtube-button:active::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255,255,255,0.3);
  border-radius: 50%;
  animation: ripple 0.6s linear;
}

@keyframes ripple {
  from { transform: scale(0); opacity: 1; }
  to { transform: scale(2); opacity: 0; }
}

/* Mobile Responsive */
@media (max-width: 480px) {
  .youtube-button {
    bottom: 80px;
    right: 10px;
    width: 45px;
    height: 45px;
  }

  .youtube-button:hover {
    width: 120px;
  }

  .youtube-button svg {
    width: 20px;
    height: 20px;
  }

  .subscribe-text {
    font-size: 12px;
  }
}
  `;

  // Create intro overlay
  const overlay = document.createElement("div");
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.3);
    backdrop-filter: blur(5px);
    z-index: 9998;
    transition: opacity 0.5s ease;
  `;

  // Add elements to DOM
  document.head.appendChild(style);
  document.body.appendChild(overlay);
  document.body.appendChild(ytButton);

  // Intro animation
  setTimeout(() => {
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 500);
    ytButton.style.animation = "float 3s ease-in-out infinite, none";
  }, 1000);

  // Initial hover simulation
  setTimeout(() => {
    ytButton.style.cssText = `width: 140px;gap: 8px;`;
    ytButton.querySelector(".subscribe-text").style.cssText = `
    font-size: 14px;
    max-width: 100px;
    padding-right: 8px;
  `;
  }, 100);
  setTimeout(() => {
    ytButton.style.cssText = "";
    ytButton.querySelector(".subscribe-text").style.cssText = "";
  }, 2000);
});
