import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

const API = "https://pr3cioadmin.webartlab.tech/api/v1";

export function useApi() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [data, setData] = useState(null);

    const request = async (method: string, url: string, body = null) => {
        try {
            setLoading(true);
            setError("");
            const res = await axios({
                method,
                url: API + url,
                data: body
            });
            if (res?.status !== 200) {
                return;
            }
            if (res?.status === 200) {
                setData(res.data);
                return res.data;
            }
        } catch (err) {
            const msg = err?.message || "Something went wrong";
            toast.error(msg)
            setError(msg);
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return { request, loading, error, data };
}
