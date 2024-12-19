< !DOCTYPE html >
    <
    html lang = "en" >
    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > Healthcare Management System < /title>

<!-- Bootstrap CSS -->
<
link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
rel = "stylesheet" >
    <
    /head> <
    body >
    <!-- Navbar -->
    <
    nav class = "navbar navbar-expand-lg bg-success navbar-dark" >
    <
    div class = "container" >
    <
    a class = "navbar-brand fw-bold"
href = "#" > Healthcare < /a> <
    button class = "navbar-toggler"
type = "button"
data - bs - toggle = "collapse"
data - bs - target = "#navbarNav" >
    <
    span class = "navbar-toggler-icon" > < /span> <
    /button> <
    div class = "collapse navbar-collapse"
id = "navbarNav" >
    <
    ul class = "navbar-nav ms-auto" >
    <
    li class = "nav-item" >
    <
    a class = "nav-link"
href = "#home" > Home < /a> <
    /li> <
    li class = "nav-item" >
    <
    a class = "nav-link"
href = "#services" > Services < /a> <
    /li> <
    li class = "nav-item" >
    <
    a class = "nav-link"
href = "#contact" > Contact < /a> <
    /li> <
    li class = "nav-item" >
    <
    button class = "btn btn-warning btn-sm ms-3"
data - bs - toggle = "modal"
data - bs - target = "#exampleModal" > More Info < /button> <
    /li> <
    /ul> <
    /div> <
    /div> <
    /nav>

<!-- Home Section -->
<
section id = "home"
class = "text-center py-5" >
    <
    div class = "container" >
    <
    h1 class = "display-4" > Welcome to Our Healthcare System < /h1> <
    p class = "lead" > Providing seamless healthcare services online. < /p> <
    button class = "btn btn-primary"
id = "showAlertBtn" > Click
for Alert < /button> <
    /div> <
    /section>

<!-- Services Section -->
<
section id = "services"
class = "py-5 bg-light" >
    <
    div class = "container" >
    <
    h2 class = "text-center mb-4" > Our Services < /h2> <
    div class = "row" >
    <
    div class = "col-md-4 mb-4" >
    <
    div class = "card text-center p-3" >
    <
    h4 > Doctor Appointment < /h4> <
    p > Book appointments with doctors at your convenience. < /p> <
    /div> <
    /div> <
    div class = "col-md-4 mb-4" >
    <
    div class = "card text-center p-3" >
    <
    h4 > Patient Records < /h4> <
    p > Access and manage patient records securely. < /p> <
    /div> <
    /div> <
    div class = "col-md-4 mb-4" >
    <
    div class = "card text-center p-3" >
    <
    h4 > Health Monitoring < /h4> <
    p > Monitor and analyze your health data effectively. < /p> <
    /div> <
    /div> <
    /div> <
    /div> <
    /section>

<!-- Contact Section -->
<
section id = "contact"
class = "py-5" >
    <
    div class = "container text-center" >
    <
    h2 > Contact Us < /h2> <
    p class = "lead" > Email: support @healthcare.com | Phone: +1 234 567 890 < /p> <
    /div> <
    /section>

<!-- Bootstrap Modal -->
<
div class = "modal fade"
id = "exampleModal"
tabindex = "-1"
aria - labelledby = "exampleModalLabel"
aria - hidden = "true" >
    <
    div class = "modal-dialog" >
    <
    div class = "modal-content" >
    <
    div class = "modal-header" >
    <
    h5 class = "modal-title"
id = "exampleModalLabel" > More Information < /h5> <
    button type = "button"
class = "btn-close"
data - bs - dismiss = "modal"
aria - label = "Close" > < /button> <
    /div> <
    div class = "modal-body" >
    <
    p > Our healthcare platform provides top - notch solutions
for both doctors and patients.Contact us
for further details! < /p> <
    /div> <
    div class = "modal-footer" >
    <
    button type = "button"
class = "btn btn-secondary"
data - bs - dismiss = "modal" > Close < /button> <
    /div> <
    /div> <
    /div> <
    /div>

<!-- Footer -->
<
footer class = "text-center bg-success text-white py-3" >
    <
    p > & copy;
2024 Healthcare Management System < /p> <
    /footer>

<!-- Bootstrap JS Bundle (includes Popper.js) -->
<
script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" > < /script>

<!-- Custom JavaScript -->
<
script >
    // Show Alert on Button Click
    document.getElementById("showAlertBtn").addEventListener("click", function() {
        const alertDiv = document.createElement("div");
        alertDiv.className = "alert alert-success alert-dismissible fade show";
        alertDiv.role = "alert";
        alertDiv.innerHTML = `
                <strong>Well Done!</strong> You clicked the alert button.
                <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
            `;

        // Append the alert to the home section
        document.getElementById("home").appendChild(alertDiv);
    });

// Smooth Scrolling for Navbar Links
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute("href"));
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
}); <
/script> <
/body> <
/html>