<div align="center">

<img src="https://github.com/Saibal-Tony/SHOPSPHERE/blob/main/shopsphere-frontend/public/logo.png" alt="ShopSphere Logo" width="120" height="120" />

# ShopSphere

### A production-grade full-stack e-commerce platform with a premium fashion-magazine aesthetic.

[![Live Demo](https://img.shields.io/badge/🌐%20Live%20Demo-shopsphere--shop.vercel.app-0C969C?style=for-the-badge)](https://shopsphere-shop.vercel.app/)
[![Backend API](https://img.shields.io/badge/⚙️%20Backend%20API-Railway-031716?style=for-the-badge)](https://shopsphere-production-fee5.up.railway.app/api/products)
[![GitHub](https://img.shields.io/badge/GitHub-Saibal--Tony-6BA3BE?style=for-the-badge&logo=github)](https://github.com/Saibal-Tony/SHOPSPHERE)
[![License](https://img.shields.io/badge/License-MIT-0A7075?style=for-the-badge)](LICENSE)

</div>

---

## ✨ Features

### 🛒 Shopping Experience
- Browse 50+ products across Men, Women, Footwear, Bags, Beauty, Electronics & Accessories
- Advanced filtering by category, size, color, price range, availability and rating
- Full-text search with instant results
- Product detail pages with image gallery, size/color selection, reviews
- Persistent wishlist saved to localStorage
- Cart with quantity management and free shipping threshold
- 3-step checkout flow — Address → Payment → Review

### 🔐 Authentication
- JWT-based auth with BCrypt password hashing
- User registration and login
- Role-based access control — USER / ADMIN
- Protected routes on both frontend and backend

### ⚙️ Admin Dashboard
- Product management — Add, edit, delete, toggle stock/featured
- User management — View all users, update roles
- Live statistics — Total products, users, stock counts
- Pagination and search within admin panel

### 🎨 UI / UX
- Premium fashion-magazine design with teal color palette
- Cinematic page transitions with curtain animation
- Scroll-triggered animations — fade, slide from bottom/left/right
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
> Backend starts on `http://localhost:8080`  
> Database auto-seeds with 50+ products on first run.

### 4. Run Frontend
```bash
cd shopsphere-frontend
npm install
npm run dev
```
> Frontend starts on `http://localhost:5173`

---

## 🌍 Deployment

### Frontend → Vercel
```bash
# Set this environment variable in Vercel dashboard:
VITE_API_URL = https://your-backend.up.railway.app/api
```

### Backend → Railway
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

<div align="center">

## 👤 Author

**Saibal Bera**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-saibal--bera-0A7075?style=flat-square&logo=linkedin)](https://linkedin.com/in/saibal-bera)
[![GitHub](https://img.shields.io/badge/GitHub-Saibal--Tony-031716?style=flat-square&logo=github)](https://github.com/Saibal-Tony)
[![Email](https://img.shields.io/badge/Email-berasaibal20@gmail.com-6BA3BE?style=flat-square&logo=gmail)](mailto:berasaibal20@gmail.com)

---

*⭐ If you found this project helpful, please give it a star!*

</div>
