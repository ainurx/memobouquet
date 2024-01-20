import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Image className="mx-auto d-block" src='/memobouquet-logo.png' alt='memo.bouquet' width={320} height={320} />
      <h2 className="py-3 text-center">for your every special moment 💖</h2>
    </main>
  )
}
