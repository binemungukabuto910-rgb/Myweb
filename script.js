function toggleMenu() {

    const menu = document.getElementById("navMenu");

    menu.classList.toggle("active");
}


function openForm(service) {

    document.getElementById("serviceModal").style.display = "block";

    document.getElementById("selectedService").value = service;
}


function closeForm() {

    document.getElementById("serviceModal").style.display = "none";
}


function submitRequest(event) {

    event.preventDefault();

    const service =
        document.getElementById("selectedService").value;

    const name =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("phone").value;

    const location =
        document.getElementById("location").value;

    const description =
        document.getElementById("description").value;


    alert(
        "Request submitted successfully!\n\n" +

        "Service: " + service + "\n" +

        "Name: " + name + "\n" +

        "Phone: " + phone + "\n" +

        "Location: " + location + "\n\n" +

        "We will contact you soon."
    );


    document.querySelector("form").reset();

    closeForm();
}