# Sales Savvy - E-Commerce Platform

A full-stack e-commerce application built with React frontend and Spring Boot backend, featuring user authentication, product management, shopping cart functionality, and payment integration with Razorpay.

## 🚀 Features

### Customer Features
- User registration and login with JWT authentication
- Browse products by categories (Shirts, etc.)
- Add products to shopping cart
- Secure checkout with Razorpay payment integration
- View order history
- Responsive design with modern UI

### Admin Features
- Admin dashboard with comprehensive analytics
- Product management (Add, Delete, View products)
- User management (View, Modify user details)
- Business analytics (Daily, Monthly, Yearly, Overall revenue)
- Category-wise sales reporting

### Technical Features
- JWT-based authentication with HTTP-only cookies
- CORS configuration for secure cross-origin requests
- BCrypt password encryption
- Real-time cart count updates
- Image upload support for products
- Payment verification with Razorpay

## 🛠️ Technologies Used

### Frontend
- **React** 18 with Vite
- **React Router** for navigation
- **CSS3** for styling
- **Razorpay** payment integration
- **Fetch API** for HTTP requests

### Backend
- **Java** with **Spring Boot** 3.x
- **Spring Security** for authentication
- **JPA/Hibernate** for database operations
- **MySQL** database
- **JWT** for token-based authentication
- **Razorpay** API for payments
- **BCrypt** for password hashing

## 📁 Project Structure

```
Sales_Savvy_Backend/
├── src/main/java/com/nithish/sales/
│   ├── Controller/          # REST API controllers
│   ├── Entity/             # JPA entities
│   ├── Repository/         # Data access layer
│   ├── Service/           # Business logic
│   ├── DTO/               # Data transfer objects
│   └── AuthenticationFilter.java
├── pom.xml
└── README.md

SalesSavvy_Frontend/SALESSAVVY/
├── src/
│   ├── components/        # React components
│   ├── assets/           # CSS, images
│   ├── routes/           # Route configuration
│   └── App.jsx
├── package.json
└── vite.config.js
```

## ⚙️ Installation & Setup

### Prerequisites
- **Java 17+**
- **Node.js 16+**
- **MySQL 8.0+**
- **Maven 3.6+**

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/Nithish699/Sales_Savvy_EcommercePlatform.git
   cd Sales_Savvy_Backend
   ```

2. **Configure database**
   - Create MySQL database: `sales_savvy_db`
   - Rename `applicationCopy.properties` to `application.properties`
   - update `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/sales_savvy_db
   spring.datasource.username=your_username
   spring.datasource.password=your_password
   jwt.secret=your_64_byte_secret_key
   razorpay.key.id=your_razorpay_key_id
   razorpay.key.secret=your_razorpay_secret
   ```

3. **Install dependencies and run**
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
   Backend will start on `http://localhost:9090`

### Frontend Setup

1. **Navigate to frontend directory**
   ```bash
   cd SalesSavvy_Frontend/SALESSAVVY
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   Frontend will start on `http://localhost:5174`

## 🗄️ Database Schema

### Key Entities
- **Users** - Customer and admin accounts
- **Products** - Product catalog with categories
- **Categories** - Product categorization
- **Orders** & **OrderItems** - Order management
- **CartItems** - Shopping cart functionality
- **JWTTokens** - Token management for authentication

## 🔐 API Endpoints

### Authentication
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout
- `POST /api/users/register` - User registration

### Products
- `GET /api/products` - Get products (with category filter)
- `POST /admin/products/add` - Add new product (Admin)
- `DELETE /admin/products/delete` - Delete product (Admin)

### Cart & Orders
- `POST /api/cart/add` - Add item to cart
- `GET /api/cart/items/count` - Get cart count
- `GET /api/orders` - Get user orders

### Payment
- `POST /api/payment/create` - Create Razorpay order
- `POST /api/payment/verify` - Verify payment

### Admin Analytics
- Will be implemented soon (currently admin side will be handaled by database manupulation)

## 🎨 Key Components

### Frontend Components
- [`LoginPage`](SalesSavvy_Frontend/SALESSAVVY/src/components/LoginPage.jsx) - User authentication
- [`CustomerHomePage`](SalesSavvy_Frontend/SALESSAVVY/src/components/CustomerHomePage.jsx) - Main shopping interface
- [`AdminDashboard`](SalesSavvy_Frontend/SALESSAVVY/src/components/AdminDashboard.jsx) - Admin management panel
- [`CartPage`](SalesSavvy_Frontend/SALESSAVVY/src/components/CartPage.jsx) - Shopping cart with payment
- [`ProductList`](SalesSavvy_Frontend/SALESSAVVY/src/components/ProductList.jsx) - Product display component

### Backend Services
- [`AuthService`](Sales_Savvy_Backend/src/main/java/com/nithish/sales/Service/AuthService.java) - JWT authentication
- [`PaymentService`](Sales_Savvy_Backend/src/main/java/com/nithish/sales/Service/PaymentService.java) - Razorpay integration
- [`OrderService`](Sales_Savvy_Backend/src/main/java/com/nithish/sales/Service/OrderService.java) - Order management
- [`PaymentService`](Sales_Savvy_Backend/src/main/java/com/nithish/sales/Service/PaymentService.java) - Payment management
- [`CarttService`](Sales_Savvy_Backend/src/main/java/com/nithish/sales/Service/CartService.java) - Cart management

## 🔒 Security Features

- JWT-based authentication with HTTP-only cookies
- Password encryption using BCrypt
- CORS configuration for secure API access
- Authentication filter for protected routes
- Role-based access control (ADMIN/CUSTOMER)

## 💳 Payment Integration

- Integrated with **Razorpay** payment gateway
- Secure payment verification
- Order creation and tracking
- Payment status management

## 🚀 Deployment

### Backend Deployment
```bash
mvn clean package
java -jar target/sales-savvy-backend.jar
```

### Frontend Deployment
```bash
npm run build
# Deploy dist/ folder to your hosting service
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Developer**: Nithish  
**Email**: nithish699734@gmail.com

## 🙏 Acknowledgments

- Spring Boot community for excellent documentation
- React team for the amazing framework
- Razorpay for secure payment processing

---

⭐ Star this repository if you found it helpful!