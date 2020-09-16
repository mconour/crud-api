<template>
<div>
    <div class="card" v-for="faq in faqs" :key="faq._id">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{faq.question}}</p>
                </div>
            </div>

            <div class="content">
                {{faq.answer}}
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const faqs = ref([]);

    const API_URL = 'http://localhost:5000/api/v1/faqs';

    async function getFAQS() {
      const response = await fetch(API_URL);
      const json = await response.json();
      faqs.value = json;
    }

    getFAQS();

    return {
      faqs,
    };
  },
};
</script>

<style>

</style>
