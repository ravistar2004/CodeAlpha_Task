const contactMedia = document.querySelector(".contact-media");

const contactList = [
    {
        id: 1,
        icon: "ph-phone-call",
        label: "Phone",
        value: "+91 7970832522",
        href: "tel:+917970832522",
    },
    {
        id: 2,
        icon: "ph-envelope",
        label: "E-mail",
        value: "ravistar2004@gmail.com",
        href: "mailto:ravistar2004@gmail.com",
    },
    {
        id: 3,
        icon: "ph-map-pin",
        label: "Country",
        value: "India",
        href: "#",
    },
];

const renderContact = () => {
    if (!contactMedia) return;

    contactMedia.innerHTML = contactList
        .map(
            (item) => `
        <div class="media">
            <span>
                <i class="ph ${item.icon}" aria-hidden="true"></i>
            </span>
            <div class="contact-value">
                <p>${item.label}</p>
                <a href="${item.href}">${item.value}</a>
            </div>
        </div>
    `
        )
        .join("");
};

renderContact();

const showToast = (text, type = "error") => {
    if (typeof Toastify === "undefined") {
        alert(text);
        return;
    }

    const backgrounds = {
        success: "linear-gradient(135deg, #0a7d2e, #09de26)",
        error: "linear-gradient(135deg, #8b0000, #ce1010)",
    };

    Toastify({
        text,
        duration: 3000,
        gravity: "top",
        position: "center",
        close: true,
        stopOnFocus: true,
        style: {
            background: backgrounds[type] || backgrounds.error,
            borderRadius: "8px",
            fontSize: "1rem",
            fontWeight: "600",
        },
    }).showToast();
};

const setButtonLoading = (btn, isLoading) => {
    if (!btn) return;

    if (isLoading) {
        if (!btn.dataset.originalText) {
            btn.dataset.originalText = btn.innerHTML;
        }
        btn.innerHTML = "Sending...";
        btn.disabled = true;
        btn.classList.add("is-sending");
        return;
    }

    btn.innerHTML = btn.dataset.originalText || "Send Message";
    btn.disabled = false;
    btn.classList.remove("is-sending");
};

const initContactForm = () => {
    const contactForm = document.getElementById("contact-form");
    const sendBtn = document.getElementById("send-msg");

    if (!contactForm || !sendBtn || contactForm.dataset.bound === "true") return;

    contactForm.dataset.bound = "true";
    let isSubmitting = false;

    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        event.stopImmediatePropagation();

        if (isSubmitting) return;

        const name = document.getElementById("name")?.value.trim();
        const email = document.getElementById("email")?.value.trim();
        const phone = document.getElementById("phone")?.value.trim();
        const message = document.getElementById("message")?.value.trim();

        if (!name || !email || !phone || !message) {
            showToast("All fields are mandatory!", "error");
            return;
        }

        isSubmitting = true;
        setButtonLoading(sendBtn, true);

        try {
            await emailjs.send("service_np8hah6", "template_gydszkm", {
                name,
                email,
                phone,
                message,
            });

            showToast("Message sent successfully!", "success");
            contactForm.reset();
        } catch (error) {
            showToast("Failed to send message. Try again.", "error");
            console.error("EmailJS error:", error);
        } finally {
            isSubmitting = false;
            setButtonLoading(sendBtn, false);
        }
    });
};

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initContactForm);
} else {
    initContactForm();
}
