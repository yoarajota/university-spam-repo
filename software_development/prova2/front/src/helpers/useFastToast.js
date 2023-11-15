export default function useFastToast(useToast) {
    function t(status, message) {
        useToast({
            description: message,
            position: "top-right",
            status: status,
        });
    }

    return t
}

