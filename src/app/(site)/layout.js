import Footer from "@/components/home-components/footer";
import Header from "@/components/home-components/header";
import HeroUiThemeProvider from "@/providers/HeroUiProvider";
import "@/styles/global.css";

export const metadata = {
    title: "Ryze",
    description: "ryze",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </head>
            <body>
                <HeroUiThemeProvider>
                    {/* <StoreProvider> */}
                    <Header />
                    <main>{children}</main>
                    <Footer />
                    {/* </StoreProvider> */}
                </HeroUiThemeProvider>
            </body>
        </html>
    );
}
