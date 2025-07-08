const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click',() =>{
    container.classList.add("right-panel-active");
});
signUpButton.addEventListener('click',() => {
    container.classList.remove(right-panel-active);
})

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCEkHCGGDPOj00j2tcK_qP-jJF38rESr6Y",
  authDomain: "vaidya-b7a28.firebaseapp.com",
  projectId: "vaidya-b7a28",
  storageBucket: "vaidya-b7a28.appspot.com",
  messagingSenderId: "241301502356",
  appId: "1:241301502356:web:a9b1fc46fef8c599067781",
  measurementId: "G-5JBT8R1EFB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

document.addEventListener("DOMContentLoaded", () => {
  // ✅ Handle Email/Password Login
  const loginForm = document.querySelector(".sign-in-container form");

  if (loginForm) {
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const email = loginForm.querySelector('input[placeholder="Email"]').value;
      const password = loginForm.querySelector('input[placeholder="Password"]').value;

      if (!email || !password) {
        alert("⚠️ Please enter both email and password.");
        return;
      }

      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("✅ Logged in:", user.email);
        alert("✅ Login successful!");
        window.location.href = "home.html"; // Redirect to homepage
      } catch (error) {
        console.error("❌ Login Error:", error.code, error.message);
        alert("❌ Login failed: " + error.message);
      }
    });
  } else {
    console.warn("⚠️ Login form not found.");
  }
    const googleBtn = document.querySelector('.sign-in-container .social i.fab.fa-google-plus-g')?.closest('a');
  if (googleBtn) {
    googleBtn.addEventListener('click', async (event) => {
      event.preventDefault();

      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("✅ Google Login successful:", user.email);
        alert("✅ Signed in with Google!");
        window.location.href = "main.html";
      } catch (error) {
        console.error("❌ Google Login Error:", error.code, error.message);
        alert("❌ Google Sign-In failed: " + error.message);
      }
    });
  } else {
    console.warn("⚠️ Google login button not found.");
  }
});
