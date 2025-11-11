export default function Contact() {
return (
<main className="mx-auto max-w-xl px-4 py-16">
<h1 className="text-3xl font-bold">Contact</h1>
<p className="mt-3 text-neutral-400">For collaborations, prints, or questions.</p>


{/* Replace action with your Formspree or other endpoint */}
<form action="https://formspree.io/f/mldaeodz" method="POST" className="mt-8 grid gap-4">
<input className="bg-white border border-neutral-300 rounded p-3" name="name" placeholder="Your name" required />
<input className="bg-white border border-neutral-300 rounded p-3" type="email" name="email" placeholder="Your Email" required />
<textarea className="bg-white border border-neutral-300 rounded p-3" name="message" rows="5" placeholder="Message" />
<button className="rounded bg-white text-black font-medium px-4 py-2 hover:opacity-90">Send</button>
</form>


<div className="mt-8 text-sm text-neutral-600">
<p>Socials: <a className="underline" href="https://www.instagram.com/nbgtz_/" target="_blank">Instagram</a> • <a className="underline" href="bogenschutz.nicolas@hotmail.fr">Email</a></p>
</div>
</main>
)
}