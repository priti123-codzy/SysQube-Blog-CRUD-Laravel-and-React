Home page 
![4](https://github.com/user-attachments/assets/35357f4e-7f02-4652-964b-d0da856a1a1f)
User/Lon In
![2](https://github.com/user-attachments/assets/fd391d49-3206-4222-a33d-45e4dd75fd9e)
Register 
![3](https://github.com/user-attachments/assets/1d414971-106a-4d86-9e78-14a9123be799)
Admin/Log in
![2](https://github.com/user-attachments/assets/6668d3f2-e3cf-48ca-91fb-cbdfa589dc51)
Admin/dashboard
![3](https://github.com/user-attachments/assets/7b728428-8b97-4df8-80ca-8905d0e1e696)

# SysQube Blog

SysQube Blog is a fictional blog website that consists of articles. This project uses Laravel for the backend and React for the frontend.

## Features

- Authentication & Authorization
- CRUD Operations for Blog Posts
- Relationships between Users and Blog Posts
- Relationships between Categories and Blog Posts
- File Uploads for Blog Post Featured Images
- Use of Eloquent ORM for Database Interactions
- Form Validation for Blog Post Creation and Updates
- Pagination for Blog Post Listings
- Search and Filter Functionality for Blog Posts
- API Integration for CRUD Operations and Fetching External Data
- Admin Features for Managing Blog Posts
- Unit and Feature Testing

## Installation

Follow these steps to set up the project locally:

### Prerequisites

- PHP >= ^7.3|^8.0
- Composer
- Node.js & npm
- MySQL or SQLite

### Clone the Repository

git clone https://github.com/priti123-codzy/SysQube-Blog-CRUD-Laravel-and-React.git
cd SysQube-Blog-CRUD-Laravel-and-React


Backend Setup
#Install PHP dependencies using Composer:
->composer install

#Copy the .env.example file to .env:
->cp .env.example .env

#Generate the application key:
->php artisan key:generate

#Set up the database connection in the .env file. For example:
->

DB_CONNECTION=mysql

DB_HOST=127.0.0.1

DB_PORT=3306

DB_DATABASE=your_database_name

DB_USERNAME=your_database_username

DB_PASSWORD=your_database_password

#Run the database migrations:
->php artisan migrate

#Seed the database with test data:
->php artisan db:seed

**Frontend Setup**
#Install JavaScript dependencies using npm:

->npm install
->npm run watch

**Running the Application**
**Start the Laravel development server:**


->php artisan serve
Open another terminal and start the React development server:

->npm run watch
**Open your browser and navigate to http://localhost:8000 to see the application.**



**Visti website (website link)**
https://sys-qube-blog-crud-laravel-and-react.vercel.app/
