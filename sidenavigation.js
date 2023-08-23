// Portfolio Logo and Navigation Link Settings

function portfolioLogo() {
    document.write("<img id='logo' src='images/hss academic emblem.png' alt='The Portfolio of Hyun Su (Winfred) Seong'>");
}

function navigation() { 
    const menu = [["Home","index"], ["About","about"], ["Library","library"], ["FAQ","FAQ"]];
    const curvedArrow = "<p style='font-size: 50px; color: grey; margin-top: 40px; text-align: center; cursor: pointer;' href='javascript:void(0)' onclick='closeNav()'>&#8635;</p>"

    for (let i in menu) {
        document.write("<li id='li-sidenav'>" + "<a href=" + menu[i][1] + ".html>" + menu[i][0] + "</a></li>" );
    };

    document.write(curvedArrow);
}

// This is for the library.
function portfolioLogo_library() {
    document.write("<img id='logo' src='../images/hss academic emblem.png' alt='The Portfolio of Hyun Su (Winfred) Seong'>");
}

function navigation_library() { 
    const menu = [["Home","index"], ["About","about"], ["Library","library"], ["FAQ","FAQ"]];
    const curvedArrow = "<p style='font-size: 50px; color: grey; margin-top: 40px; text-align: center; cursor: pointer;' href='javascript:void(0)' onclick='closeNav()'>&#8635;</p>"

    for (let i in menu) {
        document.write("<li id='li-sidenav'>" + "<a href=../" + menu[i][1] + ".html>" + menu[i][0] + "</a></li>" );
    };

    document.write(curvedArrow);
}

// Side Navigation Button Settings
function idleNav() {
    document.getElementById('openandclosebtn').innerHTML = "Menu";
}

function openNav() {

    if (screen.width <= 700) {
        document.getElementById('thesidenav').style.width = "100%";
        document.getElementById('openandclosebtn').innerHTML = "Close";
    } else {
        document.getElementById('thesidenav').style.width = "260px";
        document.getElementById('main').style.marginLeft = "260px";
        document.getElementById('openandclosebtn').innerHTML = "Close";
        document.getElementById('openandclosebtn').setAttribute("onclick", "closeNav()");
    };
}

function closeNav() {
    document.getElementById('thesidenav').style.width = "0";
    document.getElementById('main').style.marginLeft = "0";
    document.getElementById('openandclosebtn').innerHTML = "Menu";
    document.getElementById('openandclosebtn').setAttribute("onclick", "openNav()")
}
