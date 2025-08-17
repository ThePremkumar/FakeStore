# ProductFolio 🚀

A modern **Product Showcase / Catalog** web app built with React and Vite, featuring a comprehensive product management system with filtering, search, and detailed product views.



**Live Demo**: [https://productfolio.vercel.app/](https://productfolio.vercel.app/)

**GitHub Repository**: [https://github.com/ThePremkumar/FakeStore.git](https://github.com/ThePremkumar/FakeStore.git)

## 🌟 Features

- **Responsive Product Grid**: Clean display of products with image, title, and price
- **Category Filtering**: Filter products by different categories
- **Price Range Filtering**: Set minimum and maximum price filters
- **Search Functionality**: Search products by keyword
- **Product Detail Pages**: Comprehensive product views with images and descriptions
- **Local Fake API**: JSON Server for mock product data
- **Modern UI**: Styled with Tailwind CSS for a polished look
- **Fast Development**: Built with Vite for lightning-fast development experience
- **Mobile Responsive**: Optimized for all device sizes

## 🛠️ Tech Stack

- **Frontend Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Mock API**: JSON Server
- **Deployment**: Vercel
- **Package Manager**: npm

## 🚀 Quick Start

### Prerequisites

- Node.js (>= 18)
- npm package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/ThePremkumar/FakeStore.git
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```
Then open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Build for production:**
```bash
npm run build
```

5. **Preview/Start production build:**
```bash
npm run start
```

## 🎯 Fake API (JSON Server)

This project uses **JSON Server** to serve mock product data locally, providing a realistic API experience for development.

### Starting the Fake API:

```bash
npx json-server --watch db.json --port 7001
```

The API will be available at `http://localhost:7001`

### API Endpoints:

- `GET /products` - Get all products
- `GET /products/:id` - Get single product
- `GET /products?category=electronics` - Filter by category
- `GET /products?_sort=price&_order=asc` - Sort by price

### FakeStore API Integration:

This project also integrates with the [FakeStore API](https://fakestoreapi.com/) for additional product data:

- **Base URL**: `https://fakestoreapi.com`
- **Products**: `https://fakestoreapi.com/products`
- **Categories**: `https://fakestoreapi.com/products/categories`
- **Single Product**: `https://fakestoreapi.com/products/{id}`

**Note**: Update any fetch URLs in the code to `http://localhost:7001` when using the local JSON server.

## 📁 Project Structure

```
.
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── ProductCard.jsx
│   │   ├── ProductGrid.jsx
│   │   ├── FilterBar.jsx
│   │   └── SearchBar.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   └── ProductDetail.jsx
│   └── App.jsx            # Main App component
├── public/                # Static assets
│   ├── images/
│   └── favicon.ico
├── db.json               # JSON Server database
├── package.json          # Scripts and dependencies
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.js        # Vite configuration
└── README.md
```

## 🎨 Key Components

### ProductCard Component
- Displays product image, title, and price
- Responsive design with hover effects
- Click navigation to product detail page

### FilterBar Component
- Category dropdown filtering
- Price range slider
- Clear filters functionality

### SearchBar Component
- Real-time search functionality
- Debounced input for performance
- Search by product title and description

### ProductDetail Component
- Full product information display
- Image gallery
- Add to cart functionality (if implemented)

## 📱 Available Scripts

```json
{
  "dev": "vite",              // Start development server
  "build": "vite build",      // Build for production
  "preview": "vite preview",  // Preview production build
  "start": "vite"             // Alternative start command
}
```

## 🚀 Deployment (Vercel)

1. **Push to GitHub**: Ensure your code is pushed to the repository
2. **Import to Vercel**: Connect your GitHub repository to Vercel
3. **Framework Preset**: Select "Vite" as the framework
4. **Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy**: Click deploy and your app will be live!

### Environment Variables (if needed)
```env
VITE_API_BASE_URL=https://fakestoreapi.com
VITE_LOCAL_API_URL=http://localhost:7001
```

## 🔧 Customization

### Adding New Products (Local API)

Edit `db.json` to add new products:

```json
{
  "products": [
    {
      "id": 1,
      "title": "New Product",
      "price": 29.99,
      "description": "Product description",
      "category": "electronics",
      "image": "https://example.com/image.jpg",
      "rating": {
        "rate": 4.5,
        "count": 120
      }
    }
  ]
}
```

### Styling Customization

- **Global Styles**: Modify Tailwind classes in components
- **Theme Colors**: Update `tailwind.config.js`
- **Responsive Breakpoints**: Customize breakpoints in Tailwind config

### API Integration

Switch between local JSON server and FakeStore API by updating the base URL in your fetch calls:

```javascript
// Local development
const API_BASE = 'http://localhost:7001';

// Production (FakeStore API)
const API_BASE = 'https://fakestoreapi.com';
```

## 📊 Performance Features

- **Vite HMR**: Hot Module Replacement for fast development
- **Code Splitting**: Automatic code splitting with Vite
- **Image Optimization**: Lazy loading for product images
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Fast API**: JSON Server provides quick local API responses

## 🤝 Contributing

1. Fork the repository from [https://github.com/ThePremkumar/FakeStore.git](https://github.com/ThePremkumar/FakeStore.git)
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) for the component-based architecture
- [Vite](https://vitejs.dev/) for the fast build tool and development server
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS framework
- [JSON Server](https://github.com/typicode/json-server) for the mock REST API
- [FakeStore API](https://fakestoreapi.com/) for providing fake product data
- [Vercel](https://vercel.com/) for seamless deployment and hosting

## 📞 Contact

**Premkumar** - [GitHub Profile](https://github.com/ThePremkumar)

**Project Links:**
- Repository: [https://github.com/ThePremkumar/FakeStore.git](https://github.com/ThePremkumar/FakeStore.git)
- Live Demo: [https://productfolio.vercel.app/](https://productfolio.vercel.app/)

---

⭐️ If you found this project helpful, please give it a star on GitHub!