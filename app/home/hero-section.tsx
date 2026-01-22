import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center bg-primary w-full text-white py-20 px-4">
      <div className='max-w-4xl '>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8">

          <div>
            <h1 className="text-4xl font-bold mb-4">
              Thoughtful email marketing, <br /> built for real humans
            </h1>
            <p>
              Helping brands build intentional email and lifecycle programs that drive engagement and growth.
            </p>
          </div>

          <Image src="/white-logo.svg" alt="Emails with Anna Logo" width={200} height={200} />
        </div>

        <button className='btn mt-8 self-center md:self-start'>
          Let's Talk
        </button>
      </div>

    </section>
  );
}