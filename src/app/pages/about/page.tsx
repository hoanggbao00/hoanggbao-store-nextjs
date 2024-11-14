import Breadcrumb from '@/components/ui/breadcrumb';

export default function AboutPage() {
  const pageTitle = 'Giới thiệu';

  return (
    <main className="container mx-auto">
      <Breadcrumb title={pageTitle} />

      <h1 className="mb-8 text-2xl font-bold">VỀ HOANGGBAO</h1>
      <div>
        {/* Brand Story */}
        <div className="prose max-w-none">
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">
              Câu Chuyện Thương Hiệu
            </h2>
            <p className="mb-4 text-gray-700">
              Hoanggbao là một thương hiệu thời trang đường phố Việt Nam được
              thành lập vào năm 2022. Với mong muốn mang đến cho người trẻ Việt
              Nam một thương hiệu thời trang đường phố thực sự của Việt Nam,
              chúng tôi đã đầu tư rất nhiều công sức và tâm huyết vào việc
              nghiên cứu, thiết kế và sản xuất ra những sản phẩm thời trang thực
              sự chất lượng và phong cách.
            </p>
          </div>

          {/* Brand Values */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Giá Trị Cốt Lõi</h2>
            <ul className="list-disc space-y-3 pl-6 text-gray-700">
              <li>
                <strong>Chất Lượng:</strong> Sản phẩm được thiết kế và sản xuất
                với tiêu chuẩn cao, sử dụng chất liệu tốt nhất để đảm bảo sự
                thoải mái cho người mặc.
              </li>
              <li>
                <strong>Sáng Tạo:</strong> Không ngừng đổi mới trong thiết kế,
                mang đến những bộ sưu tập độc đáo và phong cách riêng biệt.
              </li>
              <li>
                <strong>Cộng Đồng:</strong> Xây dựng một cộng đồng thời trang
                năng động, nơi mọi người có thể chia sẻ phong cách và đam mê.
              </li>
            </ul>
          </div>

          {/* Mission & Vision */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">Sứ Mệnh & Tầm Nhìn</h2>
            <p className="mb-4 text-gray-700">
              Hoanggbao không chỉ đơn thuần là một thương hiệu thời trang, mà
              còn là biểu tượng của phong cách sống hiện đại. Chúng tôi mong
              muốn trở thành thương hiệu thời trang hàng đầu Việt Nam, mang đến
              những sản phẩm chất lượng với giá thành hợp lý.
            </p>
          </div>

          {/* Contact Info */}
          <div className="rounded-lg bg-gray-50 p-6">
            <h2 className="mb-4 text-xl font-semibold">Thông Tin Liên Hệ</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Hotline:</strong> 0362554500
              </p>
              <p>
                <strong>Email:</strong> hoanggbao.vn@gmail.com
              </p>
              <p>
                <strong>Địa chỉ:</strong> P. Tây Sơn, Đống Đa, Hà Nội
              </p>
              <p>
                <strong>Giờ làm việc:</strong> 09:00 - 21:30 (Thứ 2 - Chủ Nhật)
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
