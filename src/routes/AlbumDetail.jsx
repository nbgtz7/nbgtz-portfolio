import { useParams, Link } from 'react-router-dom'
import albums from '../shared/albums.js'
import Gallery from '../ui/Gallery.jsx'


export default function AlbumDetail() {
const { slug } = useParams()
const album = albums.find(a => a.slug === slug)


if (!album) {
return (
<main className="mx-auto max-w-6xl px-4 py-16">
<h1 className="text-2xl font-bold">Album not found</h1>
<p className="mt-4"><Link className="underline" to="/">← Back to albums</Link></p>
</main>
)
}


return (
<main className="mx-auto max-w-6xl px-4 py-10">
<div className="flex items-end justify-between gap-4">
<div>
<h1 className="text-2xl md:text-4xl font-bold">{album.title}</h1>
<p className="mt-2 text-neutral-400">{album.images.length} photos</p>
</div>
<Link to="/" className="text-sm underline opacity-80 hover:opacity-100">← All albums</Link>
</div>


<div className="mt-6">
<Gallery images={album.images} title={album.title} />
</div>
</main>
)
}