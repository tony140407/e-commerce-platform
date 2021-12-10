<template>
  <section class="emptyCartError row">
    <div class="col-12 col-md-6 emptyCartError_img">
      <font-awesome-icon class="fa-8x" :icon="['fas', 'search']" />
    </div>
    <div class="col-12 col-md-6 emptyCartError_article">
      <h3 class="emptyCartError_article_title">Oops! 您的購物車空無一物。</h3>
      <p>前往商店把喜歡的服飾帶回家吧!</p>
      <router-link :to="'/shop'" class="emptyCartError_article_btn">前往商店</router-link>
    </div>
  </section>
</template>
