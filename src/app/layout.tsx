import type { Metadata } from "next";
import { Cormorant, Jost } from "next/font/google";
import { selectionBridgeScript } from "@/lib/selection/bridge";
import { selectionBridgeConfig } from "@/lib/selection/config";
import "./globals.css";

const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });
const cormorant = Cormorant({ variable: "--font-cormorant", subsets: ["latin"], style: ["normal", "italic"] });

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
      className={`${jost.variable} ${cormorant.variable}`}
    >
      <head>{selectionBridgeSource ? <script dangerouslySetInnerHTML={{ __html: selectionBridgeSource }} /> : null}</head>
      <body>
        {children}
      </body>
    </html>
  );
}
