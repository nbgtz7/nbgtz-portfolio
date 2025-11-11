import { motion } from 'framer-motion'
import albums from '../shared/albums.js'
import AlbumCard from '../ui/AlbumCard.jsx'


export default function Home() {
return (
<main className="mx-auto max-w-6xl px-4 py-12">
<header>
<h1 className="text-3xl md:text-5xl font-bold tracking-tight">Albums</h1>
<p className="mt-3 text-neutral-600">Photo portfolio — curated collections.</p>
<p className="mt-3 text-neutral-600">Nicolas Bogenschutz</p>
</header>


<motion.section
layout
initial={{ opacity: 0, y: 8 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: .4 }}
className="mt-8 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
>
{albums.map((a) => (
<AlbumCard key={a.slug} album={a} />
))}
</motion.section>
</main>
)
}