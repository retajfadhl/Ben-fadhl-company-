document.addEventListener("DOMContentLoaded", () => {
    const stats = document.querySelectorAll(".stat-number");

    stats.forEach(stat => {
        const target = +stat.getAttribute("data-target");
        let count = 0;
        const increment = target / 100;

        const update = () => {
            if (count < target) {
                count += increment;
                stat.innerText = Math.ceil(count);
                setTimeout(update, 20);
            } else {
                stat.innerText = target;
            }
        };
        update();
    });
});