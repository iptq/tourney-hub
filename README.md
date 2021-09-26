# tourney-hub

First, create `.env`:

```
THUB_PUBLIC_URL=http://localhost:3000
THUB_SECRET_KEY=whatever-you-want

# Get these from the osu! website
THUB_OSU_CLIENT_ID=1234
THUB_OSU_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxx
```

Then, run:

```
npm i
npm run dev
```

- Database models live in `src/lib/models`
