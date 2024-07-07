import type { Metadata } from "next";
import { Inter, Raleway, Montserrat, Lato} from "next/font/google";
import "./globals.css";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
})
 
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lato = Lato({ weight: ['100', '300', '400', '700', '900'], style: ['italic','normal'], subsets: ["latin"] ,display: 'swap', variable: '--font-lato'});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${montserrat.variable} ${inter.variable} ${lato.variable} bg-[#C4D8C4] bg-none`}>
        {children}
        </body>
    </html>
  );
}
