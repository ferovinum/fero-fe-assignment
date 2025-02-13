# ferovinum-fe-assignment

Ferovinum helps companies in the wine and spirits industry scale.

In this assignment, we showcase a very small slice of our business. In a typical scenario, a company
would get funding from us by selling us their inventory (a certain quantity at a certain price).

This is a simple project that uses react and typescript in this particular use case for a client.
They can see their inventory that they've sold to us and can sell more.

## Expectations

You are expected to get familiar with this solution and come prepared for a code pairing interview.
The best place to start is `src/app/page.tsx`. It has most if not all of the functionality.

You are not expected to have depth in any of:

- tailwind
- shadcn/ui
- next.js
- @tanstack/table
- json-server

In the interview, we'll dig into your understanding of the fundamentals of web development, in
addition to your depth of understanding of TypeScript and react. We'll explore aspects of the
current codebase, maybe fix a few bugs, and implement some features on top.

Good luck!

## Getting Started

This project has a JSON server that runs on top of `resources/db.json`. To start the  server, run:

```bash
npm run serve
```

This starts the API at [http://localhost:4001](http://localhost:4001).

We only make use of 2 APIs:

```bash
POST /stocks
GET /stocks?client_id=
```

In another terminal, run the app:

```bash
npm run dev
```

Open [http://localhost:4000](http://localhost:4000) with your browser to see the result.

## Learn More

To learn more about the technology used, take a look at the following resources:

- [React Documentation](https://react.dev/learn#) - learn about React.
- [TypeScript Documentation](https://www.typescriptlang.org/) - learn about TypeScript.
- [Tailwind Documentation](https://tailwindcss.com/docs/styling-with-utility-classes) - learn about Tailwind.
- [shadcn/ui Documentation](https://ui.shadcn.com/docs) - learn about shadcn/ui.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tanstack Table Documentation](https://tanstack.com/table/latest) - learn about Tanstack Table.
- [JSON Server Documentation](https://github.com/typicode/json-server/tree/v0?tab=readme-ov-file#getting-started) - learn about JSON server.
