import Link from 'next/link';

interface Props {
  title: string;
}

export default function PageBreadcrumb({ title }: Props) {
  return (
    <div className="mb-2 flex items-center text-sm">
      <Link href="/" className="hover:underline">
        Trang chủ
      </Link>
      <span className="mx-2">/</span>
      <span className="text-gray-500">{title}</span>
    </div>
  );
}
