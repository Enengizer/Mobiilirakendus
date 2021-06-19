<template>
  <base-todo-item
    class="ArchivedTodoItem"
    :item="item"
  >
    <template #actions>
      <div class="buttons">
        <button
          class="button is-small is-inverted is-primary"
          title="Restore from Trash"
          @click="$emit('restore', item)"
        >
          <span class="icon">
            <span class="fa fa-mail-reply fa-lg" />
          </span>
        </button>
        <button
          class="button is-small is-inverted is-danger"
          title="Remove from Recycle Bin"
          @click="$emit('remove', item)"
        >
          <span class="icon">
            <span class="fa fa-times fa-lg" />
          </span>
        </button>
      </div>
    </template>
  </base-todo-item>
</template>

<script>
import BaseTodoItem from '@/components/BaseTodoItem'

/**
 * @module ArchivedTodoItem
 */
export default {
  name: 'ArchivedTodoItem',
  components: { BaseTodoItem },
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.ArchivedTodoItem .buttons {
  flex-wrap: nowrap;
}
</style>