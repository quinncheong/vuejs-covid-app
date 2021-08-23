<template>
  <main v-if="!loading">
    <DataTitle 
      :date="dataDate"
      :title="title"
    />
    <DataBoxes 
      :stats="stats"
    />
    <CountrySelect 
      :countries="countries"
      @get-country="getCountryData"
    />

    <button 
      v-if="stats.Country"
      class="bg-green-700 text-white rounded p-3 mt-5 focus:outline-none hover:bg-green-500"
      @click="handleClick"
    >
      Clear Countries
    </button>
  </main>

  <main
    v-else
    class="flex flex-col align-center justify-center text-center"
  >
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching Data
    </div>
    <img
      :src="loadingImage"
      class="w-24 m-auto"
      alt=""
    >
  </main>
</template>

<script>
import DataTitle from '@/components/DataTitle';
import DataBoxes from '@/components/DataBoxes';
import CountrySelect from '@/components/CountrySelect'

export default {
  name: 'Home',
  components: {
    DataTitle,
    DataBoxes,
    CountrySelect,
  },
  // State of the component
  data() {
    return {
      loading: true,
      title: 'Global',
      dataDate: '',
      stats: {},
      countries: [],
      loadingImage: require('../assets/hourglass.gif')
    }
  },
  async created() {
    const data = await this.fetchCovidData();

    // console.log(data)

    // Setting the state
    this.dataDate = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  },
  methods: {
    async fetchCovidData() {
      const res = await fetch('https://api.covid19api.com/summary');
      const data = await res.json();
      return data
    },
    getCountryData(country) {
      // Setting the state to the correct country
      this.stats = country;
      this.title = country.Country;
    },
    async handleClick() {
      this.loading = true;
      
      const data = await this.fetchCovidData();

      // Setting the state
      this.title = 'Global';
      this.dataDate = data.Date;
      this.stats = data.Global;
      this.countries = data.Countries;
      this.loading = false;

    }
  }
}
</script>
