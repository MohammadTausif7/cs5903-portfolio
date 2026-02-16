# Portfolio Website

This is the personal portfolio website for Tausif Ibrahim Mohammad. It is built with HTML, CSS, and vanilla JavaScript, featuring modern clean aesthetics, dark/light mode toggle, and interactive background animations.

## Project Structure

```
portfolio-cs5903/
├── index.html        # Main entry point
├── assets/
│   ├── css/
│   │   └── style.css # Main stylesheet
│   ├── js/
│   │   └── script.js # Animations and logic
│   └── images/
│       └── profile.jpg # Profile picture
└── README.md         # This file
```

## Running Locally

You can run the project locally using `npm`:

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm start
    ```
    This will open the site in your browser at `http://localhost:3000` and automatically reload when you make changes.

## How to Deploy

Since this is a static site, you can deploy it easily to various platforms:

### 1. GitHub Pages (Recommended)
1.  Initialize a git repository: `git init`
2.  Add files: `git add .`
3.  Commit: `git commit -m "Initial commit"`
4.  Push to a GitHub repository.
5.  Go to **Settings > Pages** in your repository and set the source to `main` branch.

### 2. Vercel
1.  Install Vercel CLI or use the web dashboard.
2.  Import your GitHub repository.
3.  Vercel will automatically detect the static file structure.
4.  Click **Deploy**.

### 3. Netlify
1.  Drag and drop the `portfolio-cs5903` folder into the Netlify dashboard drop zone.
2.  It will be published instantly.

## Customization

-   **Profile Image**: Replace `assets/images/profile.jpg` with your own image.
-   **Content**: Edit `index.html` to update text, projects, and experience.
-   **Styles**: Edit `assets/css/style.css` to change colors or animations.
