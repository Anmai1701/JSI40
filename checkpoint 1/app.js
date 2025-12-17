function showSignup() {
    document.querySelector(".box").classList.add("hidden");
    document.getElementById("signupBox").classList.remove("hidden");
  }
  function showLogin() {
    document.querySelector(".box").classList.remove("hidden");
    document.getElementById("signupBox").classList.add("hidden");
  }

  function validateEmail(email) {
    return email.includes("@");
  }
  
  function validatePassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
  }

  document.getElementById("signupBtn").addEventListener("click", async () => {
    const email = document.getElementById("signupEmail").value;
    const pass = document.getElementById("signupPassword").value;
    const confirm = document.getElementById("signupConfirm").value;
  
    if (!validateEmail(email)) {
      alert("Email phải chứa ký tự @");
      return;
    }
    if (!validatePassword(pass)) {
      alert("Password phải ≥ 6 ký tự, có chữ in hoa, chữ thường, và số!");
      return;
    }
    if (pass !== confirm) {
      alert("Mật khẩu xác nhận không trùng khớp!");
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      alert("Đăng ký thành công!");
      showLogin();
    } catch (error) {
      alert("Lỗi đăng ký: " + error.message);
    }
  });

  document.getElementById("loginBtn").addEventListener("click", async () => {
    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, pass);
      const user = userCredential.user;
      alert("Đăng nhập thành công!\nEmail: " + user.email);
    } catch (error) {
      alert("Lỗi đăng nhập: " + error.message);
    }
  });

  document.getElementById("googleLogin").addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      alert("Google Login thành công! Chào: " + result.user.email);
    } catch (error) {
      alert("Lỗi Google Login: " + error.message);
    }
  });
  
  document.getElementById("googleSignup").addEventListener("click", async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      alert("Google Signup thành công! Chào: " + result.user.email);
    } catch (error) {
      alert("Lỗi Google Signup: " + error.message);
    }
  });
  