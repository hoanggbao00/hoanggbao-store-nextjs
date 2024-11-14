import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Footer() {
  return (
    <footer className="bg-primary py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold">Về hoanggbao</h3>
            <p className="mb-4 text-sm text-gray-400">
              hoanggbao là thương hiệu thời trang đường phố nổi tiếng tại Việt
              Nam, mang đến phong cách trẻ trung và cá tính.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-gray-800">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-800">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-800">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">Youtube</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Liên kết</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:underline"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:underline"
                >
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:underline"
                >
                  Store
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:underline"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-gray-400 hover:underline"
                >
                  Chính sách đổi trả
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Thông tin liên hệ</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-sm text-gray-400">
                <MapPin className="mr-2 h-4 w-4" />
                P. Tây Sơn, Đống Đa, Hà Nội
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Phone className="mr-2 h-4 w-4" />
                0362554500
              </li>
              <li className="flex items-center text-sm text-gray-400">
                <Mail className="mr-2 h-4 w-4" />
                hoanggbao00.vn@gmail.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Đăng ký nhận tin</h3>
            <p className="mb-4 text-sm text-gray-400">
              Nhận thông tin về sản phẩm mới và khuyến mãi
            </p>
            <form className="flex">
              <Input
                type="email"
                placeholder="Nhập email của bạn"
                className="rounded-r-none"
              />
              <Button
                type="submit"
                className="rounded-l-none bg-gray-200 text-black hover:bg-white"
              >
                Đăng ký
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Hoanggbao. Tất cả các quyền được bảo
            lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
