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
    ifrm.setAttribute('src', 'projects.html');
}

function siteAboutUs() {
    ifrm.setAttribute('src', 'about-us.html');
}

function siteAp() {
    ifrm.setAttribute('src', 'agents.html');
}

function siteInfo() {
    ifrm.setAttribute('src', 'info.html');
}

const homeBTN = document.getElementById('home')
const scheBTN = document.getElementById('schedule')
const projBTN = document.getElementById('projects')
const abtBTN = document.getElementById('about-us')
const ap = document.getElementById('agent-p')
const info = document.getElementById('info')

function clkHome() {
    homeBTN.setAttribute('id', 'selected');

    scheBTN.setAttribute('id', 'schedule');
    projBTN.setAttribute('id', 'projects');
    abtBTN.setAttribute('id', 'about-us');
    ap.setAttribute('id', 'agent-p')
    info.setAttribute('id', 'info')
}

function clkSche() {
    scheBTN.setAttribute('id', 'selected');

    homeBTN.setAttribute('id', 'home');
    projBTN.setAttribute('id', 'projects');
    abtBTN.setAttribute('id', 'about-us');
    ap.setAttribute('id', 'agent-p')
    info.setAttribute('id', 'info')
}

function clkProj() {
    projBTN.setAttribute('id', 'selected');

    scheBTN.setAttribute('id', 'schedule');
    homeBTN.setAttribute('id', 'home');
    abtBTN.setAttribute('id', 'about-us');
    ap.setAttribute('id', 'agent-p')
    info.setAttribute('id', 'info')
}

function clkAbtUs() {
    abtBTN.setAttribute('id', 'selected');

    scheBTN.setAttribute('id', 'schedule');
    projBTN.setAttribute('id', 'projects');
    homeBTN.setAttribute('id', 'home');
    ap.setAttribute('id', 'agent-p')
    info.setAttribute('id', 'info')
}

function clkAp() {
    ap.setAttribute('id', 'selected');

    scheBTN.setAttribute('id', 'schedule');
    projBTN.setAttribute('id', 'projects');
    homeBTN.setAttribute('id', 'home');
    abtBTN.setAttribute('id', 'about-us');
    info.setAttribute('id', 'info')
}

function clkInfo() {
    info.setAttribute('id', 'selected');

    scheBTN.setAttribute('id', 'schedule');
    projBTN.setAttribute('id', 'projects');
    homeBTN.setAttribute('id', 'home');
    abtBTN.setAttribute('id', 'about-us');
    ap.setAttribute('id', 'agent-p')
}

// end

const width = screen.width;
const height = screen.height;

const main = document.getElementById('main-iframe')
const print = document.getElementById('print')

print.innerHTML = width + " x " + height

const alt = document.getElementById('main')

if (width == "1517", height == "852") {
    main.style.width = "1308px";
    main.style.height = "624px";
    alt.style.width = "1308px"
} else {
    if (width == "1920", height == "1080") {
        main.style.width = "1758px";
        main.style.height = "799px";
        alt.style.width = "1758px"
    }
    else {
        alert('unknown screen size!')
    }
}


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    if (confirm('You are on mobile, would you like to visit the mobile-friendly site?')) {
        window.location.replace('mobile.html')
    } else {
        void (0)
    }
    print.textContent += " | mobile warning!"
} else {
    print.textContent += " | not mobile"
}


function usrJake() {

    var lucas = document.getElementById('profile-jake');
    var angie = document.getElementById('profile-jon');
    var lucas = document.getElementById('profile-isaac');
    var angie = document.getElementById('profile-angie');
    var lucas = document.getElementById('profile-gabe');
    var angie = document.getElementById('profile-lucas');
    var angie = document.getElementById('profile-seb');

    jake.style.display = "none";
    jon.style.display = "none";
    isaac.style.display = "none";
    angie.style.display = "none";
    gabe.style.display = "none";
    lucas.style.display = "none";
    seb.style.display = "none";
}

function usrJon() {
    var lucas = document.getElementById('profile-jake');
    var angie = document.getElementById('profile-jon');
    var lucas = document.getElementById('profile-isaac');
    var angie = document.getElementById('profile-angie');
    var lucas = document.getElementById('profile-gabe');
    var angie = document.getElementById('profile-lucas');
    var angie = document.getElementById('profile-seb');

    jake.style.display = "none";
    jon.style.display = "none";
    isaac.style.display = "none";
    angie.style.display = "none";
    gabe.style.display = "none";
    lucas.style.display = "none";
    seb.style.display = "none";
}


function usrIsaac() {

    var lucas = document.getElementById('profile-jake');
    var angie = document.getElementById('profile-jon');
    var lucas = document.getElementById('profile-isaac');
    var angie = document.getElementById('profile-angie');
    var lucas = document.getElementById('profile-gabe');
    var angie = document.getElementById('profile-lucas');
    var angie = document.getElementById('profile-seb');

    jake.style.display = "none";
    jon.style.display = "none";
    isaac.style.display = "none";
    angie.style.display = "none";
    gabe.style.display = "none";
    lucas.style.display = "none";
    seb.style.display = "none";
}

function usrAngie() {

    var lucas = document.getElementById('profile-lucas');
    var angie = document.getElementById('profile-angie');

    jake.style.display = "none";
    jon.style.display = "none";
    isaac.style.display = "none";
    angie.style.display = "none";
    gabe.style.display = "none";
    lucas.style.display = "none";
    seb.style.display = "none";
}


function usrGabe() {

    var lucas = document.getElementById('profile-jake');
    var angie = document.getElementById('profile-jon');
    var lucas = document.getElementById('profile-isaac');
    var angie = document.getElementById('profile-angie');
    var lucas = document.getElementById('profile-gabe');
    var angie = document.getElementById('profile-lucas');
    var angie = document.getElementById('profile-seb');

    jake.style.display = "none";
    jon.style.display = "none";
    isaac.style.display = "none";
    angie.style.display = "none";
    gabe.style.display = "none";
    lucas.style.display = "none";
    seb.style.display = "none";
}

function usrLucas() {

    var lucas = document.getElementById('profile-jake');
    var angie = document.getElementById('profile-jon');
    var lucas = document.getElementById('profile-isaac');
    var angie = document.getElementById('profile-angie');
    var lucas = document.getElementById('profile-gabe');
    var angie = document.getElementById('profile-lucas');
    var angie = document.getElementById('profile-seb');

    jake.style.display = "none";
    jon.style.display = "none";
    isaac.style.display = "none";
    angie.style.display = "none";
    gabe.style.display = "none";
    lucas.style.display = "none";
    seb.style.display = "none";
}


function usrSeb() {

    var lucas = document.getElementById('profile-jake');
    var angie = document.getElementById('profile-jon');
    var lucas = document.getElementById('profile-isaac');
    var angie = document.getElementById('profile-angie');
    var lucas = document.getElementById('profile-gabe');
    var angie = document.getElementById('profile-lucas');
    var angie = document.getElementById('profile-seb');

    jake.style.display = "none";
    jon.style.display = "none";
    isaac.style.display = "none";
    angie.style.display = "none";
    gabe.style.display = "none";
    lucas.style.display = "none";
    seb.style.display = "none";
}