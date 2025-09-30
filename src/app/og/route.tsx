import { ImageResponse } from 'next/og';

export const runtime = 'edge';

const size = {
  width: 1200,
  height: 630,
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get('title') || 'Yuri Mutti';
  const subtitle = searchParams.get('subtitle') || 'Software Engineer';

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center text-white relative"
        style={{
          fontFamily: 'inter, sans-serif',
          backgroundImage:
            'linear-gradient(to bottom, #1c1e26, #2a1f2f, #332232)',
        }}
      >
        <div
          tw="absolute top-0 left-0 w-full h-full opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%), radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)',
          }}
        />

        <div tw="flex flex-col items-center justify-center z-10 max-w-4xl mx-auto px-16">
          <h1 tw="text-7xl font-bold text-center leading-tight mb-8 tracking-tight">
            {title}
          </h1>
          <p tw="text-3xl text-center opacity-90 font-medium">{subtitle}</p>

          <div tw="flex items-center mt-12">
            <div tw="w-12 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-4" />
            <span tw="text-xl opacity-70">yurimutti.com</span>
            <div tw="w-12 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full ml-4" />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
