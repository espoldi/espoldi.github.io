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
});