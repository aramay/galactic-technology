import "./globals.css"

export default function RootLayout({
    children,
}:{
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <title>Abid Ramay - Full-Stack Developer</title>
            <meta name="description" content="Passionate full-stack developer from SF Bay Area, California crafting beautiful digital experiences with modern technologies. Specialized in React, TypeScript, and modern web development." />
    <meta name="author" content="Abid Ramay" />
            {/* <meta charset="UTF-8" /> */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Portfolio</title>
        </head>
        <body>
            <body>
                {children}
            </body>
        </body>
        </html>
    )
}