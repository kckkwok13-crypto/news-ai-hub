"use client";

interface AdUnitProps {
  slot: string;
  width?: number;
  height?: number;
}

export default function AdUnit({ slot, width = 728, height = 90 }: AdUnitProps) {
  const publisherId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_PUBLISHER_ID || 'unknown';
  
  return (
    <div
      className="adsbygoogle flex items-center justify-center bg-zinc-800/20 rounded-lg overflow-hidden"
      style={{ minHeight: `${height}px`, width: '100%', maxWidth: `${width}px` }}
      data-ad-client={`ca-${publisherId}`}
      data-ad-slot={slot}
      data-ad-format="horizontal"
      data-full-width-responsive="true"
    />
  );
}

export function AdLeaderboard() {
  return <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_LEADERBOARD || '1234567890'} width={728} height={90} />;
}

export function AdInArticle() {
  return <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_IN_ARTICLE || '0987654321'} width={300} height={250} />;
}

export function AdRectangle() {
  return <AdUnit slot={process.env.NEXT_PUBLIC_AD_SLOT_RECTANGLE || '5678901234'} width={300} height={250} />;
}