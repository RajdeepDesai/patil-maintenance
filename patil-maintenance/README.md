# Patil Maintenance website

A React + Vite website for Patil Maintenance, serving North Goa.

## Run locally on Windows

1. Install Node.js LTS if it is not installed.
2. Open this folder in VS Code.
3. Open Terminal > New Terminal.
4. Run:

   ```powershell
   npm install
   npm run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173/`).

## Before publishing

- Confirm which phone number supports WhatsApp and update the links in `src/App.jsx` if needed.
- Replace the illustrative stock photos with real business photos when available. The gallery currently states that its photos are illustrative.
- Confirm that both phone numbers are correct and that the business name is consistently written as **Patil Maintenance**.
- Deploy the project to Vercel or another static hosting provider.
- After deployment, add the final domain to Google Search Console and submit a sitemap. The sitemap should be created with the real public domain after it is chosen.
- Create or claim the business's Google Business Profile and complete Google's verification steps.

## SEO notes

`index.html` includes a page title, description, social sharing metadata, and basic LocalBusiness structured data. `public/robots.txt` allows search crawlers. These help discovery but do not guarantee indexing or rankings. Do not publish until contact details are verified.
