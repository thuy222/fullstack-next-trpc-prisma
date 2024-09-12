**Prerequisites:**

- nodejs (from v18)
- npm (from v6)
- pnpm (from v9)
- docker installed

**Clone the repository:**

```bash
git clone https://github.com/thuy222/fullstack-next-trpc-prisma.git
```

**Set up env:**

Copy `.env.test` to `.env` (Since the ".env" file is .gitignored)

**Install dependencies:**

```bash
yarn install|| npm install
```

**Docker set up**

```bash
docker compose up -d
```

**Prisma setup**

```bash
npx prisma migrate dev
npm run prisma-seed
```

**Run app:**

```bash
yarn dev || npm run dev
```

**See database**

```bash
npx prisma studio
```
