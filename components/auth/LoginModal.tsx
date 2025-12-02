import { useState } from "react";
import Modal from "../ui/Modal";
import { useApi } from "@/api/useApi";

export default function LoginModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void; }) {
    const { request, loading, error } = useApi();

    const [form, setForm] = useState({
        loginId: "",
        password: "",
    });

    const handleChange = (e: any) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    if (!isOpen) return null;


    const onSubmit = async () => {
        const payload = {
            ...form,
        };

        const res = await request("POST", "/users/sign-in", payload);
        console.log(res)
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Sign in">
            <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md">

                {/* Modal Container */}
                <div className="w-full max-w-md bg-[#111] p-7 rounded-2xl border border-white/10 shadow-xl animate-scaleIn relative">

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-gray-400 hover:text-white text-xl"
                    >
                        ✕
                    </button>

                    <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                        Sign In
                    </h2>

                    {/* Form */}
                    <div className="space-y-2">
                        <Input label="Email/Phone" name="loginId" value={form.loginId} onChange={handleChange} />
                        <Input label="Password" type="password" name="password" value={form.password} onChange={handleChange} />

                        <button onClick={() => onSubmit()} className="btn-3 mt-4">
                            Sign In
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

/* Input Component */
function Input({ label, ...props }) {
    return (
        <div>
            <label className="block text-gray-300 mb-1">{label}</label>
            <input
                {...props}
                className="w-full px-3 py-2 rounded-xl bg-[#1a1a1a] border border-white/10 text-white focus:border-[#B8D344] outline-none"
            />
        </div>
    );
}
