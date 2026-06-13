# 🛍️ ShopSphere

> A production-grade full-stack e-commerce platform built with a premium fashion-magazine aesthetic.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-shopsphere--shop.vercel.app-0C969C?style=for-the-badge&logo=vercel)](https://shopsphere-shop.vercel.app/)
[![Backend](https://img.shields.io/badge/Backend-Railway-031716?style=for-the-badge&logo=railway)](https://shopsphere-production-fee5.up.railway.app/api/products)
[![License](https://img.shields.io/badge/License-MIT-6BA3BE?style=for-the-badge)](LICENSE)

---

## ✨ Features

### 🛒 Shopping Experience
- Browse 50+ products across Men, Women, Footwear, Bags, Beauty, Electronics & Accessories
- Advanced filtering by category, size, color, price range, availability and rating
- Full-text search with instant results
- Product detail pages with image gallery, size/color selection, reviews
- Persistent wishlist (saved to localStorage)
- Cart with quantity management and free shipping threshold
- 3-step checkout flow (Address → Payment → Review)

### 🔐 Authentication
- JWT-based auth with secure HttpOnly handling
- User registration and login with BCrypt password hashing
- Role-based access control (USER / ADMIN)
- Protected routes on both frontend and backend

### ⚙️ Admin Dashboard
- Product management — Add, edit, delete, toggle stock/featured
- User management — View all users, update roles
- Live statistics — Total products, users, stock counts
- Pagination and search within admin panel

### 🎨 UI / UX
- Premium fashion-magazine design with teal color palette
- Cinematic page transitions (curtain animation)
- Scroll-triggered animations (fade, slide from bottom/left/right)
- Auto-cycling editorial collage with directional image transitions
- Beautiful loading screen with animated counter
- Fully responsive — Mobile, Tablet, Desktop
- Toast notifications for all user actions

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 + TypeScript | UI framework |
| Vite | Build tool |
| Tailwind CSS | Styling |
| React Router v6 | Client-side routing |
| TanStack Query | Server state + caching |
| Axios | HTTP client |
| Context API | Auth, Cart, Wishlist, Toast state |

### Backend
| Technology | Purpose |
|---|---|
| Spring Boot 3 | REST API framework |
| Spring Security | Authentication & Authorization |
| JWT (jjwt 0.12) | Token-based auth |
| Spring Data JPA | ORM layer |
| Hibernate | Database mapping |
| MySQL | Relational database |
| Lombok | Boilerplate reduction |
| Docker | Containerization |

### Deployment
| Service | What |
|---|---|
| Vercel | Frontend hosting |
| Railway | Backend + MySQL hosting |
| GitHub | Version control |

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- Java JDK 17+
- Maven
- MySQL 8.0+
- Docker (optional)

### 1. Clone the repository
```bash
git clone https://github.com/Saibal-Tony/SHOPSPHERE.git
cd SHOPSPHERE
```

### 2. Setup Database
```sql
CREATE DATABASE shopsphere;
CREATE USER 'shopsphere_user'@'localhost' IDENTIFIED BY 'shopsphere123';
GRANT ALL PRIVILEGES ON shopsphere.* TO 'shopsphere_user'@'localhost';
FLUSH PRIVILEGES;
```

### 3. Run Backend
```bash
cd shopsphere-backend
mvn spring-boot:run
```
Backend starts on `http://localhost:8080`
Database auto-seeds with 50+ products on first run.

### 4. Run Frontend
```bash
cd shopsphere-frontend
npm install
npm run dev
```
Frontend starts on `http://localhost:5173`

---

## 🌍 Deployment

### Frontend → Vercel
```bash
cd shopsphere-frontend
# Set environment variable in Vercel:
# VITE_API_URL = https://your-backend.up.railway.app/api
npm run build
```

### Backend → Railway
Set these environment variables in Railway:
```
DATABASE_URL      = jdbc:mysql://your-mysql-host:port/railway
DATABASE_USERNAME = root
DATABASE_PASSWORD = your-password
JWT_SECRET        = your-secret-key
PORT              = 8080
```

---

## 📁 Project Structure

```
SHOPSPHERE/
├── shopsphere-frontend/          # React + TypeScript
│   ├── src/
│   │   ├── api/                  # Axios API calls
│   │   ├── components/
│   │   │   ├── common/           # Toast, Loader, Animations
│   │   │   ├── layout/           # Navbar, Footer, MainLayout
│   │   │   └── Product/          # ProductCard
│   │   ├── context/              # Auth, Cart, Wishlist, Toast
│   │   ├── pages/
│   │   │   ├── Home/             # HomePage
│   │   │   ├── Product/          # ProductsPage, ProductDetailsPage
│   │   │   ├── Cart/             # CartPage
│   │   │   ├── Checkout/         # CheckoutPage
│   │   │   ├── Auth/             # LoginPage, RegisterPage
│   │   │   ├── Orders/           # OrdersPage
│   │   │   ├── Wishlist/         # WishlistPage
│   │   │   └── Admin/            # AdminDashboardPage
│   │   ├── routes/               # AppRoutes
│   │   └── types/                # TypeScript interfaces
│   └── public/assets/            # Product images
│
└── shopsphere-backend/           # Spring Boot
    └── src/main/java/com/shopsphere/backend/
        ├── config/               # Security, CORS, DataSeeder
        ├── controller/           # REST Controllers
        ├── model/                # JPA Entities
        ├── repository/           # Spring Data Repositories
        ├── service/              # Business Logic
        ├── dto/                  # Data Transfer Objects
        ├── filter/               # JWT Auth Filter
        └── exception/            # Global Exception Handler
```

---

## 📸 Screenshots

| Page | Preview |
|---|---|
| Home | Fashion-magazine hero with collage |
| Products | Filter sidebar + product grid |
| Product Detail | Image gallery, sizes, colors, add to cart |
| Cart | Item management, free shipping indicator |
| Checkout | 3-step flow with address + payment |
| Admin | Dashboard with product & user management |

---

## 🔑 Default Admin Setup

After registering an account, run this SQL to make yourself admin:
```sql
USE shopsphere;
UPDATE users SET role = 'ADMIN' WHERE email = 'your@email.com';
```

---

## 📄 License

MIT License — feel free to use this project for learning or as a portfolio piece.

---

## 👤 Author

**Saibal Bera**
- GitHub: [@Saibal-Tony](https://github.com/Saibal-Tony)
- LinkedIn: [saibal-bera](https://linkedin.com/in/saibal-bera)
- Email: berasaibal20@gmail.com

---

⭐ If you found this project helpful, please give it a star!
