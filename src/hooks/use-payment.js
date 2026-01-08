import { useQuery, useMutation } from "@tanstack/react-query";
import { getPlans, getCurrentPlan, createPaymentSession } from "@/api/paymentService";
import { useAuth } from "@/context/auth-context";


export const paymentKeys = {
    all: ['payment'],
    plans: () => [...paymentKeys.all, 'plans'],
};


export const usePlans = () => {

    return useQuery({
        queryKey: paymentKeys.plans(),
        queryFn: getPlans,
        staleTime: 5 * 60 * 1000, // 5 minutes
        refetchOnMount: false,
        refetchOnWindowFocus: false,
    });
}

export const useCurrentPlan = (planId) => {
    const { secureRequest } = useAuth();

    return useQuery({
        queryKey: paymentKeys.plans(),
        queryFn: () => secureRequest((token) => getCurrentPlan(token, planId)),
        enabled: !!planId,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
}

export const useCreatePaymentSession = () => {
    const { secureRequest } = useAuth();

    return useMutation({
        mutationFn: (planId) => secureRequest((token) => createPaymentSession(token, planId)),
        onSuccess: (data) => {
            // Handle success (e.g., redirect to payment gateway)
            console.log("Payment session created:", data);
            window.location.href = data.payment_url;
        }
    });
}



