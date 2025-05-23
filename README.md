﻿# user-registration-
#  Full Stack Registration App

This is a full stack web application built using **Django (REST API)** and **React.js (Frontend)** to manage user registrations.

---

##  Project Structure
fullstack-assessment/ │ ├── backend/ # Django REST API │ └── registration/ # CRUD for users │ └── frontend/ # React app with Axios for API calls

---

## Technologies Used

- **Backend:** Django, Django REST Framework, SQLite
- **Frontend:** React.js, Axios, HTML/CSS
- **Extras:** django-cors-headers

---

##  Features

-  View registered users
- Add new users (Name, Email, DOB)
-  Update existing users
-  Delete users
-  Clean UI using basic HTML/CSS

---

###How to Run Locally

### Backend (Django)

cd backend,
python -m venv venv
venv\Scripts\activate
pip install django djangorestframework django-cors-headers
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

The API will be available at: http://127.0.0.1:8000/api/registrations/

##Frontend (React)
cd frontend
npm install
npm start

The app will be running at: http://localhost:3000

##CORS Configuration (Django)
In your backend/settings.py, make sure this is added:

INSTALLED_APPS = [
    ...
    'corsheaders',
    'rest_framework',
    'registration',
]

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
  
]

CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

#contact rakesharakesha87@gmail.com




