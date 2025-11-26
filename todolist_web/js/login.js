// ===================================
// login

// ====================================
// signup
const signupForm = document.getElementById("signup-form");

function validateSignupForm(email, username, password, confirmPassword) {
    // username >= 6 + no space
    if (username.length < 6) {
        alert("Tên người dùng phải có 6 kí tự trở lên.")
        return false;
    }
    if (username.includes(" ")) {
        alert("Tên người dùng không được dùng dấu cách.")
        return false;
    }
    // pass >= 6
    if (password < 6) {
        alert("Mattj khẩu phải có 6 kí tự trở lên.");
        return false;
    }
    // pass == confimpass
    if (password !== confirmPassword) {
        alert("Mật khẩu không trùng khớp với trường nhập lại.");
        return false;
    }
    return true;
}

signupForm.addEventListener("submit", () => {
    // ------------------------------------
    // validate form
    const username = signupForm.getElementsById("signupUsername");
    const email = signupForm.getElementsById("signupEmail");
    const password = signupForm.getElementsById("signupPassword");
    const confirmPassword = signupForm.getElementsById("signupConfirmPassword");
    if (
        validateSignupForm(
            username.value,
            email.value,
            password.value,
            confirmPassword.value
        )
    ) {
        // ----------------------------------
        // kiem tra khong duoc trung email + username cu
        
        // ------------------------------------
        // create account with firebase
    }
});

   