/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'experimental-edge',
};

export default async function handler() {
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          background: '#000000',
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          width="1200"
          height="630"
          src={`https://guatemala.cuentanos.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-cuentanos.abf75b72.png&w=3840&q=75`}
          alt="logo"
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
