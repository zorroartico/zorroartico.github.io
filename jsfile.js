function navigation() { 
    const menu = [["Home","index"],["About","about"]];
    
    for (let i in menu) {
        document.write("<div class='menu'>" + "<a href=" + menu[i][1] + ".html>" + menu[i][0] + "</a></div>" );
    }
}

function logo() {
    document.write("<a href='index.html'><img src='images/hss floral emblem.png' class='main-logo'></a><h1>The GIS Portfolio of Hyun Su (Winfred) Seong</h1>")
}

function footer() {
    document.write("<div class='footer'><img src='images/hss floral emblem.png' style='width: 65px; height: auto; margin-top: 50px;'><p style='text-align: center; font-size: 15px;'>HSS GIS Portfolio.<br>2022 - Present.</p></div>")
}