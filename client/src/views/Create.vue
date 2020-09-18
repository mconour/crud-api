<template>
<!-- eslint-disable max-len -->
   <FAQForm
   :faq="faq"
   :submitForm="createFAQ"
   />
</template>

<script>
import FAQForm from '@/components/FAQForm.vue';
import { ref } from '@vue/composition-api';
import { useRouter } from '@u3u/vue-hooks';

export default {
  components: {
    FAQForm,
  },
  setup() {
    const { router } = useRouter();
    const question = ref('');
    const answer = ref('');
    const API_URL = 'http://localhost:5000/api/v1/faqs';

    async function createFAQ() {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          question: question.value,
          answer: answer.value,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        router.push({
          name: 'home',
        });
      } else {
        // show an error
      }
    }

    return {
      faq: {
        question,
        answer,
      },
      createFAQ,
    };
  },
};
</script>
