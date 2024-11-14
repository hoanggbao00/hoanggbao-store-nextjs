import Image from 'next/image';
import { MapPinIcon } from 'lucide-react';
import Breadcrumb from '@/components/ui/breadcrumb';

export default function StorePage() {
  const pageTitle = 'Hệ thống cứu hàng HOANGGBAO';
  return (
    <main className="container mx-auto">
      <Breadcrumb title={pageTitle} />

      <h1 className="mb-8 text-2xl font-bold">HỆ THỐNG CỬA HÀNG HOANGGBAO</h1>

      <div>
        {/* Video Embed */}
        <div className="mb-8 aspect-video">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/kQ_pyG0jatk"
            title="STORE HOANGGBAO"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-lg"
          ></iframe>
        </div>

        {/* Store Address */}
        <div className="mb-8">
          <div className="mx-auto mb-4 flex w-fit items-center gap-2 text-gray-700">
            <MapPinIcon className="size-5" />
            <span className="font-medium">P. Tây Sơn, Đống Đa, Hà Nội</span>
          </div>
        </div>

        {/* Store Images */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <div>
            <Image
              src="https://5sfashion.vn/storage/upload/images/ckeditor/oKCjqkn6krg9AiMv09Ag7hX61TbmXwPlPzE64fzq.jpg"
              alt="Store Interior 1"
              width={240}
              height={180}
            />
          </div>
          <Image
            src="https://5sfashion.vn/storage/upload/images/ckeditor/7mcMw7bPTHbHxzJ3rmnfFuskMtDIZ4kTEEIjCCyy.jpg"
            alt="Store Interior 2"
            width={240}
            height={180}
          />
        </div>

        {/* Map */}
        <div className="h-[400px] overflow-hidden rounded-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6138111898144!2d105.82112421148598!3d21.00811218840541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab7e236611db%3A0x5761c96868fc66b!2zUC4gVMOieSBTxqFuLCDEkOG7kW5nIMSQYSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2sde!4v1731577351898!5m2!1svi!2sde"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
