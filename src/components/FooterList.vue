<template>
  <div>
    <div class="p-5">
      <ul class="footer-list-border flex text-white font-bold ">
        <li>FAQ</li>
        <li>お問い合わせ</li>
        <li>利用規約</li>
        <li>プライバシーポリシー</li>
        <li>特定商取引法に基づく表記</li>
      </ul>
      <div class="my-10 opacity-60 flex items-center ">
        <img src="@/assets/image/footer/static.shared__logo_wh.svg" style="width:100px;" alt="">
        <p class="text-xs text-white ml-5">@2022 所有內容皆為練習使用，將不用於商業創作</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .footer-list-border > li {
    position: relative;
    margin-right: 41px;
  }
  .footer-list-border > li::before{
    content: '';
    position: absolute;
    left: 100%;
    transform: translateY(25%);
    margin: 0 20px;
    height: 80%;
    width: 0.01rem;
    background: rgb(199, 199, 199);
  }
</style>
