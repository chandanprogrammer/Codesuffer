const openNavbar = () => {
  document.getElementById("side-navbar").style.width = "70vw";
  document.getElementById("close-side-menu").style.display = "flex";
  document.getElementById("menu-lines").style.display = "none";
};
const closeSideMenu = () => {
  document.getElementById("side-navbar").style.width = "0";
  document.getElementById("menu-lines").style.display = "unset";
  document.getElementById("close-side-menu").style.display = "none";
};

// include js file function ---->
function include(file) {
  var script = document.createElement('script');
  script.src = file;
  script.type = 'text/javascript';
  script.defer = true;
  document.getElementsByTagName('head').item(0).appendChild(script);
  }
  include('https://kit.fontawesome.com/f254915aae.js');
  