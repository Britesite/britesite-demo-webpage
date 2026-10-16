import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { selectionBridgeScript } from "@/lib/selection/bridge";
import { selectionBridgeConfig } from "@/lib/selection/config";
import "./globals.css";

const dmSans = DM_Sans({ variable: "--font-dm-sans", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

const selectionBridge = selectionBridgeConfig();
const selectionBridgeSource = selectionBridge.origin ? selectionBridgeScript(selectionBridge.origin) : null;

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Café Lærke · Bageri og café i Aarhus C",
  description: "Morgenbrød og kaffe siden 1998. Surdejsbrød, kanelsnegle og god kaffe, bagt hver morgen i Mejlgade.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="da"
      className={`${dmSans.variable} ${fraunces.variable}`}
    >
      <head>{selectionBridgeSource ? <script dangerouslySetInnerHTML={{ __html: selectionBridgeSource }} /> : null}</head>
      <body>
        {children}
      </body>
    </html>
  );
}
