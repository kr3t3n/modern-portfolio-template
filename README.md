# Modern Portfolio Starter

A modern, responsive portfolio template designed for creative professionals and developers. Built with clean HTML, CSS, and JavaScript, this template provides a professional showcase for your work with a focus on simplicity and visual impact.

## ✨ Features

- 📱 Fully responsive design optimized for all devices
- 🎨 Modern and clean UI with smooth animations
- 🔍 SEO-friendly semantic HTML structure
- ♿ Built-in accessibility features
- 🚀 Fast loading with optimized assets
- 📝 Integrated contact form (Formspree)
- 🎯 Dynamic project showcase grid
- 👤 Professional bio section with skills showcase
- 🌙 Clean, minimalist design
- 🔧 Easy customization through CSS variables

## 🚀 Getting Started

1. Clone or download this repository
```bash
git clone https://github.com/kr3t3n/modern-portfolio-template.git
```

2. Customize the content:
   - Replace `Your Name` in all HTML files
   - Update social media links in the footer
   - Add your own profile photo
   - Add project images and descriptions
   - Update contact information
   - Modify colors and fonts through CSS variables

## Customization

### Colors
The template uses CSS variables for easy color customization. Edit these in `css/main.css`:
```css
:root {
  --primary-color: #333333;
  --secondary-color: #FFFFFF;
  --accent-color: #007BFF;
  --neutral-color: #F5F5F5;
}
```

### Fonts
The template uses Google Fonts (Roboto and Open Sans). To change fonts:
1. Update the Google Fonts link in the HTML files' head section
2. Modify the font variables in `css/main.css`:
```css
:root {
  --heading-font: 'Roboto', sans-serif;
  --body-font: 'Open Sans', sans-serif;
}
```

### Projects
To add a project:
1. Add project image to `assets/images/projects/`
2. Copy an existing project card in `index.html` and update:
   - Image source and alt text
   - Project title and description
   - Tags
   - Link URL

### Contact Form
The contact form is integrated with [Formspree](https://formspree.io) for easy form handling. To set it up:
1. Go to [Formspree](https://formspree.io) and create a free account
2. Create a new form and get your form ID
3. Replace `your-form-id` in the form action URL in `contact.html`:
```html
<form action="https://formspree.io/f/your-form-id" method="POST">
```
4. Test your form by submitting a message
5. You'll receive form submissions directly to your email

The form includes:
- Client-side validation
- AJAX submission handling
- Success/error notifications
- Spam protection (via Formspree)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Dependencies

- Font Awesome (for icons)
- Google Fonts (Roboto & Open Sans)

## File Structure

```
portfolio-template/
├── index.html
├── about.html
├── contact.html
├── css/
│   ├── main.css
│   └── responsive.css
├── js/
│   └── scripts.js
└── assets/
    └── images/
        ├── profile.jpg
        └── projects/
            ├── project1.jpg
            ├── project2.jpg
            └── project3.jpg
```

## Development

To modify the template:
1. Edit HTML files for content changes
2. Modify CSS in `main.css` and `responsive.css` for styling
3. Update JavaScript in `scripts.js` for functionality

## License

This template is released under the MIT License. Feel free to use it for your personal or commercial projects.

## Credits

- Icons by [Font Awesome](https://fontawesome.com)
- Fonts by [Google Fonts](https://fonts.google.com)

## Support

For issues or questions, please [open an issue](https://github.com/kr3t3n/modern-portfolio-template/issues) on GitHub. 