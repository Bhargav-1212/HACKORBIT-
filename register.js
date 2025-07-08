
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";


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

  const signUpForm = document.querySelector(".sign-up-container form");
  if (signUpForm) {
    signUpForm.addEventListener("submit", async (event) => {
      event.preventDefault();

      const email = signUpForm.querySelector('input[placeholder="Email"]').value;
      const password = signUpForm.querySelector('input[placeholder="Password"]').value;

      if (!email || !password) {
        alert("⚠️ Please enter both email and password.");
        return;
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("✅ User created:", user.email);
        alert("✅ Account created successfully!");
        window.location.href = "home.html"; // Redirect to homepage
      } catch (error) {
        console.error("❌ Signup Error:", error.code, error.message);
        alert("❌ Signup failed: " + error.message);
      }
    });
  } else {
    console.warn("⚠️ Sign-up form not found.");
  }
  const googleBtn = document.querySelector('.sign-up-container .social i.fab.fa-google-plus-g')?.closest('a');
  if (googleBtn) {
    googleBtn.addEventListener('click', async (event) => {
      event.preventDefault();

      try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log("✅ Google Sign-In successful:", user.email);
        alert("✅ Signed in with Google!");
        window.location.href = "main.html"; // Redirect to homepage
      } catch (error) {
        console.error("❌ Google Sign-In Error:", error.code, error.message);
        alert("❌ Google Sign-In failed: " + error.message);
      }
    });
  } else {
    console.warn("⚠️ Google sign-in button not found.");
  }
});
