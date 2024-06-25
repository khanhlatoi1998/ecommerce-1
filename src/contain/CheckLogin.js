export const CheckLogin = () => {
    const getToken = localStorage.getItem('token')
    if (getToken) {
        return true;
    } else {
        return false;
    }
};

