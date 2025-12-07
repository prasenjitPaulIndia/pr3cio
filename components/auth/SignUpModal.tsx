import { useState } from "react";
import Modal from "../ui/Modal";
import { useApi } from "@/api/useApi";
import { toast } from "sonner";
import { z, ZodError } from "zod";

export default function SignupModal({ isOpen, onClose }) {
    const { request, loading, error } = useApi();

    const [step, setStep] = useState("signup"); // signup | otp

    const [form, setForm] = useState({
        name: "",
        user_name: "",
        email: "",
        phone: "",
        password: "",
        is_artist: false,
    });

    const [otp, setOtp] = useState("");

    const diceAvatar = `https://api.dicebear.com/9.x/initials/png?seed=${form.name}&radius=50&backgroundType=gradientLinear`;

    const [uploadedAvatar, setUploadedAvatar] = useState(null);
    const avatarPreview = uploadedAvatar || diceAvatar;

    const formValidation = z.object({
        name: z.string().min(1, "Name is required"),
        user_name: z.string().min(1, "Username is required"),
        email: z.string().email("Invalid email address"),
        phone: z.string().min(1, "Phone number is required"),
        password: z.string().min(8, "Password must be at least 8 characters"),
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => setUploadedAvatar(reader.result);
        reader.readAsDataURL(file);
    };

    const toggleArtist = () => {
        setForm((prev) => ({ ...prev, is_artist: !prev.is_artist }));
    };

    // --- SUBMIT SIGNUP ---
    const onSubmitSignup = async () => {
        try {
            formValidation.parse(form);
        } catch (error) {
            const formattedError = JSON.parse(error)[0]?.message;
            const errorMessage = formattedError || "Invalid input";
            toast.error(errorMessage);
            return;
        }
        if (!form.name || !form.user_name || !form.email || !form.phone || !form.password) {
            toast.warning("Please fill in all fields");
            return;
        }
        const payload = {
            ...form,
            avatar: avatarPreview,
        };

        const res = await request("POST", "/users/sign-up", payload);
        console.log("SIGNUP RES:", res);

        if (res?.status == "success") {
            setStep("otp");
        }
    };

    // --- SUBMIT OTP ---
    const onSubmitOtp = async () => {
        const res = await request("POST", "/users/verify-email", {
            email: form.email,
            otp,
        });

        if (res?.success) {
            alert("Email verified successfully!");
            onClose();
        }
    };

    if (!isOpen) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Sign up">
            <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md">
                <div className="w-full max-w-md bg-[#111] p-7 rounded-2xl border border-white/10 shadow-xl relative">

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 text-gray-400 hover:text-white text-xl"
                    >
                        ✕
                    </button>

                    {/* ========== STEP 1: SIGNUP FORM ========== */}
                    {step === "signup" && (
                        <>
                            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                                Create Your Account
                            </h2>

                            {/* Avatar Upload */}
                            <div className="flex flex-col items-center gap-3 mb-5">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleAvatarChange}
                                    className="hidden"
                                    id="avatar-upload"
                                />
                                <label htmlFor="avatar-upload">
                                    <img
                                        src={avatarPreview}
                                        className="w-20 h-20 rounded-full border border-white/20 object-contain cursor-pointer"
                                        alt="avatar preview"
                                    />
                                </label>
                            </div>

                            <div className="space-y-2">
                                <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
                                <Input label="Username" name="user_name" value={form.user_name} onChange={handleChange} />
                                <Input label="Email" name="email" value={form.email} onChange={handleChange} />
                                <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} />
                                <Input label="Password" type="password" name="password" value={form.password} onChange={handleChange} />

                                <div className="flex items-center justify-between my-3">
                                    <span className="text-gray-300">Are you an Artist?</span>

                                    <button
                                        onClick={toggleArtist}
                                        className={`w-12 h-6 rounded-full relative transition-colors duration-300 ${form.is_artist ? "bg-[#B8D344]" : "bg-gray-600"
                                            }`}
                                    >
                                        <span
                                            className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 ${form.is_artist ? "translate-x-6" : "translate-x-0"
                                                }`}
                                        ></span>
                                    </button>
                                </div>

                                <button onClick={onSubmitSignup} className="btn-3">
                                    Sign Up
                                </button>

                                {/* <button className="btn-4">
                                    <img
                                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                                        className="w-5 h-5"
                                    />
                                    Continue with Google
                                </button> */}
                            </div>
                        </>
                    )}

                    {/* ========== STEP 2: OTP VERIFICATION ========== */}
                    {step === "otp" && (
                        <>
                            <h2 className="text-2xl font-semibold text-white mb-6 text-center">
                                Verify Your Email
                            </h2>

                            <p className="text-gray-400 text-center mb-4">
                                We have sent an OTP to <span className="text-white">{form.email}</span>
                            </p>

                            <div className="flex justify-center mb-6">
                                <input
                                    type="text"
                                    maxLength={6}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    className="tracking-widest text-center text-xl w-40 px-4 py-3 rounded-xl bg-[#1a1a1a] border border-white/10 text-white focus:border-[#B8D344] outline-none"
                                    placeholder="Enter OTP"
                                />
                            </div>

                            <button onClick={onSubmitOtp} className="btn-3 w-full">
                                Verify Email
                            </button>

                            <button
                                onClick={() => setStep("signup")}
                                className="mt-3 text-gray-400 hover:text-white text-sm mx-auto block"
                            >
                                ← Go back
                            </button>
                        </>
                    )}
                </div>
            </div>
        </Modal>
    );
}

/* INPUT COMPONENT */
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
