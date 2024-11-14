'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center bg-white px-4">
      <h1
        className="select-none text-[150px] font-bold text-gray-800"
        style={{
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      >
        404
      </h1>
      <h2 className="mb-4 text-3xl font-bold text-gray-800">
        Không tìm thấy trang
      </h2>
      <p className="mb-8 text-center text-gray-600">
        Trang bạn đang tìm kiếm có thể đã bị xóa, chuyển đi, thay đổi link hoặc
        chưa bao giờ tồn tại.
      </p>
      <Link
        href="/"
        className="rounded bg-gray-800 px-6 py-3 text-white transition-colors hover:bg-gray-700"
      >
        TRỞ VỀ TRANG CHỦ
      </Link>
    </div>
  );
}
