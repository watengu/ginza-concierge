export default function Page() {
  return (
    <main>
      <section className="gate">
        <img className="gate-photo" src="fv-ginza-night.webp" alt="夜の銀座の街並み" />
        <div className="gate-veil" />
        <div className="gate-in">
          <p className="pill fade d1">Pre-Open — テスト公開中（オープン前）</p>
          <div className="gate-mid fade d2">
            <p className="gate-en">GINZA EXECUTIVE CONCIERGE</p>
            <h1>
              銀座エグゼクティブ
              <br />
              コンシェルジュ
            </h1>
          </div>
          <div className="gate-btns fade d3">
            <a className="gate-btn gold" href="#contact">
              問い合わせる
            </a>
            <a className="gate-btn ghost" href="#index">
              中を見る
            </a>
          </div>
        </div>
      </section>

      <section className="room" id="index">
        <div className="room-in">
          <p className="room-label">INDEX</p>
          <nav className="idx">
            <a href="#story">
              お約束 <span>STORY</span>
            </a>
            <a href="#space">
              空間と時間 <span>SPACE</span>
            </a>
            <a href="#flow">
              扉の開き方 <span>FLOW</span>
            </a>
            <a href="#contact">
              お問い合わせ <span>CONTACT</span>
            </a>
          </nav>
          <p className="idx-note">どの部屋からも、お問い合わせへ一手で戻れます。</p>
        </div>
      </section>

      <section className="room" id="story">
        <div className="room-in">
          <p className="room-label">STORY</p>
          <h2>
            銀座の夕方、見知らぬ誰かと、
            <br />
            ひとつのゲームを囲む。
          </h2>
          <div className="lines">
            <p>
              相手は、<strong>審査と本人確認を通った人だけ</strong>です。
            </p>
            <p>
              会う場所は、銀座の開かれた場所だけ。
              <br />
              <strong>個室には入りません。</strong>
            </p>
            <p>
              あるのは、盤面と会話だけ。
              <br />
              <strong>身体に触れるサービスは、ありません。</strong>
            </p>
            <p>
              連絡先は、交換しません。
              <br />
              その場かぎりの時間だから、安心して座れます。
            </p>
          </div>
          <hr className="gold-rule" />
          <a className="to-contact" href="#contact">
            問い合わせる →
          </a>
        </div>
      </section>

      <section className="room" id="space">
        <div className="room-in">
          <p className="room-label">SPACE</p>
          <h2>
            会うのは、
            <br />
            銀座の開かれた場所で。
          </h2>
          <div className="gal">
            <figure>
              <img src="scene-cafe-go.webp" alt="銀座のカフェの窓辺に置かれた囲碁盤" />
              <figcaption>
                カフェ <span>CAFE</span>
              </figcaption>
            </figure>
            <figure>
              <img src="scene-chess.webp" alt="ラウンジのテーブルに置かれたチェス盤" />
              <figcaption>
                ラウンジ <span>LOUNGE</span>
              </figcaption>
            </figure>
            <figure>
              <img src="fv-ginza-dusk-v1.webp" alt="夕方の銀座の街並み" />
              <figcaption>
                店舗 ・ 街歩き <span>SHOP / WALK</span>
              </figcaption>
            </figure>
          </div>
          <div className="lines">
            <p>
              ご案内は <strong>15:00 から 20:30 まで</strong>。
              <br />
              夕方の数時間だけです。夜更けの約束は、しません。
            </p>
          </div>
          <hr className="gold-rule" />
          <a className="to-contact" href="#contact">
            問い合わせる →
          </a>
        </div>
      </section>

      <section className="room" id="flow">
        <div className="room-in">
          <p className="room-label">FLOW</p>
          <h2>扉の開き方</h2>
          <p className="note">
            <strong>資料はお渡ししません。</strong>
            <br />
            詳細は、審査の後に初めてお伝えします。
            お問い合わせの際に伺うのは、次の3つです。
          </p>
          <div className="ask">
            <div>
              <p className="ask-n">FIRST</p>
              <h3>ご希望の時間帯</h3>
              <p>15:00–20:30 の範囲で、第3希望まで。</p>
            </div>
            <div>
              <p className="ask-n">SECOND</p>
              <h3>ご紹介の経路</h3>
              <p>紹介者の方のお名前を添えてください。ご紹介のない方へのご案内はありません。</p>
            </div>
            <div>
              <p className="ask-n">THIRD</p>
              <h3>ご希望の連絡方法</h3>
              <p>内容を確認のうえ、個別にご案内します。</p>
            </div>
          </div>
          <hr className="gold-rule" />
          <a className="to-contact" href="#contact">
            問い合わせる →
          </a>
        </div>
      </section>

      <section className="room" id="contact">
        <div className="room-in">
          <p className="room-label">CONTACT</p>
          <h2>詳細は、扉の奥に。</h2>
          <p className="note">
            ご利用と掲載で、窓口を分けています。
            <br />
            どちらも審査制です。
          </p>
          <div className="routes2">
            <div className="route2">
              <h3>ご利用の問い合わせ</h3>
              <p>
                ご紹介のある方は、紹介者の方のお名前を添えてお問い合わせください。
                内容を確認のうえ、個別にご案内します。
              </p>
            </div>
            <div className="route2">
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
        <div className="room-in foot-in">
          <p>銀座エグゼクティブ・コンシェルジュ</p>
          <p className="foot-sub">
            完全紹介制 ・ プレオープン（テスト公開中）
            <br />
            料金・種別のご案内は、審査の後にお渡しします。
          </p>
        </div>
      </footer>
    </main>
  );
}
