<template>
<form>
    <div class="field">
        <label class="label">Question</label>
        <div class="control">
            <input v-model="question" class="input" type="text" name="question" placeholder="e.g How?" required>
        </div>
    </div>

    <div class="field">
        <label class="label">Answer</label>
        <div class="control">
            <textarea v-model="answer" class="textarea" rows="4" type="text" placeholder="e.g. Because."></textarea>
        </div>
    </div>
    <button type="submit" class="button is-warning">Create</button>
</form>
</template>

<script>
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const question = ref('');
    const answer = ref('');
    const API_URL = 'http://localhost:5000/api/v1/faqs';

    async function createFAQS() {
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
      if (response.ok) {
        // redirect!
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
