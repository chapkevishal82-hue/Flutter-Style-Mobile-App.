// ==========================================
// FLUTTER STYLE MOBILE APP
// JAVASCRIPT
// ==========================================


// Get all navigation buttons

const navItems =
    document.querySelectorAll(".nav-item");


// Get all pages

const pages =
    document.querySelectorAll(".page");


// Navigation functionality

navItems.forEach((item) => {

    item.addEventListener("click", () => {

        const pageId =
            item.getAttribute("data-page");


        // Ignore plus button

        if (!pageId) {

            showToast("Add new action clicked!");

            return;

        }


        // Remove active class

        navItems.forEach((nav) => {

            nav.classList.remove("active");

        });


        // Add active class

        item.classList.add("active");


        // Hide all pages

        pages.forEach((page) => {

            page.classList.remove("active-page");

        });


        // Show selected page

        const selectedPage =
            document.getElementById(pageId);


        if (selectedPage) {

            selectedPage.classList.add(
                "active-page"
            );

        }


        // Scroll to top

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

});


// ==========================================
// DARK MODE
// ==========================================


const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");


    const icon =
        themeBtn.querySelector("i");


    if (
        document.body.classList.contains(
            "dark-mode"
        )
    ) {

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem(
            "theme",
            "dark"
        );

    } else {

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});


// Load saved theme

window.addEventListener("DOMContentLoaded", () => {

    const savedTheme =
        localStorage.getItem("theme");


    if (savedTheme === "dark") {

        document.body.classList.add(
            "dark-mode"
        );


        const icon =
            themeBtn.querySelector("i");


        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

    }

});


// ==========================================
// SEARCH FUNCTIONALITY
// ==========================================


const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener("input", () => {

    const searchValue =
        searchInput.value.toLowerCase();


    const activities =
        document.querySelectorAll(
            ".activity-item"
        );


    activities.forEach((activity) => {

        const text =
            activity.innerText.toLowerCase();


        if (
            text.includes(searchValue)
        ) {

            activity.style.display =
                "flex";

        } else {

            activity.style.display =
                "none";

        }

    });

});


// ==========================================
// NOTIFICATION BUTTON
// ==========================================


const notificationButton =
    document.querySelector(
        ".notification-btn"
    );


notificationButton.addEventListener(
    "click",
    () => {

        // Remove active page

        pages.forEach((page) => {

            page.classList.remove(
                "active-page"
            );

        });


        // Show notification page

        document
            .getElementById(
                "notificationsPage"
            )
            .classList.add(
                "active-page"
            );


        // Update navigation

        navItems.forEach((nav) => {

            nav.classList.remove(
                "active"
            );

        });


        document
            .querySelector(
                '[data-page="notificationsPage"]'
            )
            .classList.add(
                "active"
            );

    }
);


// ==========================================
// BUTTON INTERACTIONS
// ==========================================


const quickActions =
    document.querySelectorAll(
        ".action-item"
    );


quickActions.forEach((action) => {

    action.addEventListener(
        "click",
        () => {

            const actionName =
                action.innerText;

            showToast(
                actionName +
                " action selected!"
            );

        }
    );

});


// ==========================================
// TOAST MESSAGE
// ==========================================


function showToast(message) {

    const existingToast =
        document.querySelector(".toast");


    if (existingToast) {

        existingToast.remove();

    }


    const toast =
        document.createElement("div");


    toast.className =
        "toast";


    toast.innerText =
        message;


    document.body.appendChild(
        toast
    );


    setTimeout(() => {

        toast.classList.add(
            "show"
        );

    }, 10);


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );


        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);

}


// ==========================================
// PROFILE BUTTON
// ==========================================


const editProfile =
    document.querySelector(
        ".edit-profile"
    );


if (editProfile) {

    editProfile.addEventListener(
        "click",
        () => {

            showToast(
                "Edit profile feature coming soon!"
            );

        }
    );

}


// ==========================================
// ADD TOAST CSS DYNAMICALLY
// ==========================================


const toastStyle =
    document.createElement("style");


toastStyle.innerHTML = `

.toast {

    position: fixed;

    bottom: 100px;

    left: 50%;

    transform:
        translateX(-50%)
        translateY(20px);

    background: #222;

    color: white;

    padding: 14px 22px;

    border-radius: 14px;

    font-size: 13px;

    opacity: 0;

    transition: 0.3s;

    z-index: 1000;

    white-space: nowrap;

    box-shadow:
        0 10px 30px
        rgba(0,0,0,0.25);

}

.toast.show {

    opacity: 1;

    transform:
        translateX(-50%)
        translateY(0);

}

`;


document.head.appendChild(
    toastStyle
);
