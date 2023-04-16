import Link from 'next/link'

export default function Page404() {
    return (
        <div>
            <h1>404</h1>
            <Link  href="/">
                Ir para Home
            </Link>
        </div>
    )
}