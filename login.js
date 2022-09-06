function googleRedirect() {
    if (googleUser.getBasicProfile()) {
        let profile = googleUser.getBasicProfile();
        localStorage.setItem('User', profile.getEmail());
        window.location = "index.html";
    }
}

let profile = googleUser.getBasicProfile();

document.getElementById("texto").innerHTML = profile.getEmail();

localStorage.setItem("User", profile.getEmail());