# EXTREME EXE

A premium, futuristic developer website to browse, search, and copy code snippets across 10 languages. Built with vanilla HTML, CSS, and JavaScript.

## Quick Start

1. Open `index.html` in a browser, or serve the folder with any static server.
2. Without Firebase, the site runs with **sample methods** and in-memory storage (admin add/edit/delete works locally for the session).

## Firebase Setup (optional)

To persist methods in a database:

1. Create a project at [Firebase Console](https://console.firebase.google.com).
2. Enable **Firestore Database** (Create database → Start in test mode for dev).
3. Copy your project config from Project settings → General → Your apps.
4. In `script.js`, replace the `firebaseConfig` object with your values:

```js
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

5. In Firestore, create a collection named **`methods`**. Documents will have: `name`, `description`, `category`, `code`, `dateAdded` (string, ISO date).

## Admin Panel

- Open the **hidden admin** by visiting `#admin` (e.g. `https://yoursite.com/#admin`).
- Default password: **`admin123`**. Change it in `script.js` by editing `ADMIN_PASSWORD`.
- From the admin panel you can add, edit, and delete methods. With Firebase, changes appear on the site immediately.

## Deploy on Vercel

- Push the project to GitHub, then import the repo in [Vercel](https://vercel.com). Deploy as a static site (no build step).
- Or run `npx vercel` in the project folder and follow the prompts.

## Files

- `index.html` — Structure, hero, methods grid, modal, admin section
- `style.css` — Dark theme, neon/glassmorphism, animations, responsive layout
- `script.js` — Particle.js, AOS, search/filters, Firebase/Firestore, admin CRUD
