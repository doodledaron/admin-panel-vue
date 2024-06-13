import axios from 'axios';
import { useAuthStore } from './store/authStore.js';


// Create an Axios instance
const apiClient = axios.create({
    baseURL: 'https://shapy-backend.onrender.com/admin/', 
    withCredentials: false, 
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor to include the token
apiClient.interceptors.request.use(config => {
    const authStore = useAuthStore();
    if (authStore.token) {
        config.headers['Authorization'] = `Token ${authStore.token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});


export default {
    // fetch all shape data: View.vue
    fetchShapeData() {
        return apiClient.get('/');
    },

    fetchShahpeDataById(id){
        return apiClient.get(`${id}/`);
    },

    //Add a shape
    createShape(shape){
        return apiClient.post('create/', shape);
    },

    //Delete a shape
    deleteShape(id){
        return apiClient.delete(`delete/${id}/`);
    },

    //edit a shape
    editShape(id, shapeChanges){
        return apiClient.patch(`edit/${id}/`, shapeChanges);
    },

    //sign up user
    signUpAdmin(formData){
        return apiClient.post('auth/users/', formData);
    },

    //log user
    logInAdmin(formData){
        const authStore = useAuthStore();
        console.log('the token is' ,authStore.token)
        return apiClient.post('auth/token/login', formData);
    },
    
    //logout
    logOutAdmin(){
        const authStore = useAuthStore();
        authStore.removeToken(); 
        return apiClient.post('auth/token/logout');
    },
};
