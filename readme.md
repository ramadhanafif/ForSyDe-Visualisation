# Cytoscape - ForSyDe Visualisation

## How to deploy this repo

1. Clone the repo, of course.
2. Download node js, look [here on how to do it](https://nodejs.org/en/download).
   Make sure to have at least v20 and above!
3. Download the tooling needed for development.

```bash
npm install
```

4. start the development server

```bash
npm run dev --open
```

5. your browser shoudl open automatically. open your browser at <http://localhost:5173>

6. if you want to build for deployment (not needed if you just want to see the outcome)

```bash
npm run build
```

the resulting build should exist in `./dist` directory.
