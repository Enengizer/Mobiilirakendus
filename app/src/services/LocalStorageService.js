export const LocalStorageService = {
    /**
     * LocalStoragest failide püüdmine
     * JSON tüüpi data salvestamine
     * @param {String} key - Key nimi
     * @param {*} [fallback] - kui key-d ei leita
     * @return {*}
     */
    getItem (key, fallback) {
      try {
        let item = window.localStorage.getItem(key)
        return item ? window.JSON.parse(item) : fallback
      } catch (err) {
        return fallback
      }
    },
    /**
     * Objekti saatmine
     * @param {String} key - Key mille järgi saata
     * @param {*} value - väärtus
     */
    setItem (key, value = {}) {
      window.localStorage.setItem(key, window.JSON.stringify(value))
    },
    /**
     * Arhiveerimine
     * @param {string} key
     */
    removeItem (key) {
      window.localStorage.removeItem(key)
    },
    /**
     * Kõikide eemaldamine
     */
    clearAllItems () {
      window.localStorage.clear()
    }
  }
  