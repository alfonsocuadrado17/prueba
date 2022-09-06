function googleLogin() {
    let profile = googleUser.getBasicProfile();
    localStorage.setItem('User', profile.getEmail());
    window.location = "index.html";
}

