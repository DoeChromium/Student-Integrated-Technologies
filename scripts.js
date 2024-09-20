window.onload = () => {
    homeBTN.setAttribute('id', 'selected')
}

const ifrm = document.getElementById('main-iframe');

function siteHome() {
    ifrm.setAttribute('src', 'home.html');
}

function siteSchedule() {
    ifrm.setAttribute('src', 'schedule.html');
}

function siteProjects() {
    ifrm.setAttribute('src', 'null.html');
}

function siteAboutUs() {
    ifrm.setAttribute('src', 'about-us.html');
}

const homeBTN = document.getElementById('home')
const scheBTN = document.getElementById('schedule')
const projBTN = document.getElementById('projects')
const abtBTN = document.getElementById('about-us')

function clkHome() {
    homeBTN.setAttribute('id', 'selected');

    scheBTN.setAttribute('id', 'schedule');
    projBTN.setAttribute('id', 'projects');
    abtBTN.setAttribute('id', 'about-us');
}

function clkSche() {
    scheBTN.setAttribute('id', 'selected');

    homeBTN.setAttribute('id', 'home');
    projBTN.setAttribute('id', 'projects');
    abtBTN.setAttribute('id', 'about-us');
}

function clkProj() {
    projBTN.setAttribute('id', 'selected');

    scheBTN.setAttribute('id', 'schedule');
    homeBTN.setAttribute('id', 'home');
    abtBTN.setAttribute('id', 'about-us');
}

function clkAbtUs() {
    abtBTN.setAttribute('id', 'selected');

    scheBTN.setAttribute('id', 'schedule');
    projBTN.setAttribute('id', 'projects');
    homeBTN.setAttribute('id', 'home');
}

const width = screen.width;
const height = screen.height;

const main = document.getElementById('main-iframe')
const print = document.getElementById('print').innerHTML = width + " x " + height

// if (width == "1517") {alert('1517')}
// if (height == "852") {alert('852')}

// document.getElementById('main-header').innerHTML = width + " " + height

if (width == "1517", height == "852") {
    main.style.width = "1308px";
    main.style.height = "606px"
} else {
    if (width == "1920", height == "1080") {
        main.style.height = "606px"
        main.style.width = "1760px";
    }
    else {
        alert('unknown screen size!')
    }
}


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if (confirm('You are on mobile, would you like to visit the mobile-friendly site?')) {
        window.location.replace('mobile.html')
    } else {
        void(0)
    }
    document.getElementById('print').textContent += " | mobile warning!"
} else {
    document.getElementById('print').textContent += " | not mobile"
}