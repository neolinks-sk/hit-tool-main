import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-200 py-6 mt-auto">
      <div className="w-full max-w-md mx-auto px-6">
        
        {/* 3列エリア */}
        <div className="grid grid-cols-3 items-center text-xs text-slate-600 font-normal">
          
          {/* 左：運営者情報（｜の位置は変えず、文字だけを左へ離す） */}
          <div className="flex justify-end pr-2 -translate-x-3">
            <div className="flex items-center space-x-6">
              <Link className="hover:text-indigo-600 transition-colors whitespace-nowrap" href="/about">
                運営者情報
              </Link>
              <span className="text-slate-300 font-light">|</span>
            </div>
          </div>

          {/* 中央：お問い合わせ（完全画面中央・固定） */}
          <div className="flex justify-center px-1">
            <Link className="hover:text-indigo-600 transition-colors whitespace-nowrap" href="/contact">
              お問い合わせ
            </Link>
          </div>

          {/* 右：プライバシーポリシー（固定） */}
          <div className="flex justify-start pl-2">
            <div className="flex items-center space-x-2.5">
              <span className="text-slate-300 font-light">|</span>
              <Link className="hover:text-indigo-600 transition-colors whitespace-nowrap" href="/privacy">
                プライバシーポリシー
              </Link>
            </div>
          </div>

        </div>

        {/* コピーライト */}
        <p className="text-center text-xs text-slate-400 mt-5 font-normal">
          © 2026 HITtools All rights reserved.
        </p>
      </div>
    </footer>
  );
}
