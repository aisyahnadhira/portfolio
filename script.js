function openTab(tabName) {
    var i;
    var x = document.getElementsByClassName("tab-content");
    var buttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.classList.add("active");
}

document.getElementsByClassName("tab-button")[0].click();

document.addEventListener('DOMContentLoaded', function() {
    const internalLinks = document.querySelectorAll('.internal');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            alert('This application is used internally');
        });
    });
});

function openTab(tabName, element) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });
    
    document.getElementById(tabName).style.display = 'block';

    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    element.classList.add('active');
}