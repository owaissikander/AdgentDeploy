"use client"
import * as React from "react";
import { HeroUIProvider} from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import {ToastProvider} from "@heroui/toast";

export default function HeroUiThemeProvider({ children }) {
    return (
        <HeroUIProvider>
            <NextThemesProvider attribute="class"  defaultTheme="light">
                <ToastProvider />
                 {children}
            </NextThemesProvider>
        </HeroUIProvider>
    );
}
