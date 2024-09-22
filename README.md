## Advices for future improvements
- [Learn Next.js](https://nextjs.org/learn) to understand this project.


## Technology stack
- Framefork [Next.js](https://nextjs.org/docs)
- DB [MongoDB](https://www.mongodb.com/)
- Auth [AuthJs](https://authjs.dev/reference/nextjs)


## Project knowledge

[`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

This project was initialized from a [Next.js Starter](https://nextjs.org/), and contains the following changes:

1. The `tsconfig.json` was updated to point the `@` alias to `./src` instead of `./`
2. The `tailwind.config.ts` was updated to include files in `./src`
3. The `src` folder was created to contain the FSD layers
4. The `pages` folder was created with a `.gitkeep` file to prevent Next.js from treating `src/pages` as a Pages router
5. The code of `app/layout.tsx` was moved to `src/app/layouts/index.tsx`
6. The code of `app/page.tsx` was moved to `src/pages/home/ui/HomePage.tsx`
7. The `app/globals.css` was moved to `src/app/styles/globals.css`
8. Another page, `/deeper`, was added