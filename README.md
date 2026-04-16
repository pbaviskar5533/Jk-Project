<div align="center">
  <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&h=300&q=80" alt="JK Pulse Header Banner" width="100%" />

  # 🌐 JK Pulse

  **Next-Generation Regional News Platform & SPA**  
  *Unapologetic journalism mixed with world-class UX.*

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](#)
  [![Vanilla CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](#)
  [![Vanilla JS](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](#)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](#)
  [![Live Demo](https://img.shields.io/badge/Live-Demo-E8003D.svg?style=flat)](#)
</div>

---

## 📖 Overview

**JK Pulse** is a state-of-the-art, dark-mode-first Single Page Application (SPA) designed exclusively for regional and global news distribution. Built completely without heavy frameworks or CSS libraries (No Bootstrap/Tailwind), this platform delivers buttery-smooth horizontal sliding animations, complex internal routing, and infinite data fetching all using **Pure Vanilla Javascript, HTML, and CSS**.

## ✨ Key Features

- **⚡ Zero-Reload SPA Routing:** Instantaneous navigation across 12 unique sections (National, World, Politics, Sports, etc.).
- **📡 Live News Fetching API:** Dynamically pulls and formats real-world headlines from global News API endpoints on the fly.
- **🎨 Proprietary Glassmorphism System:** Deep navy (`#0A0F1E`) and electric crimson (`#E8003D`) styling combined with frosted backdrop-filters.
- **📱 True Mobile-First Design:** Features a dedicated bottom app-style navigation bar, hamburger drawer, and fluid grid layouts.
- **🤝 Social Micro-Interactions:** Custom built X (Twitter) style heart-burst animations, real-time comment slider drawers, and robust local-storage persistence for Bookmarks & Likes.

---

## 🏗️ Architecture & Data Flow

```mermaid
graph TD
    UI[HTML Front-End] --> |Trigger Click/Scroll| Router[JS SPA Router]
    Router --> |Push State / Render View| Engine[JS Render Engine]
    
    subAPI((Public News API)) -.-> |JSON Payload| Fetch[Async Fetcher Module]
    Fetch --> |Data Maps to Objects| Engine
    
    Engine --> |Hydrate DOM| Grid[CSS Grid Subsystem]
    Engine --> |Local Storage| State[(App State Management)]
    
    State --> |Persist| Bookmarks[Saved Articles]
    State --> |Persist| Likes[Article Likes]
    State --> |Persist| Theme[Dark/Light Theme]
    
    style UI fill:#E8003D,stroke:#333,stroke-width:2px,color:#fff
    style Engine fill:#0A0F1E,stroke:#F5C842,stroke-width:2px,color:#fff
    style State fill:#111829,stroke:#6B7A99,stroke-width:2px,color:#fff
    style subAPI fill:#28a745,color:#fff
```

---

## 📸 Interface Showcases

<div align="center">
    <img src="screenshots/home_dark.png" width="48%" alt="Dark Mode Home Screen" />
    <img src="screenshots/article_view.png" width="48%" alt="Article Overlay Modal" />
</div>

> **Left:** The default Dark Mode view showcasing the Parallax Carousel and Breaking Tracker. **Right:** The immersive full-page Article Override Modal with tracking progress bars.

---

## 🚀 Getting Started

Because **JK Pulse** uses zero external dependencies, getting it up and running is as easy as starting a static file server!

### 1. Clone the repository
```bash
git clone https://github.com/your-username/jk-pulse.git
cd jk-pulse
```

### 2. Run a Local Server
**Using Python:**
```bash
python -m http.server 8000
```
**Using Node (npx):**
```bash
npx serve .
```

### 3. Start Browsing!
Navigate your browser to `http://localhost:8000`.

---

## 📂 Project Structure
```text
📦 jk-pulse
 ┣ 📜 index.html    # Base skeletal structure, skeletons, modals & navigation
 ┣ 📜 style.css     # 900+ lines of custom glassmorphism, responsive queries & animations 
 ┣ 📜 app.js        # Global state, SPA router mechanics, and API fetching logic
 ┗ 📜 README.md     # You are here!
```

---

## 👨‍💻 Developer & Motivation

Inspired by premium journalistic platforms and highly animated interfaces, **JK Pulse** attempts to prove that complex, enterprise-looking products can heavily rely on the basic building blocks of the web—HTML, CSS, and JS—without sacrificing code maintainability or load times.

<div align="center">
  <br>
  <i>Designed and hand-coded to perfection.</i>
  <br><br>
</div>
