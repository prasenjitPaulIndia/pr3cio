// components/ui/Modal.tsx
"use client";

import React, { useEffect, useRef } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    width?: string; // optional custom width
}

export default function Modal({
    isOpen,
    onClose,
    title,
    children,
    width = "max-w-md",
}: ModalProps) {
    const overlayRef = useRef<HTMLDivElement>(null);

    // Close modal on ESC key
    useEffect(() => {
        function handleEsc(e: KeyboardEvent) {
            if (e.key === "Escape") onClose();
        }
        if (isOpen) document.addEventListener("keydown", handleEsc);
        return () => document.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
    }, [isOpen]);

    // Click outside to close
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === overlayRef.current) onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fadeIn"
        >
            <div
                className={`bg-[#111113] w-full ${width} mx-4 rounded-lg shadow-xl p-6 animate-scaleIn border border-gray-800`}
            >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                    {title && <h2 className="text-xl font-semibold text-white">{title}</h2>}

                    <button
                        aria-label="Close modal"
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition"
                    >
                        ✕
                    </button>
                </div>

                {/* Modal Body */}
                <div>{children}</div>
            </div>
        </div>
    );
}
