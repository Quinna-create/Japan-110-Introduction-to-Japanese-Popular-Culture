# Quick Reference Card

## 🎯 Quick Links
- **Main Module**: `index.html`
- **Deployment Guide**: `DEPLOYMENT_GUIDE.md`
- **Structure Diagram**: `STRUCTURE.md`

## 🔧 Quick Find & Replace

### For Video IDs
```bash
# Unit 1
sed -i 's/UNIT_1_VIDEO_ID/YOUR_ID/g' index.html
sed -i 's/UNIT_1_MEDIA_ID/YOUR_ID/g' index.html

# Unit 2
sed -i 's/UNIT_2_VIDEO_ID/YOUR_ID/g' index.html
sed -i 's/UNIT_2_MEDIA_ID/YOUR_ID/g' index.html

# Unit 3
sed -i 's/UNIT_3_VIDEO_ID/YOUR_ID/g' index.html
sed -i 's/UNIT_3_MEDIA_ID/YOUR_ID/g' index.html

# Unit 4
sed -i 's/UNIT_4_VIDEO_ID/YOUR_ID/g' index.html
sed -i 's/UNIT_4_MEDIA_ID/YOUR_ID/g' index.html
```

### For Discussion IDs
```bash
sed -i 's/UNIT_1_DISCUSSION_ID/YOUR_ID/g' index.html
sed -i 's/UNIT_2_DISCUSSION_ID/YOUR_ID/g' index.html
sed -i 's/UNIT_3_DISCUSSION_ID/YOUR_ID/g' index.html
sed -i 's/UNIT_4_DISCUSSION_ID/YOUR_ID/g' index.html
```

## 🎨 Color Codes

| Section | Background | Border |
|---------|-----------|--------|
| Reading | `#fff8f0` | `#ff9800` |
| Video | `#f0f4ff` | `#667eea` |
| Discussion | `#f0fff4` | `#4caf50` |
| Quiz | `#fff0f6` | `#e91e63` |

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` | Next unit |
| `←` | Previous unit |
| `Tab` | Navigate elements |

## 📂 File Structure

```
Repository/
├── index.html                  (Main module)
├── styles.css                  (Styling)
├── script.js                   (Navigation)
├── preview.html                (Preview page)
├── README.md                   (Getting started)
├── DEPLOYMENT_GUIDE.md         (How to deploy)
├── IMPLEMENTATION_SUMMARY.md   (Tech details)
├── STRUCTURE.md                (Visual layout)
└── QUICK_REFERENCE.md          (This file)
```

## 🔍 Where to Find Things

| Task | Line in index.html |
|------|-------------------|
| Unit 1 Video | ~48 |
| Unit 1 Discussion | ~57 |
| Unit 2 Video | ~98 |
| Unit 2 Discussion | ~107 |
| Unit 3 Video | ~148 |
| Unit 3 Discussion | ~157 |
| Unit 4 Video | ~198 |
| Unit 4 Discussion | ~207 |

## 🚀 Deploy in 3 Steps

1. **Customize**
   ```bash
   # Replace placeholders in index.html
   ```

2. **Test**
   ```bash
   # Open index.html in browser
   # Click through all units
   ```

3. **Deploy**
   - Option A: Copy to Canvas HTML editor
   - Option B: Enable GitHub Pages
   - Option C: Upload to Canvas Files

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Video not loading | Check video ID and permissions |
| Discussion not showing | Verify discussion ID |
| Navigation broken | Check script.js is loaded |
| Styles missing | Check styles.css is loaded |

## 📞 Getting Help

1. Check `DEPLOYMENT_GUIDE.md` for detailed steps
2. Review `STRUCTURE.md` for layout info
3. See `IMPLEMENTATION_SUMMARY.md` for technical details
4. Open an issue in the repository

## ✅ Pre-Launch Checklist

- [ ] All video IDs replaced
- [ ] All discussion IDs replaced
- [ ] Reading links updated
- [ ] Quiz links updated
- [ ] Tested on desktop
- [ ] Tested on mobile
- [ ] Verified all navigation
- [ ] Published in Canvas

---

**Need more help?** See `DEPLOYMENT_GUIDE.md` for detailed instructions.
