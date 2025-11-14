# Deployment Guide for Japan 110 Course Module

## Quick Start Checklist

- [ ] Replace video placeholders with actual Canvas video IDs
- [ ] Replace discussion placeholders with actual Canvas discussion IDs
- [ ] Update reading material links
- [ ] Update quiz links
- [ ] Choose deployment method
- [ ] Test in Canvas environment

## Step-by-Step Deployment

### Step 1: Customize Content

#### Replace Video Placeholders

Open `index.html` and find/replace:

| Placeholder | Replace With | Location |
|-------------|--------------|----------|
| `UNIT_1_VIDEO_ID` | Your Canvas video ID for Unit 1 | Line ~48 |
| `UNIT_1_MEDIA_ID` | Your Canvas media ID for Unit 1 | Line ~48 |
| `UNIT_2_VIDEO_ID` | Your Canvas video ID for Unit 2 | Line ~98 |
| `UNIT_2_MEDIA_ID` | Your Canvas media ID for Unit 2 | Line ~98 |
| `UNIT_3_VIDEO_ID` | Your Canvas video ID for Unit 3 | Line ~148 |
| `UNIT_3_MEDIA_ID` | Your Canvas media ID for Unit 3 | Line ~148 |
| `UNIT_4_VIDEO_ID` | Your Canvas video ID for Unit 4 | Line ~198 |
| `UNIT_4_MEDIA_ID` | Your Canvas media ID for Unit 4 | Line ~198 |

**How to get Canvas video IDs:**
1. Go to your Canvas course
2. Navigate to the video you want to use
3. Click on the embed/share option
4. Copy the iframe code
5. Extract the ID from: `media_attachments_iframe/[THIS_IS_THE_ID]`

#### Replace Discussion Placeholders

| Placeholder | Replace With | Location |
|-------------|--------------|----------|
| `UNIT_1_DISCUSSION_ID` | Canvas discussion ID for Unit 1 | Line ~57 |
| `UNIT_2_DISCUSSION_ID` | Canvas discussion ID for Unit 2 | Line ~107 |
| `UNIT_3_DISCUSSION_ID` | Canvas discussion ID for Unit 3 | Line ~157 |
| `UNIT_4_DISCUSSION_ID` | Canvas discussion ID for Unit 4 | Line ~207 |

**How to get Canvas discussion IDs:**
1. Go to your Canvas course
2. Navigate to Discussions
3. Open the discussion you want to use
4. Look at the URL: `discussions/[THIS_IS_THE_ID]`

#### Update Reading Links

Find all instances of `href="#"` in reading sections and replace with actual URLs:

```html
<!-- Before -->
<a href="#" class="reading-link" target="_blank">Textbook Chapter 1</a>

<!-- After -->
<a href="https://your-textbook-url.com/chapter1" class="reading-link" target="_blank">Textbook Chapter 1</a>
```

#### Update Quiz Links

Find all quiz button links and replace with Canvas quiz URLs:

```html
<!-- Before -->
<a href="#" class="quiz-link" target="_blank">

<!-- After -->
<a href="https://your-canvas-url.com/courses/COURSE_ID/quizzes/QUIZ_ID" class="quiz-link" target="_blank">
```

### Step 2: Choose Deployment Method

#### Option A: Direct Canvas Embed (Recommended for Small Sites)

1. Open `index.html` in a text editor
2. Copy the entire file contents
3. In Canvas, go to **Pages** → **+ Page**
4. Click the **HTML Editor** button (`</>`)
5. Paste the HTML content
6. You'll need to inline the CSS and JS:
   - Copy contents of `styles.css` into `<style>` tags in the head
   - Copy contents of `script.js` into `<script>` tags before `</body>`
7. Click **Save**

**Pros:** Simple, all-in-one file
**Cons:** Large file, harder to update styles/scripts later

#### Option B: GitHub Pages (Recommended for Easy Updates)

**✅ This repository includes automatic GitHub Pages deployment via GitHub Actions!**

1. In your repository settings, go to **Settings** → **Pages**
2. Under "Build and deployment", set source to **GitHub Actions** (not "Deploy from a branch")
3. The GitHub Actions workflow will automatically deploy on every push to `main`
4. Your module will be available at:
   ```
   https://quinna-create.github.io/Japan-110-Introduction-to-Japanese-Popular-Culture/
   ```
5. In Canvas, create a new Page
6. Click the HTML Editor button (`</>`)
7. Add this iframe:
   ```html
   <iframe 
     src="https://quinna-create.github.io/Japan-110-Introduction-to-Japanese-Popular-Culture/" 
     width="100%" 
     height="800px" 
     style="border: none;">
   </iframe>
   ```
8. Adjust height as needed
9. Click **Save**

**Pros:** 
- Automatic deployment on every update to main branch
- Easy to update (just merge PRs)
- Separate concerns
- Version control for all changes

**Cons:** Requires external hosting (but it's free!)

**🚀 Updates Deploy Automatically:** Every time you merge a PR to `main`, GitHub Actions rebuilds and redeploys your site in 1-2 minutes!

#### Option C: Canvas File Upload

1. In Canvas, go to **Files**
2. Upload `index.html`, `styles.css`, and `script.js`
3. Right-click each file → **Copy Link**
4. Create a new Page in Canvas
5. Click HTML Editor
6. Create this structure:
   ```html
   <!DOCTYPE html>
   <html>
   <head>
     <link rel="stylesheet" href="[LINK_TO_STYLES.CSS]">
   </head>
   <body>
     [PASTE_BODY_CONTENT_FROM_INDEX.HTML]
     <script src="[LINK_TO_SCRIPT.JS]"></script>
   </body>
   </html>
   ```

**Pros:** Hosted within Canvas
**Cons:** Links may change if files are moved

### Step 3: Test Your Module

1. **Preview in Canvas**
   - Click "Preview" to see how it looks
   - Test navigation buttons
   - Test keyboard navigation (arrow keys)
   - Verify videos load
   - Verify discussion widgets load
   - Test quiz links

2. **Test Responsiveness**
   - View on desktop
   - View on tablet
   - View on mobile phone
   - Ensure all content is readable

3. **Test Functionality**
   - Click between all 4 units
   - Verify each unit shows different content
   - Test video playback
   - Test discussion widget interaction
   - Click quiz buttons

### Step 4: Publish

1. In Canvas, ensure the page is **Published**
2. Add the page to your module
3. Inform students the module is available

## Troubleshooting

### Videos Not Loading

**Issue:** Video iframe shows error or blank
**Solution:** 
- Verify video ID is correct
- Check video is published in Canvas
- Ensure video permissions allow embedding
- Try accessing video directly in Canvas first

### Discussion Widget Not Loading

**Issue:** Discussion widget shows error or blank
**Solution:**
- Verify discussion ID is correct
- Check discussion is published
- Verify courseId is correct (currently: 196700)
- Check GitHub Pages widget is accessible

### Navigation Not Working

**Issue:** Clicking buttons doesn't change units
**Solution:**
- Verify `script.js` is loaded
- Check browser console for JavaScript errors
- Ensure `data-unit` attributes match unit IDs

### Styling Not Applied

**Issue:** Page looks unstyled or broken
**Solution:**
- Verify `styles.css` is loaded
- Check CSS file path is correct
- Try inlining CSS in HTML head

### Mobile Display Issues

**Issue:** Content overflows or is cut off on mobile
**Solution:**
- Verify viewport meta tag is present
- Test on actual mobile device, not just browser resize
- Check media queries in CSS are applied

## Maintenance

### Updating Content

**To update a video:**
1. Edit `index.html`
2. Find the unit's video section
3. Replace video ID
4. Save and republish

**To update a discussion:**
1. Edit `index.html`
2. Find the unit's discussion section
3. Replace discussion ID
4. Save and republish

**To update reading links:**
1. Edit `index.html`
2. Find the reading section
3. Update href attribute
4. Save and republish

### Adding More Units

If you need more than 4 units:
1. Copy an existing unit section in `index.html`
2. Update unit number and IDs
3. Add navigation button in header
4. Update JavaScript to handle new unit number
5. Test thoroughly

## Support Resources

- **Canvas Documentation**: https://community.canvaslms.com/
- **HTML/CSS Help**: https://developer.mozilla.org/
- **JavaScript Help**: https://javascript.info/

## Security Notes

✅ **CodeQL Security Check: Passed**
- No security vulnerabilities detected
- Safe for deployment

### Best Practices:
- Keep all content within your Canvas domain when possible
- Verify external widget sources (discussion widget)
- Regularly update content links
- Monitor for broken links
- Test with actual student account before release

## Performance Tips

- Videos load lazily (only when scrolled into view)
- Discussion widgets load lazily
- Navigation uses smooth animations
- LocalStorage saves last viewed unit
- Minimal JavaScript for fast loading

---

## Final Checklist Before Going Live

- [ ] All video IDs replaced and tested
- [ ] All discussion IDs replaced and tested
- [ ] All reading links updated and verified
- [ ] All quiz links updated and tested
- [ ] Tested on desktop browser
- [ ] Tested on mobile device
- [ ] Tested all navigation (buttons + keyboard)
- [ ] Verified with student test account
- [ ] Page is published in Canvas
- [ ] Page is added to course module
- [ ] Announcement sent to students (if applicable)

**Congratulations! Your course module is ready! 🎉**
