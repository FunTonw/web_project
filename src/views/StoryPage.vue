<template>
  <div class="bg-gray-400">
    <div class="overflow-hidden">
        <NavbarList />
    </div>
    <div class="bg-gray-400">
    <div class="story_page max-w-screen h-screen relative z-10 ">
      <div class="story_page-bg  max-w-screen "></div>
      <h2 class="absolute top-1/2 text-white right-1/2 translate-x-1/2 text-5xl">S T O R Y</h2>
    </div>
      <div class="bg-white w-9/12 py-20 px-3 rounded-md mx-auto -mt-52 relative z-20">
        <div class="flex flex-col items-center">
          <h3 class="text-red-600 text-3xl font-bold">おやつを我慢したくない<br>をきっかけに</h3>
          <p class="text-start mt-10 font-bold">
          フルオーツを開発している私たちはIT系企業です。<br>
          デスクワークが多い私たちは、コーヒーとおやつがリフレッシュになっていて、<br>
          健康でいたいけどおやつは我慢したくないという思いがありました。<br>
          <br>
          そこで、ヘルシーだけど美味しいおやつを開発できないか、<br>
          市場調査やユーザーアンケートを繰り返し行いました。<br>
          すると予想以上に多くの人達が同じ思いを持っていることがわかり、<br>
          「我慢しなくていいおやつ」の開発がスタートしました。
          </p>
        </div>
        <div class="grid grid-cols-2 gap-x-10 gap-y-20 w-10/12 mx-auto mt-40">
          <div>
            <img src="@/assets/image/story_page/static.story__contents_1.webp" alt="" class="rounded-md">
          </div>
          <div class="font-bold">
            <h3 class="text-start text-3xl text-red-600 mb-10 mt-5">注目したのは食物繊維</h3>
            <p class="text-start">
            アンケート調査結果から、意外にもたんぱく質やビタミンよりも「食物繊維」を意識して摂取している人が多いということがわかりました。<br>
            <br>
            <br>
            しかし、実態を調べてみると、日本人のほとんどが1日に必要な食物繊維の摂取基準量を満たしていませんでした。<br>
            <br>
            <br>
            それはつまり、普段の食生活では食物繊維を摂取することが難しいということです。<br>
            <br>
            <br>
            私たちは、かんたんに誰でも食物繊維をプラスできるおやつの検討を重ね、たった3枚のクッキーで1/2日分の食物繊維を摂取できる「FruOats（フルオーツ）」が誕生しました。
            </p>
          </div>
          <div class="font-bold text-start">
            <h3 class="text-red-600 text-3xl mb-10 mt-5">植物由来のシンプルな<br>素材だけで実現</h3>
            <p>すべての人が楽しいおやつ時間を過ごせるよう､植物由来のシンプルな素材だけで美味しさを実現させました。
            <br>
            <br>
            ヴィーガンやグルテンアレルギーの方にも食べていただけるよう、クッキーの原材料でよく使われる、小麦粉、卵やバターなどの動物性素材は使用していません。
            また、人工甘味料や保存料なども一切使用していません。</p>
          </div>
          <div>
            <img src="@/assets/image/story_page/static.story__contents_2.jpg" alt="" class="rounded-md">
          </div>
          <div class="col-span-2">
            <div class="font-bold text-start">
              <h3 class="text-red-600 text-3xl mb-10">ヘルシーと美味しさを両立させるために</h3>
              <p>ヘルシーと美味しさを両立させるために食物繊維をたっぷり配合し、通常使用される素材を使わずに美味しく作ることは至難のわざです。世界大会優勝経験のあるシェフに監修をいただき、何十回もの試作を経て、「FruOats(フルオーツ)」が完成したのです。</p>
            </div>
            <div class="mt-20">
              <img src="@/assets/image/story_page/static.story__chef.webp" alt="">
            </div>
            <div class="font-bold text-xl leading-10 mt-10">
              <p>監修</p>
              <p class="text-3xl">中山 和大</p>
              <p>シェフ</p>
              <p class="text-base text-start mt-5">3枚で10gの食物繊維を配合するため、小麦粉や米粉の代わりにおからとオートミールを使用。独自の配合と焼き方でザクザクとした食感を実現しています。美味しいだけじゃない、毎日食べて食物繊維をプラスできる新しいお菓子をぜひお楽しみください。</p>
            </div>
            <div>
              <p class="font-bold text-start mt-10">主な受賞経歴</p>
              <ul class="text-xs font-bold mt-10">
                <li class="flex mb-2">
                  <p class="mr-2">2007年</p>
                  <div class="text-start">
                    <p>ジャパンケーキショー東京2007 大型工芸菓子部門  金賞</p>
                  </div>
                </li>
                <li class="flex mb-2">
                  <p class="mr-2">2008年</p>
                  <div class="text-start">
                    <p>クープ・デュ・モンド・ドゥ・ラ・パティスリー2009 日本予選決勝大会</p>
                    <p>アントルメ・ショコラと飴細工のピエスモンテ部門 準優勝</p>
                    <p>ジャパン・ケーキショー東京2008</p>
                    <p>トップオブパティシエ 飴細工のピエスモンテ＆アントルメ部門 優勝</p>
                    <p>アジア・ペストリー・チーム・コンテスト 優勝</p>
                  </div>
                </li>
               <li class="flex mb-2">
                  <p class="mr-2">2010年</p>
                  <div class="text-start">
                    <p>クープ・デュ・モンド・ドゥ・ラ・パティスリー2011 日本予選決勝大会</p>
                    <p>アントルメ・ショコラと飴細工のピエスモンテ部門 優勝</p>
                  </div>
                </li>
               <li class="flex mb-2">
                  <p class="mr-2">2011年</p>
                  <div class="text-start">
                    <p>クープ・デュ・モンド・ドゥ・ラ・パティスリー2011 日本代表 4位</p>
                  </div>
                </li>
               <li class="flex mb-2">
                  <p class="mr-2">2014年</p>
                  <div class="text-start">
                    <p>クープ・デュ・モンド・ドゥ・ラ・パティスリー2015 国内選考会</p>
                    <p>アントルメ・ショコラ/アメ細工A部門  優勝</p>
                  </div>
                </li>
               <li class="flex mb-2">
                  <p class="mr-2">2015年</p>
                  <div class="text-start">
                    <p>クープ・デュ・モンド・ドゥ・ラ・パティスリー2015 日本代表 準優勝</p>
                  </div>
                </li>
               <li class="flex mb-2">
                  <p class="mr-2">2021年</p>
                  <div class="text-start">
                    <p>ワールド トロフィー オブ ペストリー アイスクリーム チョコレート2021 チームJAPAN 優勝</p>
                  </div>
                </li>
               <li class="flex mb-2">
                  <p class="mr-2">資格：</p>
                  <div class="text-start">
                    <p>日本ソムリエ協会（J.S.A.）ソムリエ、SAKE DIPLOMA（日本酒ソムリエ）取得</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div  class="col-span-2">
            <div>
              <img src="@/assets/image/story_page/pixta_48253132_M.webp" alt="">
            </div>
            <div class="font-bold text-xl leading-10 mt-10">
              <p>監修</p>
              <p class="text-3xl">柳 ゆきな</p>
              <p>管理栄養士</p>
              <p class="text-base text-start mt-5">
                現代の日本人は近年の食生活の欧米化の影響で、食物繊維の摂取量は減少傾向が続いています。 食物繊維を摂取することで腸内環境が整い、肌がきれいになったり、ダイエットにつながったりなど嬉しい効果が期待できます。 また、噛む回数が増えることで満足感が高まり、食べ過ぎ予防に役立ちます。
                <br>
                <br>
                野菜で1日の必要な食物繊維を全て補うことは、忙しい方などはなかなか難しいかもしれませんが、フルオーツは1日に必要な食物繊維の1/2を3枚で摂取することができます。 また、食物繊維は水溶性食物繊維と不溶性食物繊維の2種類あり、それぞれ働きが違うためバランスよく摂ることが勧められていますが、フルオーツはどちらも含まれているので、手軽に2種類の食物繊維が摂ることができるのも、おすすめしたい点です。
                <br>
                <br>
                フルオーツの特徴としては、小麦粉の代わりに食物繊維が豊富なおからパウダーやオートミールを使っており、白砂糖の代わりにミネラルが含まれる本和香糖（沖縄県産さとうきび）を使っています。普段不足しがちな栄養素をフルオーツでおいしく摂ることができます。 また、小麦粉や卵や乳製品を使っていませんので、小麦粉アレルギー、卵アレルギー、乳製品アレルギーをお持ちの方にも安心してお召し上がりいただけます。 フルオーツはおいしく食物繊維を手軽に摂りたい方に是非おすすめしたいクッキーです。
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-40">
        <h2 class="font-bold text-5xl text-white">P R O M I S E</h2>
        <ul class="mt-20">
          <li class="bg-white flex items-center px-20 py-10 font-bold mb-1">
            <p class="text-red-600 text-4xl mr-10">1</p>
            <span class="text-xl">「おやつ」で健康をサポートします。</span>
          </li>
          <li class="bg-white flex items-center px-20 py-10 font-bold mb-1">
            <p class="text-red-600 text-4xl mr-10">2</p>
            <span class="text-xl">原材料は全て植物由来を使用します。</span>
          </li>
          <li class="bg-white flex items-center px-20 py-10 font-bold mb-1">
            <p class="text-red-600 text-4xl mr-10">3</p>
            <span class="text-xl">人工甘味料、保存料、香料などは一切使用しません。</span>
          </li>
          <li class="bg-white flex items-center px-20 py-10 font-bold mb-1">
            <p class="text-red-600 text-4xl mr-10">4</p>
            <span class="text-xl">おいしさにこだわります。</span>
          </li>
          <li class="bg-white flex items-center px-20 py-10 font-bold mb-1">
            <p class="text-red-600 text-4xl mr-10">5</p>
            <span class="text-xl">栄養価の高さを維持し続けます。</span>
          </li>
        </ul>
        <router-link to="/">
        <button class="mt-20 px-20 py-3 text-white font-bold border-2 border-white rounded-full">
          TOPページへ
        </button>
        </router-link>
      </div>
    </div>
    <div class="mt-40">
      <FooterList />
    </div>
  </div>
</template>

<style lang="scss">
  $story_page_bg: url('@/assets/image/story_page/static.story__eyecatch.webp');
  .story_page-bg{
    height: calc(100% + -100px);
    background: $story_page_bg;
    background-size: cover;
    background-position: center;
  }
</style>

<script>

import NavbarList from '@/components/NavbarList.vue'
import FooterList from '@/components/FooterList.vue'
export default {
  components: {
    NavbarList,
    FooterList
  }
}
</script>
