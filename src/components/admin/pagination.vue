<template>
  <nav>
    <ul class="pagination justify-content-center" v-if="this.pagination">
      <!-- FIXME: disabled顯示錯誤 -->
      <li class="page-item" :class="{ disabled: this.pagination.current_page === 1 }">
        <a
          class="page-link"
          href="#"
          aria-label="Previous"
          @click.prevent="previousNextClick('previous', this.pagination.current_page === 1)"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        class="page-item"
        v-for="i in this.pagination.total_pages"
        :class="{ 'pagination--active': this.pagination.current_page === i }"
        :key="i"
      >
        <a class="page-link" href="#" @click.prevent="changePage(i)">{{ i }}</a>
      </li>
      <li
        class="page-item"
        :class="{ disabled: this.pagination.current_page === this.pagination.total_pages }"
      >
        <a
          class="page-link"
          href="#"
          aria-label="Next"
          @click.prevent="
            previousNextClick('next', this.pagination.current_page === this.pagination.total_pages)
          "
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: { pagination: Object },
  data() {
    return {
      pageNumCash: null,
    };
  },
  methods: {
    changePage(pageNum) {
      // 避免重複請求
      if (pageNum === this.pageNumCash) return;
      this.$emit("change-page", pageNum);
      this.pageNumCash = pageNum;
    },
    previousNextClick(action, isDisable) {
      if (isDisable === true) return;
      if (action === "previous") {
        this.changePage(this.pagination.current_page - 1);
      }
      if (action === "next") {
        this.changePage(this.pagination.current_page + 1);
      }
    },
  },
};
</script>
