<template>
  <select 
    v-model="selected"
    class=" mt-5 block w-full border p-3 rounded outline-none" 
    @change="onChange"
  >
    <option value="0">
      Select Country
    </option>
    <option
      v-for="country in countries"
      :value="country.ID"
    >
      {{ country.Country }}
    </option>
  </select>
</template>

<script>
export default {
    name: 'CountrySelect',
    props: {
        countries: Array,
    },
    // state
    data() {
        return {
            selected: '0',
        }
    },
    methods: {
        onChange() {
            // On change, need to pass the data up to the parent
            const selectedCountry = this.countries.find(country => country.ID === this.selected)

            this.$emit('get-country', selectedCountry)
        }
    }
}
</script>