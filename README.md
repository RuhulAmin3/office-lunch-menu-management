<H1 align ="center" >OFFICE LUNCH MENU MANAGEMENT </H1> 
 
 Welcome to the office lunch menu management Repository. This project hosted at [https://lunch-menu-management.netlify.app/](https://lunch-menu-management.netlify.app/).

- [Configuration and Setup](#configuration-and-setup)
- [Key Features](#key-features)
- [Technologies used](#technologies-used)
  - [Frontend](#frontend)
  - [Backend](#backend)
  - [Database](#database)

## Configuration and Setup

In order to run this project locally, simply clone the repository or download as zip and unzip on your machine.

- Open the project in your prefered code editor.
- Go to terminal -> New terminal (If you are using VS code)
- Split your terminal into two (run the Frontend on one terminal and the server on the other terminal)

In the first terminal

- Supply the following credentials

```
#  --- .env  ---

NODE_ENV=development
VITE_API_URL=

```

```
$ cd Frontend
$ npm install (to install Frontend-side dependencies)
$ npm run dev(to start the Frontend)

```

In the second terminal

- Supply the following credentials

```
#  --- .env  ---

NODE_ENV=development
PORT=4000
DATABASE_URL="your database url will be here"
BCRYPT_SALT_ROUNDS=
JWT_SECRET=
JWT_EXPIRES_IN=


```

```
# --- Terminal ---

$ cd Backend
$ npm install (to install Backend-side dependencies)
$ npm start (to start the Backend)

```

## Key Features

1. Admin

- Login Admin
- Add Lunch Menu
- Display All Selected Menu List
- View detail in Modal

2. Employee

- Register and Login account
- View all the available Lunch menus for the current day.
- Select Menus.
- 404 Page

### Admin Login

gmail: admin@gmail.com
password: 123123

### Employee Login

gmail: employee@gmail.com
password: 123123

<br/>

## Technologies used

This project was created using the following technologies.

#### Frontend

- React JS - JavaScript library that is used for building user interfaces specifically for single-page applications
- Redux - For managing and centralizing application state
- React Router Dom - For handle routing
- React hook form - For handling Form
- RTK Query - For making Api handling
- Ant Design - For User Interface
- LocalStorage - For persisting Selected Lunch Menus.

#### Backend

- Node JS - A runtime environment to help build fast server applications using JS
- Express JS -The server for handling and routing HTTP requests
- Bcrypt JS - For data encryption
- Jsonwebtoken - For authentication
- Prisma - For Schema design and Query building
- http-status - For handing proper http status
- Zod - For schema validation

#### Database

- Postgre SQL - For storing data.
- Supabase - For hosting database.
