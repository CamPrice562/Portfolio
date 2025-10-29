
# Cybersecurity Professional Portfolio

A modern, responsive portfolio website for cybersecurity professionals built with React, TypeScript, and Tailwind CSS. This site features a sleek dark theme with cyber-inspired design elements, smooth animations, and a user-friendly interface.

## Live Demo

Visit your deployed site to see the live demo.

## Features

- **Modern Design**: Dark-themed UI with neon accents inspired by cybersecurity aesthetics
- **Responsive Layout**: Fully responsive design that works on all devices
- **Animated Components**: Smooth animations and transitions for enhanced user experience
- **Dynamic Project Gallery**: Filterable project cards with hover effects
- **Interactive Resume**: PDF viewer with download option
- **Contact Form**: Form with validation for user inquiries
- **Optimized Performance**: Fast loading times and smooth interactions

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Icons**: Lucide React
- **Animations**: Custom CSS animations
- **PDF Handling**: React PDF (optional implementation)
- **State Management**: React Query

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/cyber-folio-forge.git
   cd cyber-folio-forge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:8080](http://localhost:8080) to view the site in your browser.

## Customization Guide

### Updating Personal Information

1. **Basic Information**: Edit the personal details in the components under `src/components/home/`
2. **Projects**: Update the project data in `src/pages/Projects.tsx`
3. **Resume**: Modify the resume content in `src/pages/Resume.tsx`
4. **Contact Information**: Update your contact details in `src/pages/Contact.tsx`

### Modifying the Theme

1. **Colors**: The main color scheme can be adjusted in `tailwind.config.ts` under the `cyber` colors section
2. **Typography**: Font families and sizes can be modified in `tailwind.config.ts` and `src/index.css`
3. **Animations**: Custom animations are defined in `tailwind.config.ts` under the `keyframes` and `animation` sections

### Adding New Projects

To add a new project to the portfolio, add an entry to the `projects` array in `src/pages/Projects.tsx`:

```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  description: 'Brief project description',
  image: '/path/to/image.jpg',
  tags: ['Tag1', 'Tag2', 'Tag3'],
  link: 'https://project-link.com', // Optional
  details: 'Detailed project description' // Optional, for hover card
}
```

### Adding New Pages

1. Create a new page component in `src/pages/`
2. Add the route to `src/App.tsx`:
   ```typescript
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Update the navigation links in `src/components/layout/Navbar.tsx`

## Deployment

### Build for Production

```bash
npm run build
```

This will create a `dist` folder with all the static files ready for deployment.

### Deployment Options

- **Netlify**: Connect your GitHub repository to Netlify for automatic deployments
- **Vercel**: Similar to Netlify, connect your repository for CI/CD
- **GitHub Pages**: Use GitHub Actions to deploy to GitHub Pages
- **Traditional Hosting**: Upload the contents of the `dist` folder to any static hosting service

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- Design inspired by cybersecurity themes and modern portfolio websites
- Icons provided by [Lucide React](https://lucide.dev/)
- Sample images from [Unsplash](https://unsplash.com/)
