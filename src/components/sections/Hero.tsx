import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS } from '@/lib/constants';

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.223 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.071 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.069-3.292z" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-white" id="hero">
      <div className="absolute inset-x-0 top-0 h-px bg-slate-200" />
      <div className="absolute inset-x-0 bottom-0 z-0 h-28 bg-gradient-to-t from-slate-50 to-white" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-9 pb-8 md:pt-12 md:pb-14 lg:pt-14 lg:pb-16">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="font-black uppercase leading-[0.78] text-[#2b3440]">
            <span className="relative z-20 block text-[2.12rem] min-[360px]:text-[3rem] min-[390px]:text-[3.25rem] sm:text-[5.2rem] md:text-[7.4rem] lg:text-[9.7rem] xl:text-[11rem]">
              Remodeling
            </span>
            <span className="relative z-0 mt-4 block whitespace-nowrap text-[1.18rem] normal-case leading-none text-[#0b6fb8] min-[360px]:text-[1.68rem] min-[390px]:text-[1.85rem] sm:text-[2.8rem] md:text-[3.95rem] lg:text-[4.95rem]">
              <span className="relative isolate inline-block">
                <span className="relative z-20">Kitchen</span>
                <Image
                  src="/images/hero-objects/kitchen-module-v1.webp"
                  alt=""
                  width={1672}
                  height={941}
                  sizes="(min-width: 1280px) 600px, (min-width: 1024px) 520px, (min-width: 768px) 450px, 260px"
                  className="hero-object-float pointer-events-none absolute right-[-42%] top-[-10px] z-0 w-[190px] max-w-none translate-x-1/2 opacity-80 brightness-95 contrast-125 saturate-110 drop-shadow-[0_30px_54px_rgba(15,23,42,0.30)] min-[360px]:right-[-48%] min-[360px]:top-[-16px] min-[360px]:w-[240px] sm:right-[-6%] sm:top-[-8px] sm:w-[370px] md:top-[-4px] md:w-[450px] lg:right-[2%] lg:top-[2px] lg:w-[520px] xl:top-[8px] xl:w-[600px]"
                  priority
                  aria-hidden="true"
                />
              </span>
              <span className="relative z-20"> &amp; </span>
              <span className="relative isolate inline-block">
                <span className="relative z-20">Bathroom</span>
                <Image
                  src="/images/hero-objects/bathroom-module-v1.webp"
                  alt=""
                  width={1672}
                  height={941}
                  sizes="(min-width: 1280px) 600px, (min-width: 1024px) 520px, (min-width: 768px) 450px, 260px"
                  className="hero-object-float pointer-events-none absolute left-[-12%] top-[-10px] z-0 w-[190px] max-w-none -translate-x-1/2 opacity-85 brightness-95 contrast-125 saturate-110 drop-shadow-[0_30px_54px_rgba(15,23,42,0.30)] min-[360px]:left-[-18%] min-[360px]:top-[-16px] min-[360px]:w-[240px] sm:left-[18%] sm:top-[-8px] sm:w-[370px] md:top-[-4px] md:w-[450px] lg:left-[24%] lg:top-[2px] lg:w-[520px] xl:top-[8px] xl:w-[600px]"
                  priority
                  aria-hidden="true"
                />
              </span>
            </span>
          </h1>

          <p className="relative z-20 mx-auto mt-[4.5rem] flex w-fit max-w-[min(92vw,28rem)] flex-col text-[13px] font-extrabold leading-snug tracking-[-0.01em] text-[#173047] [text-shadow:0_2px_16px_rgba(255,255,255,1),0_0_2px_rgba(255,255,255,0.95)] min-[360px]:mt-[5rem] min-[360px]:text-[15px] sm:mt-12 sm:block sm:max-w-2xl sm:text-lg sm:font-semibold sm:text-slate-600 md:mt-14 md:text-xl">
            <span className="block">Seattle-area remodels, handled start to finish</span>
            <span className="block">Design, materials, permits, installation</span>
          </p>

          <div className="relative z-20 mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:items-center sm:justify-center md:mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-amber-500 px-6 py-4 text-base font-black text-white shadow-2xl shadow-amber-500/25 transition hover:bg-amber-600 min-[360px]:px-8 md:text-lg"
            >
              Book Free Estimate
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>

            <a
              href={BUSINESS.phoneLink}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-4 text-base font-bold text-slate-950 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 min-[360px]:px-7 md:text-lg"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.25} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS.phone}
            </a>
          </div>

          <div className="relative z-20 mx-auto mt-5 flex w-full max-w-[28rem] flex-nowrap items-center justify-between gap-1 text-[11px] font-extrabold text-slate-800 min-[360px]:gap-1.5 min-[360px]:text-[12px] sm:mt-8 sm:max-w-none sm:justify-center sm:gap-3 sm:border-t sm:border-slate-200 sm:pt-5 sm:text-sm md:gap-4 md:text-base lg:gap-5 lg:text-lg">
            <span
              className="inline-flex items-center gap-0.5 whitespace-nowrap rounded-full border border-slate-200 bg-white px-2 py-2 shadow-md shadow-slate-900/10 min-[360px]:gap-1 min-[360px]:px-2.5 sm:gap-1.5 sm:px-3 sm:py-2 sm:shadow-sm md:px-5 md:py-3"
              aria-label="Google rating 5.0 out of 5"
            >
              <GoogleIcon className="h-3.5 w-3.5 min-[360px]:h-4 min-[360px]:w-4 md:h-5 md:w-5" />
              <span>5.0</span>
              <StarIcon className="h-3.5 w-3.5 text-amber-400 min-[360px]:h-4 min-[360px]:w-4 md:h-5 md:w-5" />
            </span>
            <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-200 bg-white px-2 py-2 shadow-md shadow-slate-900/10 min-[360px]:px-2.5 sm:px-3 sm:py-2 sm:shadow-sm md:px-5 md:py-3">
              <span className="sm:hidden">{BUSINESS.projectsCompleted}</span>
              <span className="hidden sm:inline">{BUSINESS.projectsCompleted} Projects</span>
            </span>
            <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-200 bg-white px-2 py-2 shadow-md shadow-slate-900/10 min-[360px]:px-2.5 sm:px-3 sm:py-2 sm:shadow-sm md:px-5 md:py-3">
              Licensed
            </span>
            <span className="inline-flex items-center whitespace-nowrap rounded-full border border-slate-200 bg-white px-2 py-2 shadow-md shadow-slate-900/10 min-[360px]:px-2.5 sm:px-3 sm:py-2 sm:shadow-sm md:px-5 md:py-3">
              <span className="sm:hidden">Warranty</span>
              <span className="hidden sm:inline">5-Year Warranty</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
