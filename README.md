# Japan 110: Introduction to Japanese Popular Culture

## Course Module for Canvas LMS

This repository contains three interactive online course modules for Japan 110, each with 4 distinct units, designed to be embedded as a page in Canvas LMS.

### Available Modules:
1. **Module 1** (`index.html`) - "Pop Culture and the Warring States" - Classic design
2. **Module 2** (`module2.html`) - "Pop Culture and Bakumatsu" - 2000s PS2 JRPG aesthetic
3. **Module 3** (`module3.html`) - "Pop Culture and the Future" - 2020s Cyberpunk aesthetic

## Features

### Module Structure
- **4 Visually Distinct Units**: Each unit is color-coded and can be navigated using buttons or keyboard arrows
- **Smooth Navigation**: Switch between units with intuitive navigation buttons
- **Persistent State**: Automatically remembers the last unit you were viewing

### Each Unit Includes:
1. **📖 Reading Material**: Links to textbook chapters and PDF resources
2. **🎥 Video Lecture**: Embedded Canvas video player
3. **💬 Discussion Board**: Live discussion widget showing recent posts
4. **✓ Quiz Link**: Direct link to Canvas quiz for the unit

## Files

### Module 1 (Original - "Pop Culture and the Warring States")
- `index.html` - Main course module page with all 4 units
- `styles.css` - Classic styling for visually distinct units and responsive design
- `script.js` - JavaScript for unit navigation and interactivity

### Module 2 ("Pop Culture and Bakumatsu" - 2000s Style)
- `module2.html` - Bakumatsu-themed module with 2000s PS2 JRPG aesthetics
- `module2.css` - Vibrant purple/pink/gold neon styling with retro gaming look
- Discussion widgets: 4, 5, 6, 7

### Module 3 ("Pop Culture and the Future" - 2020s Style)
- `module3.html` - Future-themed module with 2020s cyberpunk aesthetics
- `module3.css` - Cyan/magenta neon with holographic effects
- Discussion widgets: 8, 9, 10, 11

## Setup Instructions

### Option 1: Embed Directly in Canvas

1. Go to your Canvas course
2. Navigate to **Pages** → **+ Page**
3. Click the **HTML Editor** button (`</>`)
4. Copy the entire contents of `index.html`
5. Paste into the HTML editor
6. Add the CSS and JavaScript inline or link to hosted versions
7. Click **Save**

### Option 2: Host on GitHub Pages (Recommended for Easy Updates)

**This repository is configured for automatic GitHub Pages deployment!**

1. In repository settings, go to **Settings** → **Pages**
2. Under "Build and deployment", set source to **GitHub Actions**
3. Push changes to the `main` branch - the site will automatically deploy
4. Your page will be available at: `https://quinna-create.github.io/Japan-110-Introduction-to-Japanese-Popular-Culture/`
5. Embed in Canvas using an iframe:
   ```html
   <iframe src="https://quinna-create.github.io/Japan-110-Introduction-to-Japanese-Popular-Culture/" 
           width="100%" 
           height="800px" 
           style="border: none;">
   </iframe>
   ```

**✅ Automatic Updates:** Every time you merge a PR to the `main` branch, GitHub Actions will automatically rebuild and deploy your site within 1-2 minutes!

## Customization

### Updating Video Content
Each unit has a unique video placeholder. To add your Canvas videos, replace the placeholder IDs in `index.html`:

**Unit 1 Video:**
```html
<!-- Find and replace: -->
UNIT_1_VIDEO_ID → Your Canvas video ID (e.g., 5141841)
UNIT_1_MEDIA_ID → Your Canvas media ID (e.g., m-53JHK5p3NcjmXknhEzaPSLtRZ559TxaJ)
```

**Unit 2 Video:**
```html
UNIT_2_VIDEO_ID → Your Canvas video ID
UNIT_2_MEDIA_ID → Your Canvas media ID
```

**Unit 3 Video:**
```html
UNIT_3_VIDEO_ID → Your Canvas video ID
UNIT_3_MEDIA_ID → Your Canvas media ID
```

**Unit 4 Video:**
```html
UNIT_4_VIDEO_ID → Your Canvas video ID
UNIT_4_MEDIA_ID → Your Canvas media ID
```

### Updating Discussion Boards
Each unit has a unique discussion board widget. 

**For Module 1 (index.html)** - Replace the placeholder discussion IDs:

**Unit 1 Discussion:**
```html
<!-- Find and replace: -->
UNIT_1_DISCUSSION_ID → Your Canvas discussion ID (e.g., 1)
```

**Unit 2 Discussion:**
```html
UNIT_2_DISCUSSION_ID → Your Canvas discussion ID (e.g., 2)
```

**Unit 3 Discussion:**
```html
UNIT_3_DISCUSSION_ID → Your Canvas discussion ID (e.g., 3)
```

**Unit 4 Discussion:**
```html
UNIT_4_DISCUSSION_ID → Your Canvas discussion ID (e.g., 4)
```

**For Module 2 (module2.html)** - Pre-configured with discussion IDs 4, 5, 6, 7

**For Module 3 (module3.html)** - Pre-configured with discussion IDs 8, 9, 10, 11

> **Note**: Each module uses unique discussion board IDs to ensure separate discussions for each module's units.

### Quick Find & Replace
You can use these commands to quickly update all placeholders:

```bash
# Replace video IDs
sed -i 's/UNIT_1_VIDEO_ID/your_video_id/g' index.html
sed -i 's/UNIT_1_MEDIA_ID/your_media_id/g' index.html

# Replace discussion IDs
sed -i 's/UNIT_1_DISCUSSION_ID/your_discussion_id/g' index.html

# Repeat for units 2, 3, and 4
```

### Updating Reading Links
Replace the `#` placeholders in the reading sections with actual URLs to your textbook chapters or PDF files:

```html
<a href="https://your-textbook-url.com/chapter1" class="reading-link" target="_blank">
```

### Updating Quiz Links
Replace the `#` in quiz buttons with actual Canvas quiz URLs:

```html
<a href="https://your-canvas-url.com/courses/COURSE_ID/quizzes/QUIZ_ID" class="quiz-link" target="_blank">
```

## Responsive Design

The module is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

Videos and discussion boards automatically adjust to screen size.

## Keyboard Navigation

- **Right Arrow**: Next unit
- **Left Arrow**: Previous unit

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## Accessibility Features

- Semantic HTML structure
- ARIA labels for screen readers
- Keyboard navigation support
- High contrast color scheme
- Focus indicators for interactive elements

## Support

For issues or questions, please open an issue in this repository.

## License

This educational content is provided for course use.