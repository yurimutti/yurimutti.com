import { ImageResponse } from 'next/og';
import type { SatoriOptions } from 'next/dist/compiled/@vercel/og/satori';

export const runtime = 'edge';

const size = {
  width: 1200,
  height: 630,
};

async function getFonts(): Promise<SatoriOptions['fonts']> {
  const [interRegular, interBold] = await Promise.all([
    fetch(new URL('./fonts/Inter-Regular.woff', import.meta.url)).then((res) =>
      res.arrayBuffer()
    ),
    fetch(new URL('./fonts/Inter-Bold.woff', import.meta.url)).then((res) =>
      res.arrayBuffer()
    ),
  ]);

  return [
    {
      name: 'Inter',
      data: interRegular,
      style: 'normal',
      weight: 400,
    },
    {
      name: 'Inter',
      data: interBold,
      style: 'normal',
      weight: 700,
    },
  ];
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Yuri Mutti';
  const subtitle =
    searchParams.get('subtitle') || 'Software Engineer & OSS contributor';

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center bg-white text-neutral-900 p-20"
        style={{ fontFamily: '"Inter"' }}
      >
        <h1 tw="text-6xl font-bold text-center leading-tight">{title}</h1>
        <p tw="mt-6 text-3xl text-neutral-500 text-center">{subtitle}</p>
      </div>
    ),
    {
      ...size,
      fonts: await getFonts(),
    }
  );
}
