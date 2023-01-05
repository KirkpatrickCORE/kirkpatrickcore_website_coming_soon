function getYear() {
    return new Date().getFullYear();
}

document.getElementById("footer").innerHTML = "Copyright &copy; " + getYear() + " KirkpatrickCORE, LLC. | All rights reserved.";