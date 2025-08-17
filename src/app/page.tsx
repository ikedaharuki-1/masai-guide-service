import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-red-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">マサイ文化体験ツアー</h1>
            <nav className="space-x-6">
              <Link href="#tours" className="hover:text-orange-200">ツアー</Link>
              <Link href="#about" className="hover:text-orange-200">ガイド紹介</Link>
              <Link href="#contact" className="hover:text-orange-200">お問い合わせ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-red-800 mb-6">
            本格的なマサイ文化体験ツアー
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            タンザニアとケニアで、マサイ族の豊かな伝統、活気ある文化、
            古代の知恵を本格的なガイドツアーで体験してください。
          </p>
          <button className="bg-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition">
            ツアーを予約する
          </button>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-red-800 mb-12">ツアープラン</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-red-800 mb-4">半日文化体験ツアー</h4>
              <p className="text-gray-700 mb-4">
                伝統的なマサイ村を訪問し、習慣を学び、伝統的な踊りを見学し、
                日常活動に参加します。
              </p>
              <div className="text-2xl font-bold text-red-800 mb-4">$80 / 1名様</div>
              <ul className="text-gray-600 mb-4">
                <li>• 4時間のツアー</li>
                <li>• 伝統的な踊りの鑑賞</li>
                <li>• 長老による村案内</li>
                <li>• 手工芸品制作見学</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-red-800 mb-4">1日文化体験ツアー</h4>
              <p className="text-gray-700 mb-4">
                伝統料理、語り継がれる物語、マサイ家族との
                体験活動を含む完全な文化体験です。
              </p>
              <div className="text-2xl font-bold text-red-800 mb-4">$150 / 1名様</div>
              <ul className="text-gray-600 mb-4">
                <li>• 8時間のツアー</li>
                <li>• 伝統料理付き</li>
                <li>• 語り部による物語</li>
                <li>• ビーズワーク体験</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg shadow-md">
              <h4 className="text-xl font-bold text-red-800 mb-4">宿泊体験ツアー</h4>
              <p className="text-gray-700 mb-4">
                伝統的なマサイの家「ボマ」に宿泊し、日常生活に参加して
                本格的なマサイのライフスタイルを体験します。
              </p>
              <div className="text-2xl font-bold text-red-800 mb-4">$250 / 1名様</div>
              <ul className="text-gray-600 mb-4">
                <li>• 1泊2日</li>
                <li>• 伝統的な宿泊施設</li>
                <li>• 全食事込み</li>
                <li>• 牧畜体験</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-red-800 mb-8">ガイド紹介</h3>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-32 h-32 bg-gray-300 rounded-full mx-auto mb-6"></div>
              <h4 className="text-2xl font-bold text-red-800 mb-4">ジョセフ・マサイ</h4>
              <p className="text-gray-700 mb-4">
                伝統的なマサイコミュニティで生まれ育ったジョセフは、10年以上にわたり
                世界中からの訪問者に自身の文化を紹介してきました。英語、スワヒリ語、
                マー語（マサイ語）を流暢に話します。
              </p>
              <p className="text-gray-700">
                ジョセフはマサイの伝統を保護しながら、文化の架け橋を築くことに情熱を注いでいます。
                すべての訪問者がマサイの遺産に対する深い敬意と理解を得られるよう心掛けています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-red-800 mb-12">お問い合わせ</h3>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-red-800 mb-4">連絡先</h4>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold">電話:</span> +255 123 456 789
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">メール:</span> joseph@masaiguide.com
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">所在地:</span> アルーシャ、タンザニア
                  </p>
                </div>
              </div>
              <div>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="お名前" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <input 
                    type="email" 
                    placeholder="メールアドレス" 
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                  <textarea 
                    placeholder="メッセージ" 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-red-800 text-white py-3 rounded-lg hover:bg-red-700 transition"
                  >
                    メッセージを送信
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-red-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 マサイ文化体験ツアー. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
