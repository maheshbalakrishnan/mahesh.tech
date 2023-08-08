import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="img-polaroid">
          <div>
            <Image
              src="/img_min.jpg"
              alt="image-of-one-of-the-greatest-human-beings-to-ever-live"
              width={384}
              height={512}
              priority
            />
          </div>
        </div>
      </div>
    </main>
  )
}
