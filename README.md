# ZimTrade - Zimbabwe Import & Export Services

<div align="center">
  <img src="src/assets/hero-trade.jpg" alt="ZimTrade" width="600" style="border-radius: 10px; margin-bottom: 20px;">
  
  **Connecting Zimbabwe to Global Markets**
  
  A professional website for Zimbabwe's premier import and export company, facilitating international trade and connecting local businesses with global opportunities.

  [![Made with Lovable](https://img.shields.io/badge/Made%20with-Lovable-ff69b4.svg)](https://lovable.dev)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://typescriptlang.org/)
  [![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
</div>

## 🌍 About ZimTrade

ZimTrade is a modern, responsive website built for a Zimbabwe-based import and export company. The platform showcases professional trade services, builds international credibility, and provides easy communication channels for global business partnerships.

### 🎯 Mission Statement
*"Bridging Zimbabwe with international markets through professional, efficient, and reliable trade services."*

## ✨ Key Features

### 🏢 **Professional Business Presence**
- Clean, corporate design that builds trust with international partners
- Zimbabwe-inspired color scheme (green, gold, red) maintaining professional appeal
- Mobile-first responsive design ensuring accessibility across all devices

### 📋 **Core Services Showcase**
- **Import Services**: Global sourcing, customs clearance, logistics support
- **Export Services**: Promoting Zimbabwean products internationally
- **Supply Chain & Logistics**: Warehousing, freight forwarding, documentation
- **Trade Consultancy**: Compliance advisory, business development support

### 🏭 **Industry Coverage**
**Zimbabwe Exports:**
- Agricultural products (tobacco, maize, cotton, soybeans)
- Minerals & mining (gold, platinum, diamonds, lithium)
- Textiles & traditional crafts
- Horticulture (cut flowers, fresh produce)

**Import Solutions:**
- Machinery & industrial equipment
- Electronics & technology
- Raw materials & chemicals
- Automotive parts & vehicles

### 📞 **Communication Features**
- Professional contact forms with quote requests
- WhatsApp integration (popular in Zimbabwe)
- Multiple contact channels (phone, email, office visits)
- Business hours and location information

## 🛠 Technology Stack

### **Frontend Framework**
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with enhanced IDE support
- **Vite** - Fast build tool and development server

### **Styling & UI**
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - High-quality, accessible React components
- **Lucide React** - Beautiful, customizable icons
- **Custom design system** - Zimbabwe-inspired professional color palette

### **Key Dependencies**
```json
{
  "@radix-ui/react-*": "Latest", // Accessible UI primitives
  "@tanstack/react-query": "^5.83.0", // Server state management
  "react-router-dom": "^6.30.1", // Client-side routing
  "class-variance-authority": "^0.7.1", // Component variant management
  "tailwind-merge": "^2.6.0", // Tailwind class merging utility
}
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher) - [Install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd zimtrade-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application

### Build for Production
```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Landing hero section
│   ├── About.tsx        # Company information
│   ├── Services.tsx     # Service offerings
│   ├── Industries.tsx   # Industry coverage
│   └── Contact.tsx      # Contact forms & info
├── pages/
│   ├── Index.tsx        # Main landing page
│   └── NotFound.tsx     # 404 error page
├── assets/              # Images and static assets
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
├── index.css           # Global styles & design tokens
└── main.tsx            # Application entry point
```

## 🎨 Design System

### **Color Palette**
```css
/* Primary Colors */
--primary: 142 100% 26%;        /* Zimbabwe Green */
--secondary: 210 100% 50%;      /* Professional Blue */
--accent: 48 100% 50%;          /* Zimbabwe Gold */
--zimbabwe-red: 0 77% 43%;      /* Zimbabwe Red (accent) */
--corporate-navy: 215 28% 17%;  /* Professional Navy */
```

### **Component Variants**
- **Hero Buttons**: White background for high contrast on hero imagery
- **Cards**: Subtle shadows with hover effects
- **Forms**: Clean, accessible input styling
- **Navigation**: Fixed header with mobile-responsive menu

### **Typography**
- Clean, professional fonts optimized for readability
- Hierarchical text sizing for improved information architecture
- High contrast ratios meeting accessibility standards

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile** (< 768px): Simplified navigation, stacked layouts
- **Tablet** (768px - 1024px): Optimized grid systems
- **Desktop** (> 1024px): Full feature set with multi-column layouts

## 🔧 Development Guidelines

### **Code Style**
- TypeScript strict mode enabled
- ESLint configuration for code quality
- Consistent component structure with proper TypeScript interfaces
- Custom hooks for reusable logic

### **Component Architecture**
- Functional components with React hooks
- Props interfaces defined for all components
- Consistent naming conventions (PascalCase for components)
- Separation of concerns (UI, logic, styling)

### **Styling Approach**
- Utility-first with Tailwind CSS
- Custom design tokens in `index.css`
- Component variants using `class-variance-authority`
- No inline styles - all styling through design system

## 🌐 SEO Optimization

### **Technical SEO**
- Semantic HTML structure (`<header>`, `<main>`, `<section>`, `<article>`)
- Proper heading hierarchy (single H1 per page)
- Meta descriptions and title tags optimized for trade keywords
- Open Graph and Twitter Card meta tags

### **Content Strategy**
- Target keywords: "Zimbabwe import export", "trade services", "international trade"
- Location-based SEO for Zimbabwe market
- Industry-specific content for agriculture, mining, textiles
- Professional language building trust and credibility

## 🚀 Deployment Options

### **Lovable Platform (Recommended)**
1. Visit the [Lovable Project Dashboard](https://lovable.dev/projects/07bd73fc-50f4-4b89-ad12-deb05cb36ac6)
2. Click **Share → Publish** for instant deployment
3. Custom domain setup available in Project → Settings → Domains

### **Self-Hosting**
```bash
npm run build
# Deploy the 'dist' folder to your hosting provider
```

**Compatible with:**
- Netlify, Vercel, GitHub Pages
- Traditional web hosting (Apache, Nginx)
- CDN services (Cloudflare, AWS CloudFront)

## 📞 Business Contact Integration

### **WhatsApp Integration**
- Direct WhatsApp link: `https://wa.me/263771234567`
- Popular communication method in Zimbabwe
- Instant customer engagement

### **Contact Information**
- **Phone**: +263 4 123 4567
- **Email**: info@zimtrade.co.zw
- **Address**: 123 Trade Center, Harare, Zimbabwe
- **Business Hours**: Mon-Fri 8:00 AM - 5:00 PM

## 🤝 Contributing

This project is designed for professional business use. For modifications or enhancements:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/enhancement`)
3. **Make your changes** following the existing code style
4. **Test thoroughly** across different devices and browsers
5. **Submit a pull request** with detailed description

### **Development Priorities**
- Maintain professional appearance and trust factors
- Ensure mobile responsiveness
- Keep loading times fast
- Preserve SEO optimization
- Test contact forms and WhatsApp integration

## 📈 Future Enhancements

### **Planned Features**
- [ ] Multi-language support (English, Shona, Ndebele)
- [ ] Interactive trade route maps
- [ ] Client testimonials carousel
- [ ] News/blog section for trade updates
- [ ] Partner company logos showcase
- [ ] Downloadable company profile PDF
- [ ] Quote request system with email notifications

### **Technical Improvements**
- [ ] Advanced analytics integration
- [ ] Performance optimization
- [ ] Accessibility audit and improvements
- [ ] Progressive Web App (PWA) features

## 📄 License

This project is proprietary software developed for ZimTrade. All rights reserved.

## 🔗 Useful Links

- **Project Dashboard**: [Lovable Project](https://lovable.dev/projects/07bd73fc-50f4-4b89-ad12-deb05cb36ac6)
- **Custom Domain Setup**: [Domain Configuration Guide](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
- **React Documentation**: [React.dev](https://react.dev)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **TypeScript**: [typescriptlang.org](https://typescriptlang.org)

---

<div align="center">
  <strong>Built with ❤️ for Zimbabwe's growing international trade sector</strong>
  <br>
  <em>Connecting local businesses to global opportunities</em>
</div>
