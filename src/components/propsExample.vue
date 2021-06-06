<template>
  <div>
      <img :src="noteImage" style="width: 200px"/>
      <h1>{{noteTitle}}</h1>
      <p>{{noteBody}}</p>
  </div>
</template>

<script>
export default {
    props: ['noteImage', 'noteTitle', 'noteBody']
};
</script>
