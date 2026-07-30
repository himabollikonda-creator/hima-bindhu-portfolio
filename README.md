# Bollikonda Hima Bindhu — Personal Portfolio

A modern, responsive, high-performance personal portfolio website for **Bollikonda Hima Bindhu**, B.Tech Computer Science (AI & ML) student at Sir Padampat Singhania University (SPSU).

![Portfolio Preview](https://img.shields.io/badge/Status-Active-emerald)
![Tech Stack](https://img.shields.io/badge/Tech-React_18_%7C_TypeScript_%7C_Tailwind_CSS_%7C_Vite-blue)

---

## 🌟 Features

- **Personal Profile & Bio**: Showcases academic journey at SPSU (2025–2029), technical specializations, and career objectives.
- **Interactive Portfolio Sections**:
  - **Hero**: Quick stats, contact buttons, profile image display.
  - **About & Bio**: Detailed overview, background, core values, and institution highlights.
  - **Skills & Tech Stack**: Categorized view of programming languages (Python, C, SQL), AI/ML, web development, software testing tools, and soft skills.
  - **Certifications**: Verified credentials (e.g., Coursera Software Testing by University of Minnesota).
  - **Work Experience & Simulations**: Hands-on exposure and virtual job simulations.
  - **Hackathons & Achievements**: Competitions, event participation, and awards.
  - **Leadership & Campus Ambassador**: Engagement initiatives and leadership roles.
  - **Interactive Contact Form**: Real-time validation, message logs, and automated email integration.

---

## 📧 Email Configuration

The portfolio features a double-layered email integration system designed to work seamlessly both on full-stack servers and static hosting platforms (like GitHub Pages):

1. **Direct API Email Dispatch (Resend SDK)**:
   - When running on a server (e.g., Cloud Run / Vercel / Node backend), set `RESEND_API_KEY` in your environment variables.
   - Form submissions trigger `/api/contact`, sending an automated, formatted HTML email directly to **`himabollikonda@gmail.com`**.

2. **Smart Mail Client Fallback**:
   - If `RESEND_API_KEY` is omitted or when hosted on a pure static provider like GitHub Pages, the contact form records the message locally and automatically launches the visitor's default mail client pre-filled with the message addressed to `himabollikonda@gmail.com`.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm or yarn or bun

### Local Development Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/himabindhu-b/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables (Optional for direct emails)**:
   Create a `.env` file at the root:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

---

## 📦 Building for Production

To create an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm start
```

---

## 🌐 Deploying to GitHub Pages

If you want to deploy the static frontend to GitHub Pages:

1. Install `gh-pages` (optional helper):
   ```bash
   npm install -D gh-pages
   ```

2. In `vite.config.ts`, ensure `base` matches your GitHub repository name:
   ```ts
   export default defineConfig({
     base: '/repository-name/',
     // ...
   });
   ```

3. Build and deploy:
   ```bash
   npm run build
   npx gh-pages -d dist
   ```

---

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Lucide React Icons, Motion
- **Backend**: Express (Node.js) with Resend Email API integration
- **Styling**: Modern, high-contrast dark palette (`#17223B` deep dark canvas with `#C9A24B` gold accents)

---

## 👤 Contact & Links

- **Name**: Bollikonda Hima Bindhu
- **Email**: [himabollikonda@gmail.com](mailto:himabollikonda@gmail.com)
- **LinkedIn**: [hima-bindhu-0106993b3](https://linkedin.com/in/hima-bindhu-0106993b3)
- **GitHub**: [himabindhu-b](https://github.com/himabindhu-b)
