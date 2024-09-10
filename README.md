### Prerequisites

Before you begin, ensure you have the following installed:

- nodejs (from v18)
- npm (from v6)
- pnpm (from v9)
- docker

### How to run project

1. **Clone the repository:**

   ```bash
   git clone
   ```

2. **Set up env:**

   - Copy `.env.test` to `.env`

3. **Install dependencies:**

   ```bash
   yarn || npm
   ```

4. **Docker set up**

   ```bash
   docker compose up -d
   ```

5. **Prisma setup**

   ```bash
   npx prisma migrate dev
   npm run prisma-seed
   ```

6. **Start the backend server:**

   ```bash
   npm run dev || yarn dev
   ```
