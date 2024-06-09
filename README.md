-# Vite Vue Project - Shapy Admin panel

This is a project built with Vite and Vue.js, an admin panel the 

## Table of Contents

- [Project Setup](#project-setup)
- [Folder Structure](#folder-structure)
- [Features](#features)

## Project Setup

1. npm install (after cloneing)
```
npm install
```

2. run in dev mode in local host:
```
npm run dev
```

## Project Setup
```
src
├── App.vue
├── assets
│   └── style.css
├── auth
│   ├── LogIn.vue
│   └── SignUp.vue
├── components
│   ├── AddShapeForm.vue
│   ├── BaseInput.vue
│   ├── DeleteDialogContent.vue
│   ├── Dialog.vue
│   ├── EditShapeForm.vue
│   ├── ListItem.vue
│   ├── NavigationBar.vue
│   └── SearchAndAddButtonRow.vue
├── main.js
├── services.js
├── store
│   └── authStore.js
├── utils.js
└── views
    ├── SignUpOrLogin.vue
    └── View.vue
```

## Features

### Basic CRUD Operations for Shapes
Create: Admin can create a shape based on name, color and shape. The post request will be sent to the backend if the fields are valid

Read: The admin can view all the available shapes and details on the View.vue screen

Update: The admin can update/edit the shape's name, color, or shape

Delete: Admin can delete the specified shape

### Input validation and error handling
- field rules: the name cannot have numbers and cannot exceed 10 characters
- using the selection field: admin can only choose the available colour/shape while adding/editing shape
- The form for editing/adding a shape cannot be submitted if the requirements above are not met

### Authentication
- Simple token authentication are used for login/signup. No additional authentication features such as reset password, rememeber user, etc.





