import ClientWrapper from './ClientWrapper';

export default function ParthenonPage() {
  return <ClientWrapper />;
}

export async function generateMetadata() {
  return {
    title: '黃金比例的永恆凝視：雅典衛城帕特農神廟深度遊覽攻略 | NewsKingdom',
    description: '2500年人類美學巔峰！探索雅典衛城帕特農神廟的黃金分割建築奇蹟、光學視差修正結構與古希臘文明瑰寶。',
    keywords: '帕特農神廟, Parthenon, 雅典, 希臘, 衛城, Acropolis, 古蹟, 世界遺產',
    openGraph: {
      title: '黃金比例的永恆凝視：雅典衛城帕特農神廟深度遊覽攻略',
      description: '2500年人類美學巔峰！探索雅典衛城帕特農神廟的黃金分割建築奇蹟與古希臘文明瑰寶。',
      images: ['https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80'],
    },
  };
}