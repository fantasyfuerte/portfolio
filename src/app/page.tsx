import { Monsieur_La_Doulaise } from "next/font/google";

const playwritevn = Monsieur_La_Doulaise({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="pt-10 bg-basicBackground h-screen">
      <div className="text-primary">
        <h3 className={`text-lg text-center -ml-4`}>Welcome To</h3>
        <h3 className="text-lg text-center py-2">
          <span className={`${playwritevn.className} text-6xl`}>Fuerte</span>
          &apos;s Showcase
        </h3>
      </div>
    </main>
  );
}
