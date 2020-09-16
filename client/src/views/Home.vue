<template>
<div class="home">
  <button class="button is-warning mx-5 my-5">Create</button>
    <FAQList />
</div>
</template>

<script>
import FAQList from '@/components/FAQList.vue';

export default {
  components: {
    FAQList,
  },
};
</script>
