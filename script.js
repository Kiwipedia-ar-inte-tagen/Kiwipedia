function showMenu() {
  let sidebar = document.getElementsByClassName("sidebar");

  let sidebarbutton = document.getElementsByClassName("sidebar-tabs");

  console.log("Hej!")

  if (sidebar[0].style.width === "0.6vw") {

    sidebar[0].style.width = "8vw";
    for (let i = 0; i < sidebarbutton.length; i++) {
      sidebarbutton[i].style.opacity = 1.0;
    }


  }
  else {
    sidebar[0].style.width = "0.6vw";
    for (let i = 0; i < sidebarbutton.length; i++) {
      sidebarbutton[i].style.opacity = 0;
    }
  }



}