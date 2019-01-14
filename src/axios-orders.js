import axios from "axios";

const instance = axios.create({
    baseURL:"https://react-my-burger-b4fde.firebaseio.com/"
});

export default instance;