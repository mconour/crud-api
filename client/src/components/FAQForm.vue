<template>
<!-- eslint-disable max-len -->
<form @submit="submitForm">
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
export default {
  props: ['submitForm', 'faq'],
  setup({ props }) {
    return {
      question: props.faq.question,
      answer: props.faq.answer,
      submitForm: props.submitForm,
    };
  },
};
</script>
