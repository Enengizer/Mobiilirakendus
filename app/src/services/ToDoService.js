import { LocalStorageService } from './LocalStorageService'

/**
 * @typedef TodoItem
 * @property {string} id - id
 * @property {string} content - sisu
 * @property {number} createdAt - kuupäev
 * @property {?number} completedAt - millal tehtud
 * @property {?number} deletedAt - millal kustutatud
 */

/**
 * ToDo Salvestamise key
 * @type {string}
 */
export const STORAGE_KEY = 'todoItems'

export const ToDoService = {
  /**
   * Salvestab kõik
   * @param {TodoItem[]} items
   */
  storeAll (items) {
    LocalStorageService.setItem(STORAGE_KEY, items)
  },
  /**
   * Toob kõik Todo üksused, isegi kustutatud
   * @return {TodoItem[]}
   */
  fetchAllWithDeleted () {
    return LocalStorageService.getItem(STORAGE_KEY, [])
  },
  /**
   * Too ainult kustutatud todo üksused
   * @return {TodoItem[]}
   */
  fetchDeleted () {
    return ToDoService.fetchAllWithDeleted().filter(item => item.deletedAt)
  },
  /**
   * Toob kõik tavalised üksused. Ei tagasta kustutatud üksusi.
   * @return {TodoItem[]}
   */
  fetchAll () {
    return ToDoService.fetchAllWithDeleted().filter(item => !item.deletedAt)
  },
  /**
   * Uuendab todo.
   * @param {String} itemId
   * @param {TodoItem} payload
   */
  updateItem (itemId, payload) {
    const items = ToDoService.fetchAllWithDeleted()
    const index = items.findIndex(i => i.id === itemId)
    if (index === -1) return
    items.splice(index, 1, payload)
    ToDoService.storeAll(items)
  },
  /**
   * Eemalda todo objekt listist
   * @param {string} itemId
   */
  removeItem (itemId) {
    const items = ToDoService.fetchAllWithDeleted()
    const index = items.findIndex(i => i.id === itemId)
    items.splice(index, 1)
    ToDoService.storeAll(items)
  }
}
