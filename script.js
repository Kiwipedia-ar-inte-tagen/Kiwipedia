function showMenu(){
    let sidebar = document.getElementsByClassName("sidebar");

    //let sidebarbutton = document.getElementsByClassName("sidebar-tabs");
    
    console.log("Hej!")

    if(sidebar[0].style.width === "0.6vw"){
      sidebar[0].style.width = "8vw";
    }
    else{
        sidebar[0].style.width = "0.6vw";
    }
    
   
    
}