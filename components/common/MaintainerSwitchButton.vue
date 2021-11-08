<template>
  <CommonSwitchButton id="list" :options="options" />
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          label: 'Members',
          to: '/maintainers',
        },
        {
          label: 'Clubs',
          to: '/projects',
        },
      ],
    }
  },
}
</script>
