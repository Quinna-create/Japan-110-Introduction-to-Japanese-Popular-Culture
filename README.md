# Japan 110: Introduction to Japanese Popular Culture

## Course Module for Canvas LMS

This repository contains an interactive online course module for Japan 110 with 4 distinct units, designed to be embedded as a page in Canvas LMS.

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

- `index.html` - Main course module page with all 4 units
- `styles.css` - Styling for visually distinct units and responsive design
- `script.js` - JavaScript for unit navigation and interactivity

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
Each unit has a unique discussion board widget. Replace the placeholder discussion IDs:

**Unit 1 Discussion:**
```html
<!-- Find and replace: -->
UNIT_1_DISCUSSION_ID → Your Canvas discussion ID (e.g., 6735506)
```

**Unit 2 Discussion:**
```html
UNIT_2_DISCUSSION_ID → Your Canvas discussion ID
```

**Unit 3 Discussion:**
```html
UNIT_3_DISCUSSION_ID → Your Canvas discussion ID
```

**Unit 4 Discussion:**
```html
UNIT_4_DISCUSSION_ID → Your Canvas discussion ID
```

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