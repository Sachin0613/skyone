##  **SkyOne Esport**

````markdown
# 🎮 SkyOne ESP – Esports Gaming Platform

A next-generation **Free Fire esports platform** built for competitive players, teams, and creators.  
SkyOne ESP includes tournaments, leaderboards, player profiles, 3D landing page, merchandise, Discord integration, and more — delivering a premium gaming experience.

🚀 **Live Demo:** https://skyoneesport.vercel.app  
📌 **GitHub Repo:** https://github.com/Sachin0613/skyone 

---

## ⭐ Features

### 🔥 Core Modules
- ⚔ **Tournaments System** – upcoming tournaments section and dynamic modules  
- 👤 **Player Profile** – UID, phone, one-link, stats, achievements  
- 🏆 **Leaderboards** – top players and rankings  
- 📺 **Video-based Hero Section** – esports intro video  
- 💬 **Discord Integration** – community and updates  
- 🤝 **FAQ Section** – detailed guidelines for players  
- 🛒 **Merchandise Shop** – jerseys, hoodies, caps, keychains  
- 🔥 **3D Animated Landing Page** using Three.js & React-Three-Fiber  
- 📱 **Fully Responsive** across all devices  

### 🎨 UI Experience
- Neon futuristic UI  
- Smooth Framer Motion animations  
- Mobile-optimized 3D fallback  
- Dark glassmorphism design  

---

## 🧰 Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Frontend** | React, TypeScript, Tailwind CSS, Framer Motion, Three.js (R3F) |
| **Backend** | Convex (Realtime DB + Auth) |
| **Build Tool** | Vite |
| **Deployment** | Vercel |
| **Animation** | Framer Motion, R3F Float/Distort materials |


## 📂 Folder Structure

```bash
SkyOne-ESP/
 ├── public/
 │    ├── assest/
 │    │     ├── ff.mp4
 │    │     ├── intro.mp4
 │    │     ├── jersey.png
 │    │     ├── cap.png
 │    │     ├── hoodie.png
 │    │     └── key.png
 │    ├── favicon.ico
 │    └── og-image.png
 │
 ├── src/
 │    ├── components/
 │    │     ├── Hero3D.tsx
 │    │     ├── FAQ.tsx
 │    │     ├── Merchandise.tsx
 │    │     └── Profile
 │    │           └── ProfilePage.tsx
 │    ├── convex/
 │    │     └── *_generated files
 │    ├── App.tsx
 │    ├── main.tsx
 │    └── index.css
 │
 ├── convex/
 │    ├── auth.ts
 │    ├── schema.ts
 │    └── functions...
 │
 ├── package.json
 ├── tsconfig.json
 ├── vite.config.js
 └── README.md
````

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Sachin0613/skyone
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup Convex backend

Create `.env.local` at project root:

```
CONVEX_DEPLOYMENT=<your-convex-deployment-url>
VITE_CONVEX_URL=<your-convex-url>
```

Deploy convex:

```bash
npx convex dev
```

### 4️⃣ Start the development server

```bash
npm run dev
```

---

## 🔌 API (Convex)

### Auth

* `auth.loggedInUser`
* `auth.updateUserName`
* `auth.updateUserImage`
* `auth.generateUploadUrl`

### Data Models

* Users
* Profiles
* Tournaments
* Stats

---

## 🤝 Contributing

Contributions are welcome!
Feel free to:

* create PRs
* open issues
* suggest new features

---

## 📜 License

This project is licensed under the **MIT License**.

---

## ⭐ Show Your Support

If you like this project, please ⭐ star the repository — it motivates future updates!

