# 🧑‍💼 User Profile — React + Tailwind CSS

A modern, responsive User Profile Interface built using React and Tailwind CSS.
This project displays a user’s personal information, professional experiences, and recommendations inside a sleek, tabbed profile widget — inspired by Salesforce-style UI.

## 🚀 Features

- 🧭 Tabbed Navigation — “About Me”, “Experiences”, and “Recommended” sections with smooth transitions.
- 🎨 Tailwind CSS Styling — Clean, modern UI with rounded cards, shadows, and dark theme.
- 💡 Active Tab Highlight — Animated tab indicator and shadow effect for the active section.
- 📱 Fully Responsive — Works across desktop and mobile screens.
- ⚡ Vite + React Setup — Fast development environment with hot reload.

## 🛠️ Tech Stack

- Frontend: React.js
- Styling: Tailwind CSS
- Build Tool: Vite
- Language: JavaScript (ES6+)

## 📂 Folder Structure
```
user-profile/
├── src/
│   ├── components/
│   │   └── ProfileTabs.jsx      # Tabbed Profile component
|   |   └── GalleryWidgets.jsx   # gallery Image component
│   ├── App.jsx                  # Main component
│   ├── index.css                # Tailwind CSS imports
│   └── main.jsx                 # React entry point
├── public/                      # Static assets
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🧑‍💻 Component Overview

### ProfileTabs.jsx
- Displays three tabs:
- About Me: Personal introduction
- Experiences: Work background and achievements
- Recommended: Feedback and testimonials
- Each tab dynamically renders content with active-state styling.

### GalleryWidget.jsx
- Displays a button to enter image URL
- Entered image will display in pre-defined grid
- All images will dynamically render