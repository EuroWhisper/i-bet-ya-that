import Image from 'next/image';
import { HomeForm } from './HomeForm';

const HomeContent = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br	from-[#FF4B12] to-[#4200FF]">
      <Image
        alt="Gambling doberman"
        src="/mascot.svg"
        width={320}
        height={320}
      />
      <HomeForm />
    </main>
  );
};

export { HomeContent };
