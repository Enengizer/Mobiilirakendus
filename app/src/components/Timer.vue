<template>
  <base-todo-item
    class="TodoItem"
    :item="item"
  >
    <template #checkbox>
      <input
        v-model="completedLocal"
        type="checkbox"
        class="checkbox"
      >
    </template>
    <template #content>
      <div
        v-if="!isEditing"
        class="break-all"
        @dblclick="enableEdit"
      >
        {{ item.content }}
      </div>
      <input
        v-if="isEditing"
        ref="editInput"
        v-model="contentLocal"
        type="text"
        class="input"
        @keyup.enter="saveEdit"
        @blur="saveEdit"
        @keyup.esc="stopEdit"
      >
    </template>
    <template #actions>
      <button
        class="TodoItem__delete button is-inverted is-danger is-small"
        @click.prevent="deleteItem"
      >
        <span class="icon"><i class="fa fa-archive fa-lg" /></span>
      </button>
      <div class="TodoItem__reorderHandle">
        <i class="fa fa-bars" />
      </div>
    </template>
  </base-todo-item>
</template>

<script>
import BaseTodoItem from '@/components/BaseTodoItem'

/**
 * @module TodoItem
 */
export default {
  name: 'TodoItem',
  components: { BaseTodoItem },
  props: {
    /**
     *  @type TodoItem
     */
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      isEditing: false,
      contentLocal: ''
    }
  },
  computed: {
    completedLocal: {
      /**
       * Muudab completedAt timestambi booleaniks
       */
      get () {
        return !!this.item.completedAt
      },
      /**
       * Muudab completedat booleani timestambiks
       * @param {Boolean} value
       */
      set (value) {
        this.emitChange({
          completedAt: value ? Date.now() : null
        })
      }
    }
  },
  methods: {
    /**
     * Kustutab todo
     */
    deleteItem () {
      this.emitChange({
        deletedAt: Date.now()
      })
    },
    /**
     * Emits the changes to the TODO item up to the parent.
     * @param {Object} updatedItem
     */
    emitChange (updatedItem) {
      this.$emit('change', {
        ...this.item,
        ...updatedItem
      })
    },
    /**
     * Redigeerimine
     * @return {Promise<void>}
     */
    async enableEdit () {
      this.contentLocal = this.item.content
      this.isEditing = true
      await this.$nextTick()
      this.$refs.editInput.focus()
    },
    /**
     * Salvestamine.
     */
    saveEdit () {
      if (this.contentLocal) {
        this.emitChange({
          content: this.contentLocal
        })
      }
      this.stopEdit()
    },
    stopEdit () {
      this.isEditing = false
      this.contentLocal = ''
    }
  }
}
</script>

<style lang='scss' scoped>
.TodoItem {
  &:hover {
    .TodoItem__delete {
      opacity: 1;
    }
  }

  &__delete {
    opacity: 0;
    margin-right: $theme--spacing-s;
    border-radius: 100%;
  }

  &__reorderHandle {
    &:hover {
      cursor: grab;
    }

    &:active {
      cursor: grabbing;
    }
  }
}
</style>