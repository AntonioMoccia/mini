import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Indirizzo verificato su Resend (dominio oleificiominichiello.it)
const FROM = process.env.CONTACT_FROM_EMAIL ?? 'Ariella <contatti@oleificiominichiello.it>';
// Dove vuoi ricevere i messaggi
const TO = process.env.CONTACT_TO_EMAIL ?? 'info@oleificiominichiello.it';

export async function POST(request: Request) {
    try {
        const { nome, email, messaggio } = await request.json();

        // Validazione minima lato server
        if (!nome?.trim() || !email?.trim() || !messaggio?.trim()) {
            return NextResponse.json(
                { error: 'Compila tutti i campi.' },
                { status: 400 }
            );
        }

        const emailValida = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!emailValida) {
            return NextResponse.json(
                { error: 'Email non valida.' },
                { status: 400 }
            );
        }

        const { error } = await resend.emails.send({
            from: FROM,
            to: TO,
            replyTo: email, // rispondi direttamente all'utente dalla tua casella
            subject: `Nuovo messaggio dal sito — ${nome}`,
            text: `Nome: ${nome}\nEmail: ${email}\n\nMessaggio:\n${messaggio}`,
        });

        if (error) {
            console.error('Errore invio Resend:', error);
            return NextResponse.json(
                { error: "Impossibile inviare il messaggio. Riprova più tardi." },
                { status: 502 }
            );
        }

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error('Errore API contatti:', err);
        return NextResponse.json(
            { error: 'Errore inatteso.' },
            { status: 500 }
        );
    }
}
