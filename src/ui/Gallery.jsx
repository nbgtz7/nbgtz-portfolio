import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'


export default function Gallery({ images, title }) {
return (
<PhotoProvider maskOpacity={0.85} bannerVisible={false}>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
{images.map((src, i) => (
<PhotoView key={i} src={src}>
<img
src={src}
alt={`${title} #${i+1}`}
loading="lazy"
className="w-full h-full object-cover aspect-square rounded-lg border border-neutral-200 hover:scale-105 transition-transform duration-300"
/>
</PhotoView>
))}
</div>
</PhotoProvider>
)
}