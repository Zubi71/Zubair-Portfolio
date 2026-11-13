import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact — Zubair Bin Zahid",
  description: "Have a project in mind? Tell Zubair about your business and get a full website preview first — pay only after you approve it.",
  alternates: { canonical: "https://zubair.dyznoai.com/contact" },
};

export default function Contact() {
  return (
    <main className="wrap">
      <section className="page-hero">
        <p className="kicker">Contact</p>
        <h1>Have a Project in Mind? Let&apos;s Build Something Great.</h1>
        <p className="sub">Fill in the form and it will open WhatsApp with your enquiry pre-filled — press send there to submit it. That is the real submission step; this form does not pretend to send an email on its own.</p>
      </section>
      <section className="contact-section">
        <ContactForm />
      </section>
    </main>
  );
}
