document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[include-html]").forEach(el => {
        const file = el.getAttribute("include-html");
        fetch(file)
            .then(res => {
                if (!res.ok) throw new Error(`Failed to load ${file}`);
                return res.text();
            })
            .then(data => {
                el.innerHTML = data;
                el.removeAttribute("include-html");
            })
            .catch(err => {
                el.innerHTML = `<p style="color:red;">Error: ${err.message}</p>`;
            });
    });
});
