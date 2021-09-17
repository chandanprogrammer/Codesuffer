const openNavbar = () =>{
    document.getElementById('side-navbar').style.width="70vw";
    document.getElementById('close-side-menu').style.display="flex";
    document.getElementById('menu-lines').style.display="none";
}
const closeSideMenu = () =>{
    document.getElementById('side-navbar').style.width="0";
    document.getElementById('menu-lines').style.display="unset";
    document.getElementById('close-side-menu').style.display="none";
}
