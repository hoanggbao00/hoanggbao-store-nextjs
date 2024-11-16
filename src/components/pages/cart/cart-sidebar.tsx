'use client';

import useCart from '@/stores/use-cart';

export default function CartSideBar() {
  const { items, getTotalPrice } = useCart();
  return (
    <div className="space-y-6">
      {/* Order Information */}
      <div className="rounded-lg bg-white p-6 shadow-sm">
        <h2 className="mb-4 border-b border-b-gray-300 py-2 text-xl font-bold">
          Thông tin đơn hàng
        </h2>

        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-b-gray-300 py-2 text-lg">
            <span className="font-medium">Tổng tiền:</span>
            <span className="font-bold text-red-600">
              {getTotalPrice().toLocaleString()} ₫
            </span>
          </div>

          <ul className="space-y-2 text-sm text-gray-600">
            <li>• Phí vận chuyển sẽ được tính ở trang thanh toán.</li>
            <li>• Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</li>
          </ul>

          {/* Minimum Order Warning */}
          {getTotalPrice() < 150000 && (
            <div className="rounded bg-red-50 p-4 text-sm text-red-600">
              Giỏ hàng của bạn hiện chưa đạt mức tối thiểu để thanh toán.
            </div>
          )}

          {/* Checkout Button */}
          <button
            className="w-full rounded bg-gray-800 py-3 font-medium text-white transition-colors hover:bg-gray-700 disabled:bg-gray-400"
            disabled={items.length === 0}
          >
            THANH TOÁN
          </button>

          {/* Shipping Policy */}
          <div className="rounded bg-blue-50 p-4">
            <h3 className="mb-2 font-medium text-gray-800">
              Chính sách giao hàng
            </h3>
            <p className="text-sm text-gray-600">
              Hiện chúng tôi chỉ áp dụng thanh toán với đơn hàng có giá trị tối
              thiểu <span className="font-medium">150.000₫</span> trở lên.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
