import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { MotionProvider } from "@/components/MotionProvider";
import { selectionBridgeScript } from "@/lib/selection/bridge";
import { selectionBridgeConfig } from "@/lib/selection/config";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const selectionBridge = selectionBridgeConfig();
const selectionBridgeSource = selectionBridge.origin ? selectionBridgeScript(selectionBridge.origin) : null;

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "Britesite · Chat dig til en hjemmeside, du selv kan rette",
  description:
    "Fortæl Britesite med dine egne ord, hvad der skal ændres. Se ændringen med det samme, og tryk udgiv, når du er klar. Ingen kode, intet bureau, ingen ventetid.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="da"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <head>{selectionBridgeSource ? <script dangerouslySetInnerHTML={{ __html: selectionBridgeSource }} /> : null}</head>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
