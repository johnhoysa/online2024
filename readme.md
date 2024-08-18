Tailwind build command for now: 
npx tailwindcss -i ./src/input.css -o ./src/output.css --watch

Once I get a JS build going I will need to create a distribute folder and will then update the output path.

Vite has been added to site:
"npm run dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
"npm run build": "vite build", // build for production
"npm run preview": "vite preview" // locally preview production build

currently index is located here: [/templates/index.html](http://localhost:3000/templates/index.html)
