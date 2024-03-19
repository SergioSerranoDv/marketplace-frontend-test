# MagicLog technical test 
The application is build with react, leveraging its component-based architecture. Additionally, it adheres to SOLID principles, ensuring robutness, maintainability, and scalability. 
![image](https://github.com/SergioSerranoDv/marketplace-frontend-test/assets/93232800/a2096b60-028b-4f25-97d7-ffc4a77b4c38)

## Directories structure ASCII
Cloning the repository will result in the following files:
```
├── build
│   ├── static
│   │   ├── css
│   │   │   ├── main.f855e6bc.css
│   │   │   └── main.f855e6bc.css.map
│   │   ├── js
│   │   │   ├── 453.e6a42bfc.chunk.js
│   │   │   ├── 453.e6a42bfc.chunk.js.map
│   │   │   ├── main.95007158.js
│   │   │   ├── main.95007158.js.LICENSE.txt
│   │   │   └── main.95007158.js.map
│   │   └── media
│   │       ├── cart.e42c4ba0643ae463a7d53672a6711448.svg
│   │       ├── close.a89bdf815cd652afc165cf99f010d701.svg
│   │       ├── dashboard.a8d4b99b1f4282b75fe0d5d622fd724b.svg
│   │       ├── down_arrow.cbd837bb0987ad941e21926fb9054bbe.svg
│   │       ├── ecommerce.485d2225a61076e60fe5363cefa30ba9.svg
│   │       ├── email.06e32d595a6c7fe452d4695fd29aa51a.svg
│   │       ├── filters.750ec7d6d6f86ca0c1902ae55eb83186.svg
│   │       ├── padlock.f2e11c62a07139b2e7630705db97c011.svg
│   │       ├── team.0444df524665160390a33ef74076e73c.svg
│   │       ├── ticket.eafe4bdee0bc518d3c769048c693b263.svg
│   │       ├── update.3c3886ffd8e7129cbc73467801bc0085.svg
│   │       └── user_profile.f549c3b9e2e2822f4c5650061e5323b5.svg
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── Hooks.ts
│   │   ├── UseGetProducts.tsx
│   │   └── UseGetProductsByUser.tsx
│   ├── assets
│   │   └── icons
│   │       ├── cart.svg
│   │       ├── close.svg
│   │       ├── dashboard.svg
│   │       ├── down_arrow.svg
│   │       ├── ecommerce.svg
│   │       ├── email.svg
│   │       ├── filters.svg
│   │       ├── padlock.svg
│   │       ├── product.svg
│   │       ├── team.svg
│   │       ├── ticket.svg
│   │       ├── update.svg
│   │       └── user_profile.svg
│   ├── components
│   │   ├── Actions.tsx
│   │   ├── Cart.tsx
│   │   ├── Controllers.tsx
│   │   ├── Dropdown.tsx
│   │   ├── Filters.tsx
│   │   ├── Header.tsx
│   │   ├── MobileNavigation.tsx
│   │   ├── ModalForm.tsx
│   │   ├── Pagination.tsx
│   │   ├── ProductForm.tsx
│   │   ├── ProductItem.tsx
│   │   ├── ProtectedRoute.tsx
│   │   ├── RegisterForm.tsx
│   │   ├── SideBar.tsx
│   │   └── Table.tsx
│   ├── context
│   │   └── ApiContext.tsx
│   ├── interfaces
│   │   └── Product.ts
│   ├── pages
│   │   ├── AdminProducts.tsx
│   │   ├── Dashboard.tsx
│   │   └── Index.tsx
│   ├── services
│   │   ├── Auth_s.ts
│   │   ├── Products_s.ts
│   │   └── Session_s.ts
│   ├── state
│   │   ├── actions
│   │   │   └── cart.ts
│   │   ├── reducers
│   │   │   └── cart.ts
│   │   └── store.ts
│   ├── styles
│   │   ├── components
│   │   │   ├── Actions.ts
│   │   │   ├── Cart.ts
│   │   │   ├── Controllers.ts
│   │   │   ├── Dropdown.ts
│   │   │   ├── Header.ts
│   │   │   ├── MobileNavigation.ts
│   │   │   ├── SideBar.ts
│   │   │   └── Table.ts
│   │   ├── pages
│   │   │   ├── App.ts
│   │   │   └── Dashboard.ts
│   │   ├── modal.ts
│   │   └── styles.ts
│   ├── App.css
│   ├── App.test.tsx
│   ├── App.tsx
│   ├── index.css
│   ├── index.tsx
│   ├── logo.svg
│   ├── react-app-env.d.ts
│   ├── reportWebVitals.ts
│   └── setupTests.ts
├── README.md
├── package-lock.json
├── package.json
└── tsconfig.json
```
## Redux Structure 
The application use Redux to manage the cart sate, following the next files structure.
```
│   ├── state
│   │   ├── actions
│   │   │   └── cart.ts
│   │   ├── reducers
│   │   │   └── cart.ts
│   │   └── store.ts
```
## Authentication
The authentications is based on JSON web tokens, token expires after one hour.
### Endpoint to get a token
```
https://test-api-magiclog.wango.pro/v1/auth/login
```
### Payload
The payload is based on the next structure 
```
{
  user: "unique identifier",
  email: "user email",
  role: "["user role"]" default to seller 
}
```

## Scripts to run de application
In the project directory, you can run
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\

## Deployment 
The application is deployed on vps with the use of nginx as reverse proxy and pm2 as services manager.
```
server {
    listen 443 ssl;
    server_name test-app-magiclog.wango.pro;
    ssl_certificate /etc/letsencrypt/live/test-app-magiclog.wango.pro/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/test-app-magiclog.wango.pro/privkey.pem; # managed by Certbot



    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }


}

```
# Functional Documentation
The application starts the flow on https://test-app-magiclog.wango.pro/. The user can interact with the system with 2 types of roles: seller and admin.

## User stories 
The application meets the following requirements 
![image](https://github.com/SergioSerranoDv/marketplace-frontend-test/assets/93232800/205154f1-ed49-4fe2-8946-93e5726c9060)

## Architecture diagram

![VPS](https://github.com/SergioSerranoDv/marketplace-frontend-test/assets/93232800/45591b86-25ed-4093-a16b-f7b1bb58f6c7)

## Roles
### Seller
When the user login on the application, the role assigned is Seller. 
### Administrator 
The admin role is asigned in the database.

## Aplication Flow
The user start the flow on  https://test-app-magiclog.wango.pro/. The user will find some products, he can filter by name, price and sku. 
Log In
In the upper corner the start button is displayed, when the user click will this will promt a modal with the form to log in or sign up.
![image](https://github.com/SergioSerranoDv/marketplace-frontend-test/assets/93232800/3bd172ee-3449-441e-ab27-593bc3866b86)
The user 

# User Manual
This documentation is designed to provide all the information that require a user to use the marketplace in the web.
## System Requirements
To access the marketplace web application, ensure your system meets the following requirements:
- **Operating system:** Windows/Linux/MacOS
- **Browser:** Google Chrome/Safari/Mozilla Firefox/Opera (Google Chrome es el navegador recomendado)
- **Internet connection**
- **Device:** Tablet, laptop o teléfono móvil
## User interface

### Main Page 
Upon accessing the main page, users will encounter a curated selection of products. Here, users can perform the following actions:

- Filter products by name, price, and SKU.
- Add products to their cart by clicking the "Agregar al carrito" button.
- View and manage the contents of their cart by hovering over the cart icon located in the upper right corner.
- Adjust the quantity of products in the cart by incrementing, decrementing, or directly changing the quantity.
  
## Dashboard Page
Path = https://test-app-magiclog.wango.pro/dashboard
This is the dashboard page, here the user manage the products as seller, with the CRUD operations.

## Operations
- Add new product:
The user presses the button Crear nuevo producto and complete the form with the required data: 
SKU, Nombre, Cantidad, Precio.
- Update product:
The user click the icon edit and modify the data with the new quired updates.
SKU, Nombre, Cantidad, Precio.
- Delete product:
The user click the icon delete.










