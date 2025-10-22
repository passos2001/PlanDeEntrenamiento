// entrenamiento.js

document.addEventListener("DOMContentLoaded", () => {
    // Marcar navbar activa
    const links = document.querySelectorAll("nav a");
    links.forEach(link => {
        link.classList.remove("active");
        if (link.href.includes("entrenamientos.html")) {
            link.classList.add("active");
        }
    });

    // Manejo de tabs de semanas
    const weekTabs = document.querySelectorAll(".week-tab");
    const weekContents = document.querySelectorAll(".week-content");

    weekTabs.forEach(weekTab => {
        weekTab.addEventListener("click", () => {
            // Remover active de todos los tabs de semanas
            weekTabs.forEach(tab => tab.classList.remove("active"));
            weekContents.forEach(content => content.classList.remove("active"));

            // Activar el tab de semana seleccionado
            weekTab.classList.add("active");
            const targetWeek = document.getElementById(weekTab.dataset.week);
            if (targetWeek) {
                targetWeek.classList.add("active");

                // Resetear los tabs de días para la nueva semana
                const dayTabs = targetWeek.querySelectorAll(".day-tab");
                const dayContents = targetWeek.querySelectorAll(".day-content");

                // Activar el primer día por defecto
                dayTabs.forEach(tab => tab.classList.remove("active"));
                dayContents.forEach(content => content.classList.remove("active"));

                if (dayTabs.length > 0) {
                    dayTabs[0].classList.add("active");
                    const firstDayId = dayTabs[0].dataset.day;
                    const firstDayContent = document.getElementById(firstDayId);
                    if (firstDayContent) {
                        firstDayContent.classList.add("active");
                    }
                }
            }
        });
    });

    // Manejo de tabs de días
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("day-tab")) {
            const clickedDayTab = e.target;
            const currentWeek = clickedDayTab.closest(".week-content");

            if (currentWeek) {
                // Remover active de todos los tabs de días en la semana actual
                const dayTabs = currentWeek.querySelectorAll(".day-tab");
                const dayContents = currentWeek.querySelectorAll(".day-content");

                dayTabs.forEach(tab => tab.classList.remove("active"));
                dayContents.forEach(content => content.classList.remove("active"));

                // Activar el día seleccionado
                clickedDayTab.classList.add("active");
                const targetDay = document.getElementById(clickedDayTab.dataset.day);
                if (targetDay) {
                    targetDay.classList.add("active");
                }
            }
        }
    });
});

// Elementos del sidebBar
const navToggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');


// Toggle sidebar
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
    sidebarOverlay.classList.toggle('active');
});

// Cerrar el sidebar al hacer click
sidebarOverlay.addEventListener('click', () => {
    navToggle.classList.remove('active');
    sidebar.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

// Cerrar sidebar al hacer click en un enlace (Móvil)
const navLinks = document.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            navToggle.classList.remove('active');
            sidebar.classList.remove('active');
            sidebarOverlay.classList.remove('active')
        }
    })
})