# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.


# Vite Vue Project - Shapy User panel

This is a project built with Vite and Vue.js, an user panel the 

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

# Basic CRUD Operations for Shapes
Create: Admin can create a shape based on name, color and shape. The post request will be sent to the backend if the fields are valid

Read: Admin can view all the available shapes and details on the View.vue screen

Update: Admin can update/edit the shape's name, color, or shape

Delete: Admin can delete the specified shape







