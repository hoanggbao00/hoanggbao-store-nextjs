import Link from 'next/link';

interface Props {
  title: string;
  path1?: string;
  title2?: string;
}

export default function PageBreadcrumb({ title, title2, path1 }: Props) {
  return (
    <div className="mb-2 flex items-center text-sm">
      <Link href="/" className="hover:underline">
        Trang chủ
      </Link>
      {title2 && (
        <>
          <span className="mx-2">/</span>
          {path1 ? (
            <Link href={path1} className="hover:underline">
              {title2}
            </Link>
          ) : (
            <span className="text-gray-500">{title2}</span>
          )}
        </>
      )}
      <span className="mx-2">/</span>
      <span className="text-gray-500">{title}</span>
    </div>
  );
}
