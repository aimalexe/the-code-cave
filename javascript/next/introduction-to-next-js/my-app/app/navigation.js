import Link from 'next/link';
import './globals.css';

export default function Layout({ children }) {
    return (
        <section>
            <nav className='bg-yellow-600 text-white p-4'>
                <ul className='flex space-x-5'>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/post/1">Post 1</Link></li>
                    <li><Link href="/post/10">Post 10</Link></li>
                    <li><Link href="/post/30">Post 30</Link></li>
                    <li><Link href="/post/11">Post 11</Link></li>
                </ul>
            </nav>
            {children}
        </section>
    );
}
