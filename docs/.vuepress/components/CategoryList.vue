<template>
  <div id="category-list" class="category-list">
    <h3>所有文章：</h3>
    <div class="list">
      <a class="link" href="/docker">
        Docker
        <span>正在更新</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "category-list"
};
</script>

<style scoped>
#category-list {
  border-bottom: solid 1px #ddd;
  padding-bottom: 10px;
}
#category-list > .list {
  padding-left: 40px;
}
#category-list > .list > .link {
  font-size: 22px;
}
#category-list > .list > .link > span {
  font-size: 12px;
}
</style>
