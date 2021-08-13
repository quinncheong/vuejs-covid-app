<template>
    <div class="grid md:grid-cols-2 gap-8 mt-5">
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases</h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">New:</span>
                {{ numWithCommas(stats.NewConfirmed) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                {{ numWithCommas(stats.TotalConfirmed) }}
            </div>
                
        </div>

        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">Deaths</h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">New:</span>
                {{ numWithCommas(stats.NewDeaths) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                {{ numWithCommas(stats.TotalDeaths) }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DataBoxes',
    props: {
        stats: Object,
        title: String,
    },
    methods: {
        numWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
}
</script>

[0-9](?=(?:[0-9]{3})+(?![0-9]))