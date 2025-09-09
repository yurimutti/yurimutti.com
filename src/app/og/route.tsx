import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const size = {
  width: 1200,
  height: 630,
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Yuri Mutti';
  const subtitle =
    searchParams.get('subtitle') || 'Software Engineer & OSS contributor';

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center bg-white text-neutral-900 p-20"
        style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
      >
        <h1 tw="text-6xl font-bold text-center leading-tight">{title}</h1>
        <p tw="mt-6 text-3xl text-neutral-500 text-center">{subtitle}</p>
      </div>
    ),
    {
      ...size,
    }
  );
}
