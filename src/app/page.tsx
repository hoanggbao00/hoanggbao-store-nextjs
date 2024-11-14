'use client';

import Image from 'next/image';

export default function Component() {
  return (
    <main>
      <section className="relative h-[calc(100vh-65px)] w-full overflow-hidden">
        <Image
          alt="Hero fashion image"
          className="object-cover"
          fill
          priority
          src="/placeholder.svg?height=1080&width=1920"
        />
      </section>
    </main>
  );
}
