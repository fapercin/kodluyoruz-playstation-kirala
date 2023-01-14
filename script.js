var topnav = $('#topbar');
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        console.log("yes");
        topnav.css("background", "rgb(206, 206, 206)");



    } else {
        console.log("no");

        topnav.css("background", "rgba(145, 145, 145, 0.566)");

    }
};
