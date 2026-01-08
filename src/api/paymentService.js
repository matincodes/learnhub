import axiosInstance from "./axiosInstance";

export const getPlans = async () => {
        const { data } = await axiosInstance.get('/plans/');
        console.log(data);
        return data
}


export const getCurrentPlan = async (token, planId) => {
        const {data} = await axiosInstance.get(`/plan/${planId}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return data;
}


export const createPaymentSession = async (token, planId) => {
    const { data } = await axiosInstance.post('/payment/initiate/', { plan_id: planId}, {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    return data;
}
