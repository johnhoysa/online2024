Build to do:
Make sure build is working as I want it to
- npm run dev also needs to run a watch command
- move images out of src
- make sure only files I want are moved.
- move template/index into dist

Site to do:
- Fix type and spacing issues desktop
- Fix other views

Content to do:
- continue to create content

~~
Tailwind is now compiled with PostCSS
Current: npm run build
A to do item is to add a watch command 

OLD: Tailwind build command for now: 
npx tailwindcss -i ./src/css/input.css -o ./dist/css/output.css --watch

~~

Vite has been added to site:
"npm run dev": "vite", // start dev server, aliases: `vite dev`, `vite serve`
"npm run build": "vite build", // build for production
"npm run preview": "vite preview" // locally preview production build

currently index is located here: [/templates/index.html](http://localhost:3000/templates/index.html)
