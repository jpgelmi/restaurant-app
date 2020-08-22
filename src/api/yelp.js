import axios from "axios"

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: "Bearer 1fngpJ0TY6CMnx_RJ6O9z1A7jExTGF_NQNsMuOGkUzvnJwNN4wxzfy7XgTgNgDu9WyM8LSZk8LOFAptV9u2cAkar9I3YQwbmSMRBY25kfHYjo3UEM1aEh012JDU_X3Yx"
    }
});

