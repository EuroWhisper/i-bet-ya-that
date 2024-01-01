This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Email sending

The idea right now is to use Amazon SES to send emails. You need to set the `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` environment variables to your AWS credentials in order to use the app.

## Prisma ORM

This project uses [Prisma](https://www.prisma.io/) as an ORM. You need to run `npx prisma generate` to generate the Prisma client and add the `DATABASE_URL` environment variable to your database URL in order to use the app. E.G.:
`DATABASE_URL=postgresql://postgres:xxxxxxxxxx@db.xxxxxxxxxx.xxxxxxxxx.co:5432/postgres`

## OpenAI API key

You need to set the `OPENAI_API_KEY` environment variable to your OpenAI API key in order to use the app.

## Rate limiting

In order to cut expenses, there's a heavy rate limit on the ChatGPT related endpoints currently.
