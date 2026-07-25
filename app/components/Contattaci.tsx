'use client';

import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

export default function Contattaci() {
    const [form, setForm] = useState({ nome: '', email: '', messaggio: '' });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const headingRef = useRef(null);
    const formRef = useRef(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            headingRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
            }
        );
        gsap.fromTo(
            formRef.current,
            { y: 40, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: formRef.current, start: 'top 85%' },
            }
        );
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const res = await fetch('/api/contatti', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data.error ?? 'Invio non riuscito.');
            }

            setSent(true);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Invio non riuscito.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contattaci" className="w-full bg-black py-24 px-8 md:px-16 flex justify-center">
            <div className="w-full max-w-2xl">
                {/* Heading */}
                <div ref={headingRef} className="mb-14">
                    <p className="text-xs tracking-widest uppercase text-[#D6AB5D] font-light mb-4">
                        Contattaci
                    </p>
                    <h2 className="text-4xl md:text-6xl font-light text-white leading-tight">
                        Parliamo<br />di Ariella.
                    </h2>
                </div>

                {/* Form */}
                <div ref={formRef}>
                    {sent ? (
                        <div className="py-16">
                            <p className="text-[#D6AB5D] text-xs tracking-widest uppercase font-light mb-3">
                                Messaggio inviato
                            </p>
                            <p className="text-white text-lg font-light">
                                Ti risponderemo al più presto.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                            <Field label="Nome" name="nome" type="text" value={form.nome} onChange={handleChange} required />
                            <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
                            <TextareaField label="Messaggio" name="messaggio" value={form.messaggio} onChange={handleChange} required />

                            {error && (
                                <p className="text-red-400 text-xs tracking-widest uppercase font-light">
                                    {error}
                                </p>
                            )}

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group text-xs tracking-widest uppercase font-light text-white cursor-pointer flex flex-col items-start gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span>{loading ? 'Invio in corso…' : 'Invia messaggio'}</span>
                                    <span className="block h-[1px] w-full bg-[#D6AB5D] transition-transform duration-300 origin-left group-hover:scale-x-110" />
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

function Field({ label, name, type, value, onChange, required }: {
    label: string; name: string; type: string; value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean;
}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-[#9e9e9e] font-light">{label}</label>
            <input
                type={type} name={name} value={value} onChange={onChange} required={required}
                className="bg-transparent border-b border-white/20 text-white text-sm font-light py-3 outline-none focus:border-[#D6AB5D] transition-colors duration-300"
            />
        </div>
    );
}

function TextareaField({ label, name, value, onChange, required }: {
    label: string; name: string; value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; required?: boolean;
}) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-xs tracking-widest uppercase text-[#9e9e9e] font-light">{label}</label>
            <textarea
                name={name} value={value} onChange={onChange} required={required} rows={4}
                className="bg-transparent border-b border-white/20 text-white text-sm font-light py-3 outline-none focus:border-[#D6AB5D] transition-colors duration-300 resize-none"
            />
        </div>
    );
}
