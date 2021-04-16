import localforage from 'localforage'

const namespace = 'mirador'
const get = (key) => (value) =>
  localforage.getItem(`${namespace}-${key}`, value)
const set = (key) => (value) =>
  localforage.setItem(`${namespace}-${key}`, value)

const useLocalForage = () => ({
  getSpecificValue: get('specific-value'),
  setSpecificValue: set('specific-value'),
})

export default useLocalForage
