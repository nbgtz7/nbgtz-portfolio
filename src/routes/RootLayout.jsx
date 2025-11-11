import { Outlet, NavLink } from 'react-router-dom'


export default function RootLayout() {
return (
<div className="min-h-dvh">
<nav className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-neutral-200">
<div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
<NavLink to="/" className="font-bold tracking-tight">NBGTZ • Portfolio</NavLink>
<div className="flex gap-6 text-sm">
<NavLink to="/" className={({isActive})=>`hover:opacity-80 ${isActive?'opacity-100':'opacity-80'}`}>Albums</NavLink>
<NavLink to="/contact" className={({isActive})=>`hover:opacity-80 ${isActive?'opacity-100':'opacity-80'}`}>Contact</NavLink>
</div>
</div>
</nav>
<Outlet />
<footer className="border-t border-neutral-200 mt-16">
<div className="mx-auto max-w-6xl px-4 py-10 text-sm text-neutral-400">
© {new Date().getFullYear()} NB — Portfolio. All rights reserved.
</div>
</footer>
</div>
)
}