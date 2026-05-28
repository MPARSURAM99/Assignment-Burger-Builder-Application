# Assignment-Burger-Builder-Application

Burger Builder Application where users can create a burger by adding or removing slices. Each slice has a price and the total burger price update dynamically based on the slices selected and the quantity of burgers ordered.

---

## Live Demo

Frontend:
https://assignment-burger-builder-applicati.vercel.app

Backend API:
https://assignment-burger-builder-application.onrender.com

---

## Features

- Build a custom burger
- Add burger slices
- Remove burger slices
- Dynamic price calculation
- Update burger quantity
- Fully responsive UI
- Checkout form with validation
- Save orders to MongoDB Atlas
- Fully deployed MERN application
- Modern UI using Tailwind CSS

---

## Tech Stack

### Frontend

- React 19
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js

### Database

- MongoDB Atlas

### Deployment

- Frontend: Vercel
- Backend: Render

---

### Clone Repository

```bash
git clone https://github.com/MPARSURAM99/Assignment-Burger-Builder-Application.git
```

---

## Install Dependencies

### Root

```bash
npm install
```

### Frontend

```bash
cd client
npm install
```

### Backend

```bash
cd ../server
npm install
```

---

## Environment Variables

Create `.env` file inside `server/`

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

## Run Application

### Run Both Together

```bash
npm run dev
```

---

## API Endpoints

### Create Order

```http
POST /api/orders
```

---

## Business Logic Implemented

- Bread is fixed at top and bottom
- Maximum 10 slices allowed
- Dynamic total price calculation
- Quantity-based pricing
- Responsive layout for all screen sizes
- Form validation before order submission

---

## Deployment

Frontend deployed on Vercel

Backend deployed on Render

Database hosted on MongoDB Atlas

---

## Author

Parsuram Maharana

Final Year B.Tech CSE Student
Full Stack MERN Developer

GitHub:
https://github.com/MPARSURAM99

---

## License

This project is developed for educational and assignment purposes.
