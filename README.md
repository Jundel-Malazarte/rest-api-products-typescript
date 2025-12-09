# REST API USING TYPESCRIPT: PRODUCT MANAGEMENT

A comprehensive REST API built with **Express.js** and **TypeScript** for managing product inventory.

## Features ✨

- **Product Management (CRUD)** - Create, Read, Update, and Delete product inventory items.
- **Type Safety** - Full TypeScript implementation with strict typing for robust code.
- **Security** - Basic security hardening using **CORS** and **Helmet**.
- **Data Persistence** - Integration ready for database operations (indicated by `product.database.ts`).

---

## Tech Stack ⚙️

| Component | Technology | Purpose |
| :--- | :--- | :--- |
| **Runtime** | Node.js | JavaScript runtime environment. |
| **Framework** | Express.js | Fast, unopinionated, minimalist web framework. |
| **Language** | TypeScript | Adds static typing for better scalability. |
| **Validation** | UUID | Used for unique product identifiers. |
| **Security** | Helmet, CORS | HTTP header security and Cross-Origin Resource Sharing control. |
| **Development** | ts-node-dev | Automatic server restart on code changes. |

---

## Installation

Clone the repository and install dependencies:

```bash
npm install
```
# Running the Server
#### Start the development server using ts-node-dev:

```bash
npm run dev
```

#


The server will start on `http://localhost:3000`

## API Endpoints

### User Search Endpoints

#### Search Users by Name
```
GET /product/<id>
```

**Example Request:**
```
GET http://localhost:3000/products/
```

**Example Response:**
```json
[
{
  "total": 3,
  "allProducts": [
    {
      "id": "f19c643e-643b-4021-9e27-be2339351635",
      "name": "Wrist Watch",
      "price": 1000,
      "quantity": 999999,
      "image": "image_test.png"
    },
    {
      "id": "ac53c89d-9d05-434b-b37c-c28fbe85a01a",
      "name": "Wrist Watch",
      "price": 1000,
      "quantity": 999999,
      "image": "image_test.png"
    },
    {
      "id": "1b7c4b0e-7b6a-4d4a-9d7c-2b5b6b7b8b9b",
      "name": "Smartphone",
      "price": 500,
      "quantity": 50000,
      "image": "smartphone_image.png"
    }
}
]
```

#### Search Products by ID
```
GET /products/<id>
```

**Example Request:**
```
GET http://localhost:3000/products/f19c643e-643b-4021-9e27-be2339351635
```

### Other Endpoints

#### Method,Endpoint,Description
- GET,/products,Retrieves a list of all products.
- GET,/products/:id,Retrieves a single product by its unique ID.
- POST,/products,Creates a new product. Requires JSON body.
- PUT,/products/:id,Updates an existing product by its unique ID. Requires JSON body.
- DELETE,/products/:id,Deletes a product by its unique ID.

## Project Structure

```
src/
├── app.ts                 # Main application entry point
├── users/                 # (Optional) Retained for potential future user management
│   ├── user.database.ts
│   ├── user.interface.ts
│   └── users.routes.ts
├── products/
│   ├── product.database.ts   # Product database operations (e.g., SQL Server connection)
│   ├── product.interface.ts  # Product type definitions (Product, UnitProduct)
│   └── products.routes.ts    # Product routes (GET, POST, PUT, DELETE)
└── middleware/            # Custom middleware (e.g., authentication, validation)
```

## Testing

Use Thunder Client or Postman to test the endpoints:

1. Open Thunder Client in VS Code
2. Create a new GET request
3. Enter the endpoint URL (e.g., `http://localhost:3000/products/`)
4. Click Send to view the response

## Error Handling

The API includes comprehensive error handling using HTTP Status Codes:
- Returns 404 Not Found for resources that do not exist.
- Returns 400 Bad Request for invalid request data (e.g., missing fields in a POST body).
- Returns 500 Internal Server Error for unexpected server issues.
- Provides informative error messages in the response body.

