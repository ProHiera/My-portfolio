import Image from "next/image";
import { Monitor } from "lucide-react";
import { px } from "framer-motion";

export const metadata = {
  title: "About | Nara",
};

const brandPhotos = [
  { src: "/images/clotone/01.jpg", alt: "Clotone 가방 사진 1" },
  { src: "/images/clotone/02.jpg", alt: "Clotone 가방 사진 2" },
  { src: "/images/clotone/03.jpg", alt: "Clotone 가방 사진 3" },
] as const;

const teachingPhotos = [
  { src: "/images/teaching/01.jpg", alt: "강의 현장 사진 1" },
  { src: "/images/teaching/02.jpg", alt: "강의 현장 사진 2" },
  { src: "/images/teaching/03.jpg", alt: "강의 현장 사진 3" },
] as const;

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-12">
          <header className="space-y-4">
            <p className="text-xs uppercase tracking-[0.32em] opacity-60">
              About
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
              브랜드 운영자이자 UI/UX 디자이너, 그리고 강의자
            </h1>
            <p className="text-base sm:text-lg leading-7 opacity-80">
              CLOTONE 가죽가방 브랜드를 운영하며 제품이 실제로 쓰이기까지의 전
              과정을 경험했습니다. 현재는 LEATHER SMOOD 소속으로 기업 강의 및
              단체 출강을 진행하며(프리랜서 활동), 동시에 UI/UX 역량을 기반으로
              사용자의 불편을 구조적으로 해결하는 디자인을 지향합니다.
            </p>
          </header>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">
              제가 만드는 경험은 이렇게 달라집니다
            </h2>
            <ul className="space-y-3 text-sm sm:text-base">
              <li className="flex flex-wrap items-start gap-3">
                <span className="inline-flex items-center rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/40 px-3 py-1 text-xs font-semibold">
                  편리함 중심
                </span>
                <span className="opacity-80">
                  사용자가 덜 생각해도 되는 흐름으로 정리합니다.
                </span>
              </li>
              <li className="flex flex-wrap items-start gap-3">
                <span className="inline-flex items-center rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/40 px-3 py-1 text-xs font-semibold">
                  현실 적용
                </span>
                <span className="opacity-80">
                  심미적 감각과 실제 운영/사용 가능한 결과를 동시에 만듭니다.
                </span>
              </li>
              <li className="flex flex-wrap items-start gap-3">
                <span className="inline-flex items-center rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/40 px-3 py-1 text-xs font-semibold">
                  문제 해결형
                </span>
                <span className="opacity-80">
                  불가능해 보이는 조건도 우회로를 찾아 가능한 형태로 설계합니다.
                </span>
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <div>
              <span className="inline-flex items-center rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/40 px-4 py-1 text-xs font-semibold tracking-wide">
                브랜드 운영 및 실무 경험
              </span>
            </div>
            <div className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 p-5 sm:p-6 space-y-3">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-lg font-semibold">CLOTONE</h3>
                <span className="text-sm opacity-60">
                  가죽가방 브랜드 운영 / 대표
                </span>
              </div>
              <p className="text-sm sm:text-base opacity-80">
                브랜드 운영과 제품 기획·제작·판매 전반을 총괄했습니다.
              </p>
              <p className="text-xs sm:text-sm opacity-60">
                온라인 채널 운영부터 기획 → 제작 → 촬영 → 판매/CS까지 흐름을
                직접 설계·관리했습니다.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {brandPhotos.map((photo) => (
                  <figure
                    key={photo.src}
                    className="overflow-hidden rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-950/40"
                  >
                    <div className="relative aspect-[4/5] bg-zinc-100/60 dark:bg-zinc-900/40">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-contain p-2"
                        sizes="(min-width: 1024px) 22vw, (min-width: 640px) 38vw, 100vw"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div>
              <span className="inline-flex items-center rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/40 px-4 py-1 text-xs font-semibold tracking-wide">
                기업 강의 & 단체 출강
              </span>
            </div>
            <div className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 p-5 sm:p-6 space-y-4">
              <div className="flex flex-wrap items-baseline gap-2">
                <h3 className="text-lg font-semibold">SMOODY</h3>
                <span className="text-sm opacity-60">공예강사 / 프리랜서</span>
              </div>
              <p className="text-sm sm:text-base opacity-80">
                가죽 분야 기업 강의 및 단체 수업을 전문으로 진행합니다. (현
                프리랜서 활동)
              </p>
              <ul className="grid gap-3 text-sm sm:text-base opacity-80">
                <li>
                  서울특별시 동작구청 구청 직원 대상 가죽지갑 강의
                  <span className="mx-2 opacity-50">|</span>
                  <span className="font-semibold">2024.11.01 ~ 2024.11.08</span>
                </li>
                <li>
                  이대목동병원 가죽지갑 단체수업 출강 강사
                  <span className="mx-2 opacity-50">|</span>
                  <span className="font-semibold">2024.12.03</span>
                </li>
                <li>그외 다수</li>
              </ul>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {teachingPhotos.map((photo) => (
                  <figure
                    key={photo.src}
                    className="overflow-hidden rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-950/40"
                  >
                    <div className="relative aspect-[4/3] bg-zinc-100/60 dark:bg-zinc-900/40">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-contain p-2"
                        sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 100vw"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">자격 및 전문 과정</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 p-5 sm:p-6 space-y-3">
                <h3 className="text-lg font-semibold">자격</h3>
                <ul className="space-y-3 text-sm sm:text-base">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center shrink-0">
                      <Image
                        src="/images/credentials/gtq.svg"
                        alt="GTQ 로고"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </span>
                    <span className="opacity-80">GTQ 1급</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center shrink-0">
                      <Image
                        src="/images/credentials/gtqi.svg"
                        alt="GTQi 로고"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </span>
                    <span className="opacity-80">GTQi 1급</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center shrink-0">
                      <Image
                        src="/images/credentials/sqld.svg"
                        alt="SQLD 로고"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </span>
                    <span className="opacity-80">SQLD (SQL Developer) 1급</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center shrink-0">
                      <Image
                        src="/images/credentials/adsp.svg"
                        alt="ADsP 로고"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </span>
                    <span className="opacity-80">ADsP (데이터분석 준전문가)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center shrink-0">
                      <Image
                        src="/images/credentials/ipe.svg"
                        alt="정보처리기사 로고"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </span>
                    <span className="opacity-80">정보처리기사</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl border border-zinc-200/70 dark:border-zinc-800/70 bg-white/60 dark:bg-zinc-950/40 p-5 sm:p-6 space-y-3">
                <h3 className="text-lg font-semibold">전문 과정</h3>
                <ul className="space-y-3 text-sm sm:text-base">
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center shrink-0">
                      <Image
                        src="/images/credentials/google-g.png"
                        alt="Google G logo"
                        width={18}
                        height={18}
                      />
                    </span>
                    <span className="opacity-80">
                      Google UI/UX Coursera 전문 과정(Professional Certificate)
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center shrink-0">
                      <Monitor className="size-5 opacity-70" />
                    </span>
                    <span className="opacity-80">
                      KD아카데미 KDT Full stack 개발자 과정 졸업 2025.07.02 ~
                      2025.12.26
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-semibold">학력</h2>
            <ul className="grid gap-3 text-sm sm:text-base opacity-80">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/40">
                  <Image
                    src="/images/credentials/kookje-fashion-favicon.png"
                    alt="국제패션디자인학교 로고"
                    width={28}
                    height={28}
                    className="object-contain"
                  />
                </span>
                <span className="leading-snug">국제패션디자인학교 — 졸업</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-zinc-200/70 dark:border-zinc-800/70 bg-white/70 dark:bg-zinc-900/40">
                  <Image
                    src="/images/credentials/kcu-symbol.png"
                    alt="고려사이버대학교 심볼"
                    width={28}
                    height={28}
                    className="object-contain scale-[2.4]"
                  />
                </span>
                <span className="leading-snug">
                  KCU 고려사이버대학교 AI·데이터과학부 — 재학 (2026.02.28 ~)
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
