# Assets Folder Structure

This folder contains all the static assets for the Santasa IVF website.

## Folder Organization

### 📁 `/logos`
- Main Santasa IVF logo files
- Different formats: PNG, SVG, JPG
- Different sizes: favicon, header, footer versions
- Suggested files:
  - `santasa-logo.png`
  - `santasa-logo-white.png` (for dark backgrounds)
  - `favicon.ico`

### 📁 `/doctors`
- Professional photos of all doctors and staff
- High-quality headshots for the team section
- Suggested naming:
  - `dr-sowmya-dinesh.jpg`
  - `dr-yogitha-sanjay.jpg`
  - `dr-[name].jpg`

### 📁 `/images`
- General website images
- Hero section backgrounds
- Service illustrations
- Medical facility photos
- Success story images
- Suggested files:
  - `hero-bg.jpg`
  - `clinic-interior.jpg`
  - `lab-equipment.jpg`
  - `happy-families/`

### 📁 `/icons`
- Custom icons for services
- Medical procedure icons
- UI elements
- SVG icons for better scalability
- Suggested files:
  - `ivf-icon.svg`
  - `surgery-icon.svg`
  - `consultation-icon.svg`

## Usage in Components

```javascript
// Import images
import santasaLogo from '../assets/logos/santasa-logo.png';
import drSowmya from '../assets/doctors/dr-sowmya-dinesh.jpg';
import heroImage from '../assets/images/hero-bg.jpg';

// Use in JSX
<img src={santasaLogo} alt="Santasa IVF" />
```

## File Naming Convention

- Use lowercase with hyphens: `file-name.jpg`
- Be descriptive: `dr-sowmya-dinesh-profile.jpg`
- Include dimensions if needed: `logo-200x100.png`
- Use appropriate extensions: `.jpg` for photos, `.png` for logos with transparency, `.svg` for icons

## Recommended Image Specifications

- **Logo**: PNG with transparency, 300x150px minimum
- **Doctor Photos**: JPG, 400x400px, professional headshots
- **Hero Images**: JPG, 1920x1080px, high quality
- **Icons**: SVG format for scalability