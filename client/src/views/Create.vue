<template>
<!-- eslint-disable max-len -->
<form @submit="createFAQ">
    <div class="field">
        <label class="label">Question</label>
        <div class="control">
    <input v-model="question" class="input" type="text" name="question" placeholder="e.g How?" required>
        </div>
    </div>

    <div class="field">
        <label class="label">Answer</label>
        <div class="control">
    <textarea v-model="answer" name="answer" class="textarea" rows="4" placeholder="e.g. Because."></textarea>
</div>
    </div>
    <button type="submit" class="button is-warning">Create</button>
</form>
</template>

<script>
import { ref } from '@vue/composition-api';
import { useRouter } from '@u3u/vue-hooks';

export default {
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
      question,
      answer,
      createFAQ,
    };
  },
};
</script>
