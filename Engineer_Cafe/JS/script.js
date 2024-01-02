let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};



//Image 
function changeContent(category) {
    // Hide all containers
    var containers = document.querySelectorAll('.container');

    containers.forEach(function(container) {
        container.style.display = 'none';
    });

    

    // Show the selected container
    var selectedContainer = document.getElementById(category);
    if (selectedContainer) {
        selectedContainer.style.display = 'grid';
    }
    
}

//Login Popup
var modal = document.getElementById('login');
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}
var modal1 = document.getElementById('signup');
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}

