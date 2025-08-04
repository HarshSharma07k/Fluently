# 🌍 Fluently — Learn Languages Smarter

**Fluently** is a full-featured Duolingo-inspired SaaS platform for interactive language learning. Built with **Next.js 15**, **TypeScript**, **Drizzle ORM**, **Neon DB**, and **Stripe**, it offers an engaging, gamified experience for learners and a scalable architecture for developers.

---

## ✨ Features

- 🎯 **Gamified Learning** — XP, progress tracking, dynamic challenges
- 🧠 **Smart Lessons** — Lessons adapt to your pace and accuracy
- 🔐 **Authentication with Clerk** — Modern, secure auth system
- 💳 **Stripe Integration** — Premium subscriptions, billing, and webhooks
- 🗃 **Drizzle + Neon** — End-to-end type-safe database with PostgreSQL
- ⚡ **Blazing Fast UX** — Powered by Next.js App Router and Server Components

---

## 🧰 Tech Stack

| Tool                  | Description                                 |
|-----------------------|---------------------------------------------|
| [Next.js 15](https://nextjs.org/)      | App Router, SSR, Server Actions              |
| [TypeScript](https://www.typescriptlang.org/) | Type safety and robust typing       |
| [Drizzle ORM](https://orm.drizzle.team/)      | Type-safe SQL ORM for PostgreSQL      |
| [Neon DB](https://neon.tech/)                 | Serverless Postgres with branching   |
| [Clerk](https://clerk.dev/)                   | Authentication & user management     |
| [Stripe](https://stripe.com/)                 | Billing, subscriptions, payments     |
| [Tailwind CSS](https://tailwindcss.com/)      | Utility-first modern styling         |

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/fluently.git
cd fluently
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory:

```env
# Neon DB
DATABASE_URL=your_neon_database_url

# Clerk
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Run Database Migrations

```bash
npx drizzle-kit push
```

### 5. Start the Dev Server

```bash
npm run dev
```

Go to `http://localhost:3000` to explore Fluently!

---

## 📁 Project Structure

```
fluently/
├── app/               # Next.js App Router: routes, layouts, server actions
├── components/        # Reusable UI components
├── db/                # Drizzle schema and config
├── lib/               # Utility functions and helpers
├── middleware.ts      # Clerk middleware integration
├── public/            # Static assets
├── styles/            # Tailwind & global styles
├── types/             # Shared TypeScript types
└── env.mjs            # Environment loader
```

---

## 💳 Stripe Integration

- Checkout flow for premium subscriptions
- Billing portal access for users
- Webhooks to manage subscription status
- Role-based access: Free vs Premium

---

## 🔐 Authentication with Clerk

- Sign-up and sign-in pages
- Session handling via Clerk SSR
- Role stored in user metadata
- Middleware integration (`middleware.ts`)

---

## 🧪 Testing (Planned)

- ✅ Unit tests with [Vitest](https://vitest.dev/)
- 🔄 Integration tests with [Playwright](https://playwright.dev/)
- 🚀 CI/CD via GitHub Actions

---

## 📦 Deployment

Recommended platforms:

- **Vercel** — Hosting and frontend
- **Neon** — Serverless Postgres DB
- **Clerk** — Authentication and user management

Set all environment variables in the Vercel dashboard before going live.

---

## 🤝 Contributing

Contributions are welcome!

```bash
git checkout -b feature/your-feature
git commit -m "feat: added new feature"
git push origin feature/your-feature
```

Then open a pull request 🚀

---

## 📜 License

Licensed under the [MIT License](LICENSE).

---

## 🙌 Acknowledgements

- Inspired by [Duolingo](https://duolingo.com)
- Built with ❤️ using Next.js, Drizzle, Clerk, Neon, and Stripe
- Special thanks to **Code with Antonio**

---

## 👨‍💻 Author

**Harsh Sharma**  
[GitHub](https://github.com/HarshSharma07k) | [LinkedIn](https://www.linkedin.com/in/harsh-sharma-034433257)
