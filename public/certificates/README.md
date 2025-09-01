# Certificates Folder

This folder contains certificate images for the NhancioLearning platform.

## File Structure

```
public/certificates/
├── README.md
├── certificate.jpg                 # Main certificate image (used on homepage)
└── uploads/                        # Folder for user-uploaded certificates
    └── .gitkeep                   # Keep folder in git
```

## Usage

### 1. Main Certificate
- **File**: `certificate.jpg`
- **Path**: `/certificates/certificate.jpg`
- **Display**: Used on the homepage to showcase certificate design
- **Format**: JPG format

### 2. Uploading New Certificates
- Place new certificate images in this folder
- Use descriptive filenames (e.g., `ai-workshop-certificate.jpg`)
- Supported formats: JPG, PNG, WebP
- Recommended dimensions: 800x600px or 1200x800px
- File size: Keep under 2MB for optimal performance

### 3. Accessing Certificates
- **Homepage**: `/certificates/certificate.jpg`
- **Direct URL**: `https://learn.nhancio.com/certificates/certificate.jpg`
- **Local Development**: `http://localhost:5173/certificates/certificate.jpg`

## Image Requirements

- **Quality**: High resolution, professional appearance
- **Branding**: Include NhancioLearning logo and "IITians-based Startup" text
- **Content**: Certificate of Completion with sample student name
- **Signatures**: Include mentor and founder signature placeholders
- **Design**: Blue gradient theme matching the website

## Notes

- This folder is publicly accessible
- Images are served statically for fast loading
- Consider using WebP format for better compression
- Update the HomePage.tsx if changing the main certificate filename
