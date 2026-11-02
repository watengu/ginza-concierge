export default function Page() {
  return (
    <main>
      <header className="site-head">
        <p className="wordmark">銀座エグゼクティブ・コンシェルジュ</p>
        <p className="head-note">By Invitation Only</p>
      </header>

      <section className="hero">
        <p className="preopen fade d1">Pre-Open — テスト公開中（オープン前）</p>
        <h1 className="fade d2">
          銀座で、ゲームを囲む
          <br />
          静かな時間を。
        </h1>
        <p className="hero-sub fade d3">
          知る人ぞ知る方々へ、銀座の開かれた場所でお会いする、完全紹介制のご案内です。
        </p>
        <div className="fade d4">
          <a className="cta" href="#contact">
            問い合わせる
          </a>
        </div>
        <p className="scroll-hint fade d5">Scroll</p>
      </section>

      <section className="photo-band" aria-hidden="false">
        <img src="fv-ginza-dusk-v1.webp" alt="夕方の銀座の街並み" />
      </section>

      <section className="block">
        <div className="wrap">
          <div className="bento">
            <div className="bento-main">
              <h2>全部は、見せません。</h2>
              <p>
                詳細と実物のご案内は、ご紹介のある方へ個別にお渡しします。
                ここに置くのは、判断に必要な最小限だけです。
              </p>
            </div>
            <div className="bento-cell">
              <h3>審査と本人確認</h3>
              <p>ご利用・掲載とも、審査と本人確認が前提です。</p>
            </div>
            <div className="bento-cell">
              <h3>公共の空間のみ</h3>
              <p>場所はラウンジ・カフェ・店舗・街歩きのみ。個室には入りません。</p>
            </div>
            <div className="bento-cell">
              <h3>接触は含みません</h3>
              <p>体験の核は、ゲームの共有と銀座の同行案内です。</p>
            </div>
            <div className="bento-cell">
              <h3>夕方までの時間</h3>
              <p>ご案内は15:00〜20:30の範囲に限ります。</p>
            </div>
          </div>
          <p className="about-meta">完全紹介制・審査制で、ご案内は日本語です。</p>
        </div>
      </section>

      <section className="block">
        <div className="wrap">
          <h2 className="block-title">扉の開き方</h2>
          <div className="flow">
            <div className="flow-step">
              <p className="step-num">01</p>
              <h3>お問い合わせ</h3>
              <p>紹介者の方のお名前を添えて、ご連絡ください。</p>
            </div>
            <div className="flow-step">
              <p className="step-num">02</p>
              <h3>審査・ご同意</h3>
              <p>本人確認と、利用規約へのご同意を事前にお願いします。</p>
            </div>
            <div className="flow-step">
              <p className="step-num">03</p>
              <h3>個別のご案内</h3>
              <p>詳細・実物は、この段階で初めてご案内します。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="block tint">
        <div className="wrap">
          <h2 className="block-title">お約束</h2>
          <ul className="rule">
            <li>お会いする場所は、公共の空間に限ります。客室・個室・私有空間には入りません</li>
            <li>身体への接触は、サービスに含みません。依頼があってもお応えしません</li>
            <li>ご利用はご紹介のある方のみ。本人確認と規約へのご同意が完了するまで、ご案内は確定しません</li>
            <li>パートナーはいつでも、理由を説明せずセッションを中止できます</li>
          </ul>
        </div>
      </section>

      <section className="block" id="contact">
        <div className="wrap contact">
          <h2 className="contact-title">詳細は、扉の奥に。</h2>
          <div className="routes">
            <div className="route">
              <h3>ご利用の問い合わせ</h3>
              <p>
                ご紹介のある方は、紹介者の方のお名前を添えてお問い合わせください。
                内容を確認のうえ、個別にご案内します。
              </p>
            </div>
            <div className="route">
              <h3>掲載の問い合わせ</h3>
              <p>
                掲載も審査制です。ご紹介のある方のみ、本人確認と面談を経てご案内します。
              </p>
            </div>
          </div>
          <p className="demo-note">
            ※ 本ページはプレオープン（テスト公開）です。サービスはまだ開始しておらず、正式オープンに向けて準備中です。
          </p>
        </div>
      </section>

      <footer>
        <div className="wrap foot-in">
          <p>銀座エグゼクティブ・コンシェルジュ</p>
          <p className="foot-sub">プレオープン（テスト公開中）— 実際のサービスは開始しておりません。</p>
        </div>
      </footer>

      <div className="fixed-bar">
        <p className="fixed-text">完全紹介制・プレオープン — 詳細はお問い合わせの奥に</p>
        <a className="cta cta-bar" href="#contact">
          問い合わせる
        </a>
      </div>
    </main>
  );
}
