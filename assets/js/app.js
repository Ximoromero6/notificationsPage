(function() {
    const buttonMark = document.getElementById("markAsReadButton");
    const notifications = document.querySelectorAll(".notification");
    const notificationNumber = document.querySelector(".notificationsNumber");

    buttonMark.addEventListener("click", () => {
        for (let i = 0; i < notifications.length; i++) {
            if (notifications[i].classList.contains("unread")) {
                notifications[i].classList.remove("unread");
            }
        }

        notificationNumber.textContent = "0";
    });
})();