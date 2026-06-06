function extractHeadings() {
    const headings = document.querySelectorAll("h1, h2, h3");
    let counters = { 1: 0, 2: 0, 3: 0 };

    return Array.from(headings).map((el, index) => {
        if (!el.id) {
            el.id = "heading-" + index; // ensure clickable target
        }

        let level = parseInt(el.tagName.charAt(1));
        
        // Reset lower levels
        for (let i = level + 1; i <= 3; i++) {
            counters[i] = 0;
        }
        // Increment current level
        counters[level]++;
        
        // Generate numbering (e.g. 1.2.1.)
        let numberingArr = [];
        for (let i = 1; i <= level; i++) {
            if (counters[i] !== 0 || numberingArr.length > 0) {
                numberingArr.push(counters[i]);
            }
        }
        let numbering = numberingArr.join('.') + '. ';

        return {
            text: numbering + el.innerText,
            id: el.id,
            level: el.tagName
        };
    });
}

function createSidebar(headings) {
    const sidebar = document.createElement("div");
    sidebar.id = "toc-sidebar";

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("toc-title-container");

    const logo = document.createElement("img");
    logo.src = chrome.runtime.getURL("icon.png");
    logo.classList.add("toc-logo");

    const title = document.createElement("h3");
    title.innerText = "Table of Contents";

    titleContainer.appendChild(logo);
    titleContainer.appendChild(title);
    sidebar.appendChild(titleContainer);

    headings.forEach(h => {
        const item = document.createElement("div");
        item.innerText = h.text;

        item.classList.add("toc-item");
        if (h.level === "H1") item.classList.add("toc-level-1");
        if (h.level === "H2") item.classList.add("toc-level-2");
        if (h.level === "H3") item.classList.add("toc-level-3");

        item.onclick = () => {
            const target = document.getElementById(h.id);
            const offset = 120; // leaves about '5cm' of space above the title
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });
        };

        sidebar.appendChild(item);
    });

    document.body.appendChild(sidebar);
}

const headings = extractHeadings();
createSidebar(headings);
