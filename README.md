# Tann Trim - E-commerce Bag Store

A modern, responsive e-commerce web application built with Next.js for selling bags and backpacks. Features include product browsing, cart management, wishlist functionality, and mobile-responsive design.

## 🚀 Technologies Used

- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - Frontend library
- **Tailwind CSS 4** - Styling and responsive design
- **Axios** - HTTP client for API calls
- **React Icons** - Icon library
- **REST API** - Product data management

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🛒 Shopping cart with quantity management
- ❤️ Wishlist functionality
- 🔍 Product browsing with category filters
- 💰 Discount pricing display
- 📱 Mobile hamburger menu
- 🎨 Modern UI with Tailwind CSS

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd tann-trim
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/
│   ├── api/products/          # REST API endpoints
│   ├── components/            # React components
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Products.jsx       # Product grid
│   │   └── CategoryStrip.jsx  # Category navigation
│   ├── context/               # React Context
│   │   └── CartContext.js     # Cart & wishlist state
│   ├── cart/                  # Cart page
│   ├── wishlist/              # Wishlist page
│   └── globals.css            # Global styles
public/                        # Static assets (images)
```

## 🌐 Deploy on Netlify

### Method 1: Git Integration
1. Push your code to GitHub/GitLab
2. Connect your repository to [Netlify](https://netlify.com)
3. Set build command: `npm run build`
4. Set publish directory: `.next`
5. Deploy automatically on git push

### Method 2: Manual Deploy
1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to Netlify

### Environment Variables
No environment variables required for basic functionality.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (1 column)
- **Tablet**: 640px - 1024px (2 columns)
- **Desktop**: > 1024px (3-4 columns)

## 🛒 API Endpoints

- `GET /api/products` - Fetch all products

## 🎨 Design Features

- Mobile-first responsive design
- Dark theme with modern aesthetics
- Smooth hover animations
- Intuitive user interface
- Category-based navigation

## 📄 License

This project is for educational purposes.