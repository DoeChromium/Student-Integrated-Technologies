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