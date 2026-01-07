import axiosInstance from "./axiosInstance";

export const getPlans = async () => {
    try {
        const { data } = await axiosInstance.get('/plans/');
        return { success: true, data };
    } catch (error) {
        const err = error.response?.data || error.message || 'Failed to fetch plans';
        console.error('Error fetching plans:', err);
        return { success: false, error: err };
    }
}


export const getCurrentPlan = async (planId) => {
    try {
        const {data} = await axiosInstance.get(`/plan/${planId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
        });
        return { success: true, data}
    }catch (error){
        const err = error.response?.data || error.message || 'Failed to fetch plans';
        console.error('Error fetching plans:', err);
        return { success: false, error: err };
    }
}


export const createPaymentSession = async (planId) => {
  try {
    const { data } = await axiosInstance.post('/payment/initiate', { plan_id: planId }, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        }
    });
    return { success: true, data };
  } catch (error) {
    const err = error.response?.data || error.message || 'Failed to create payment session';
    console.error('Error creating payment session:', err);
    return { success: false, error: err };
  }
}

export const verifyPayment = async (reference) => {
  try {
    const { data } = await axiosInstance.post('payment/verify', {
        reference: reference,
    });
    return { success: true, data };
  } catch (error) {
    const err = error.response?.data || error.message || 'Failed to verify payment';
    console.error('Error verifying payment:', err);
    return { success: false, error: err };
  }
}