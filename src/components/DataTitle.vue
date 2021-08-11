<template>
    <div class="text-center">
        <h2 class="text-3xl font-bold">{{ modifiedDate }}</h2>
        {{ text }}
        
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'DataTitle',
    // Props
    props: {
        date: String,
    },
    // Component state
    data() {
        return {
            text: 'opgg'
        }
    },
    computed: {
        modifiedDate() {

            return (() => {
                return 'opgg'
            })()
            
        }
    },
    methods: {
        changingDate() {
            return moment(this.date).format('YYYY-MM-DD hh:mm:ss')
        }
    }
}
</script>