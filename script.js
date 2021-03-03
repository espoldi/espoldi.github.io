document.addEventListener('DOMContentLoaded', function () {

    // Side Navbar Activation
    const slideMenu = document.querySelectorAll(".sidenav");
    M.Sidenav.init(slideMenu, {});

    // Side Navbar Collapsible Activation
    var sideCollapse = document.querySelectorAll('.collapsible');
    M.Collapsible.init(sideCollapse, {});

    // Chips Activation
    var chipInterest = document.querySelectorAll('.chips');
    M.Chips.init(chipInterest, {});
    
    // Floating Action Buttons Activation
    var floaters = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(floaters, {direction: 'top'});

    // Modals Activation
    var windows = document.querySelectorAll('.modal');
    M.Modal.init(windows, {});

});