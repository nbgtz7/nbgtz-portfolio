import { Link } from 'react-router-dom'


export default function AlbumCard({ album }) {
return (
<Link to={`/album/${album.slug}`} className="group block rounded-xl overflow-hidden border border-neutral-200 bg-white hover:border-neutral-300 transition shadow-glow">
<img src={album.cover} alt={album.title} loading="lazy" className="aspect-square w-full object-cover group-hover:scale-105 transition-transform duration-300" />
<div className="p-3 flex items-center justify-between">
<h3 className="font-medium">{album.title}</h3>
<span className="text-xs text-neutral-500">{album.images.length} photos</span>
</div>
</Link>
)
}