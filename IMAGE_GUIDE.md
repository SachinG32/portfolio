# How to Add Your Profile Image

## Quick Start

1. **Add your image** to the `public/assets/` folder
2. **Rename it** to `profile.jpg` (or update the filename in the code)
3. The portfolio will **automatically display** your image!

---

## Supported Image Formats

- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.gif`

---

## Step-by-Step Instructions

### Option 1: Use Default Filename (Recommended)

1. Place your profile photo in: `public/assets/profile.jpg`
2. That's it! The image will automatically appear

### Option 2: Use Custom Filename

1. Place your image in: `public/assets/your-image-name.png`
2. Open `src/components/About.jsx`
3. Update line 6:
   ```javascript
   const profileImagePath = '/assets/your-image-name.png'
   ```

---

## How It Works

The About component now has **smart image loading**:

1. **First**, it tries to load the image from `/assets/profile.jpg`
2. **If the image exists**, it displays your photo
3. **If the image is missing**, it shows the SVG placeholder icon
4. **No errors** - graceful fallback!

---

## Image Recommendations

For best results:
- **Size**: 500x500px to 1000x1000px
- **Format**: JPG or PNG
- **File size**: Under 500KB (compress if needed)
- **Aspect ratio**: Square (1:1) works best
- **Quality**: Professional headshot or portrait

---

## Example

```
portfolio/
├── public/
│   └── assets/
│       └── profile.jpg  ← Put your image here!
├── src/
│   └── components/
│       └── About.jsx
```

---

## Troubleshooting

**Image not showing?**
- ✅ Check the file is in `public/assets/`
- ✅ Verify the filename matches (case-sensitive)
- ✅ Make sure the file extension is correct (.jpg, .png, etc.)
- ✅ Try refreshing the browser (Ctrl+F5)

**Image looks stretched?**
- The CSS uses `object-fit: cover` to maintain aspect ratio
- Square images (1:1) work best

---

## Current Status

✅ **Fallback logic implemented**
- Shows your image if available
- Shows SVG icon if image is missing
- No errors or broken images

📁 **Assets folder created**: `public/assets/`

🎯 **Ready to use**: Just add `profile.jpg` to the assets folder!
