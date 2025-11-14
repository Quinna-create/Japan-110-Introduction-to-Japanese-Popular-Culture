# Course Module Structure

## Visual Layout

```
┌─────────────────────────────────────────────────────────────────┐
│            Japan 110: Introduction to Japanese                   │
│                  Popular Culture - Module 1                      │
└─────────────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────────────┐
│  [Unit 1]  [Unit 2]  [Unit 3]  [Unit 4]   ← Navigation Buttons  │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  UNIT 1: Introduction to Japanese Popular Culture               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  📖 Reading Material                    [Orange Section]         │
│  ├─ Textbook Chapter 1                                          │
│  └─ PDF: Historical Context                                     │
│                                                                  │
│  🎥 Video Lecture - Unit 1              [Blue Section]           │
│  ┌────────────────────────────────────┐                         │
│  │                                     │                         │
│  │    Canvas Video Player              │                         │
│  │    (UNIT_1_VIDEO_ID)               │                         │
│  │                                     │                         │
│  └────────────────────────────────────┘                         │
│                                                                  │
│  💬 Discussion Board - Unit 1          [Green Section]           │
│  ┌────────────────────────────────────┐                         │
│  │  Discussion Widget                  │                         │
│  │  (UNIT_1_DISCUSSION_ID)            │                         │
│  └────────────────────────────────────┘                         │
│                                                                  │
│  ✓ Unit Quiz                            [Pink Section]           │
│  [ Take Unit 1 Quiz ]  ← Button                                 │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘

[Units 2, 3, 4 follow the same structure]
```

## Unit Topics

1. **Unit 1**: Introduction to Japanese Popular Culture
2. **Unit 2**: Anime and Manga Culture
3. **Unit 3**: J-Pop and Music Culture
4. **Unit 4**: Contemporary Digital Culture

## Section Color Coding

| Section           | Color       | Border    |
|-------------------|-------------|-----------|
| Reading Material  | Light Orange| Orange    |
| Video Lecture     | Light Blue  | Purple    |
| Discussion Board  | Light Green | Green     |
| Unit Quiz         | Light Pink  | Pink      |

## Navigation Flow

```
User Actions:
1. Click "Unit 2" button → Unit 2 displayed, Unit 1 hidden
2. Press → (right arrow) → Next unit
3. Press ← (left arrow) → Previous unit
4. Page remembers last unit (localStorage)
```

## Data Flow

```
┌──────────────┐
│  User Opens  │
│    Module    │
└──────┬───────┘
       │
       ▼
┌──────────────┐      ┌─────────────┐
│ Load Unit 1  │◄─────┤ localStorage│
│  (or saved)  │      │ last unit?  │
└──────┬───────┘      └─────────────┘
       │
       ▼
┌──────────────────────────────────┐
│  Display Current Unit Content:   │
│  • Reading links                 │
│  • Canvas video iframe           │
│  • Discussion widget iframe      │
│  • Quiz button                   │
└──────┬───────────────────────────┘
       │
       ▼
┌──────────────┐
│  User clicks │
│  navigation  │
└──────┬───────┘
       │
       ▼
┌──────────────┐      ┌─────────────┐
│  Switch to   │─────►│Save to      │
│  new unit    │      │localStorage │
└──────────────┘      └─────────────┘
```

## Iframe Integration

### Video Iframe (Canvas)
```html
<iframe 
  style="width: 712px; height: 445px; display: inline-block;" 
  title="Video player for Unit X Lecture" 
  data-media-type="video" 
  src="https://uwmil.instructure.com/media_attachments_iframe/[ID]" 
  loading="lazy" 
  allowfullscreen="allowfullscreen" 
  allow="fullscreen" 
  data-media-id="[MEDIA_ID]">
</iframe>
```

### Discussion Iframe (GitHub Pages Widget)
```html
<iframe 
  src="https://quinna-create.github.io/discussion-comment-feeds/discussion-widget.html?courseId=196700&discussionId=[ID]" 
  width="100%" 
  height="400px" 
  loading="lazy">
</iframe>
```

## File Dependencies

```
index.html
├── styles.css (external stylesheet)
└── script.js (external script)
```

All files can be:
- Embedded directly in Canvas (copy-paste)
- Hosted on GitHub Pages (link from Canvas)
- Uploaded to Canvas Files (reference in page)

## Responsive Breakpoints

- **Desktop**: > 768px - Full layout with navigation buttons
- **Tablet**: 768px - Adjusted spacing, flexible video size
- **Mobile**: < 768px - Stacked layout, touch-friendly buttons

