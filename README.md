# Portfolio

A personal portfolio site built with React, MUI, and GSAP, showcasing my development projects. This repo is a work in progress — I'm a self-taught developer building this as both a learning exercise and a real showcase of what I can build. You can see a preview at this link: https://youtu.be/Q_tYQSbMGuU

## Live Projects

### Money Tracker
A full-stack expense and income tracker, featured directly inside the portfolio's projects carousel with live device previews (laptop, tablet, mobile).

**Features:**
- User registration and login with secure, HttpOnly cookie-based authentication (JWT under the hood)
- Add, view, and delete income/expense entries, grouped by month
- Monthly and overall income/expense/net balance summaries
- Fully responsive dark-themed UI

**Stack:**
- Frontend: React, Vite, MUI (Material UI)
- Backend: Node.js, Express, MySQL
- Auth: JWT stored in HttpOnly cookies (not localStorage), with React Context for client-side auth state

## Project Structure

```
/frontend   → React + Vite portfolio and Money Tracker UI
/backend    → Express API, MySQL queries, auth logic
```

## Status

This project is actively evolving. Some things still on my list:
- Deploying the app live (currently runs locally)
- More projects to add to the portfolio carousel
- General polish and edge-case handling

## About This Project

This is my first large full-stack project, and I've used it to learn — and in some cases relearn properly — concepts like component architecture, responsive design, and authentication security (this project originally used `localStorage` for tokens before being migrated to HttpOnly cookies).

Feedback is very welcome.
