# Bihar National College, Patna (B.N. College) — Redesigned Website

A modern, minimalistic, and highly responsive academic website for Bihar National College, Patna. Redesigned from the ground up to offer an elegant, premium, and structured user experience while strictly adhering to classic academic design paradigms and color combinations.

---

## 🏛️ Project Overview

This project is a complete front-end redesign of the official B.N. College Patna website. It transitions the portal into a clean, modern interface featuring custom typography, a robust academic-themed color system, smooth interactive micro-animations, and a highly structured layout for seamless navigation.

### 🎨 Design System & Color Palette
In accordance with design specifications, **no gradient colors** are used. The system relies on custom solid HSL and HEX color tokens that evoke a prestigious academic feel:
*   **Primary Dark (Slate 900):** `#0f172a` — Used for main headers, hero backgrounds, and deep structural divisions.
*   **Secondary Slate (Slate 800):** `#1e293b` — Used for secondary container sections and dynamic navigation elements.
*   **Accent Academic Gold:** `#b59410` — Highlight color for buttons, active states, borders, and notifications.
*   **Light Backgrounds:** `#f8fafc` / `#ffffff` — Crisp, clean surfaces for readability.

---

## 🛠️ Tech Stack & Architecture

To maintain high performance and SEO crawlability, the website is built using a **pure multi-page architecture**:
*   **Markup:** Semantic HTML5 (`index.html` and 56+ sub-pages).
*   **Styling:** Modern Vanilla CSS (`css/style.css`) leveraging custom variables, Flexbox, and CSS Grid layouts.
*   **Scripts:** Vanilla ES6+ JavaScript (`js/components.js` & `js/main.js`).

### Dynamic Navigation Injection
To avoid content duplication and ease maintenance across 60+ HTML files, the global **Header (Mega-Menu)** and **Footer** are dynamically injected at runtime via `js/components.js`. This provides the lightweight maintenance benefits of single-page apps while retaining a standard multi-page structure.

---

## 📁 Key File Structure

```text
├── index.html                    # Homepage (Hero slider, quick links, notice ticker)
├── css/
│   └── style.css                 # Master stylesheet (colors, layout, resets, responsive rules)
├── js/
│   ├── components.js             # Dynamic Header, Mega-Menu, and Footer component injection
│   └── main.js                   # Interactive logic (notice ticker, hero carousel, tab controls)
├── department.html               # Dynamic template for loading specific department details
├── departments.html              # Academic departments overview grid
├── gallery.html                  # Interactive masonry-style image gallery
├── naac.html                     # NAAC accreditation details & reports
├── nirf.html                     # NIRF ranking declarations
├── contact.html                  # Contact information, interactive form, and Google Maps embed
└── [50+ other html pages]        # Sub-pages covering Administration, Alumni, Academics, and Students
```

---

## 🚀 Getting Started

Since the project uses vanilla HTML, CSS, and JavaScript, it can be run locally without any build steps or npm installations.

### Running Locally
To prevent CORS issues when loading page templates or performing fetch requests, serve the directory using any local development server:

#### Using Python
Run the following command in the project root directory:
```bash
python -m http.server 8000
```
Then, open your browser and visit: `http://localhost:8000`

#### Using VS Code Live Server
1. Open the workspace folder in VS Code.
2. Click **Go Live** in the status bar at the bottom of the window.

---

## 📄 License
This project is for academic redesign demonstration purposes. All official college assets and rights belong to Bihar National College, Patna.
