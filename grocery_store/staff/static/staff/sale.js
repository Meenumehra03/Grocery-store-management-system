// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById{"sidebar"};

function openSidebar() {
    if(!sidebarOpen) {
        sidebar.classlist.add("sidebar-responsive");
        sidebaropen = true;
    }
}

function closeSidebar() {
    if(sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}