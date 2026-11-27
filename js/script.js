/* ============================================================
   Loraine Krystel Acosta — Portfolio
   Interactions: mobile nav, scroll spy, reveals, contact form
   ============================================================ */

(function () {
    "use strict";

    /* ---------- Navbar scroll state ---------- */
    const navbar = document.getElementById("navbar");

    function onScroll() {
        navbar.classList.toggle("scrolled", window.scrollY > 40);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile navigation ---------- */
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");

    navToggle.addEventListener("click", function () {
        const open = navMenu.classList.toggle("open");
        navToggle.classList.toggle("open", open);
        navToggle.setAttribute("aria-expanded", String(open));
        document.body.style.overflow = open ? "hidden" : "";
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            navMenu.classList.remove("open");
            navToggle.classList.remove("open");
            navToggle.setAttribute("aria-expanded", "false");
            document.body.style.overflow = "";
        });
    });

    /* ---------- Scroll spy (active nav link) ---------- */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    const spyObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    navLinks.forEach(function (link) {
                        link.classList.toggle(
                            "active",
                            link.getAttribute("href") === "#" + entry.target.id
                        );
                    });
                }
            });
        },
        { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(function (section) {
        spyObserver.observe(section);
    });

    /* ---------- Reveal on scroll ---------- */
    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    revealObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach(function (el) {
        revealObserver.observe(el);
    });

    /* ---------- Contact form (demo) ---------- */
    const form = document.getElementById("contactForm");
    const status = document.getElementById("formStatus");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !subject || !message) {
            status.textContent = "Please fill in all fields before sending.";
            status.classList.add("error");
            return;
        }

        if (!emailPattern.test(email)) {
            status.textContent = "Please enter a valid email address.";
            status.classList.add("error");
            return;
        }

        status.classList.remove("error");
        status.textContent =
            "Thank you, " + name + "! Your message has been noted (demo — no data was sent).";

        form.reset();
    });

    /* ---------- Footer year ---------- */
    document.getElementById("year").textContent = new Date().getFullYear();
})();
