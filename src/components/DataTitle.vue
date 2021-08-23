<template>
	<div class="text-center">
		<h2 class="text-3xl font-bold">
			{{ title }}
		</h2>
		<p class="text-xl pt-4">
			{{ modifiedDate }}
		</p>
	</div>
</template>

<script>
import moment from 'moment';

export default {
	name: 'DataTitle',
	// Props
	props: {
		date: String,
		title: String
	},
	// Computed attributes do not need to call the function
	computed: {
		modifiedDate() {
			return moment(this.date).format('MMMM Do YYYY, h:mm:ss a');
		}
	},
	methods: {
		changingDate() {
			return moment(this.date).format('YYYY-MM-DD hh:mm:ss');
		}
	}
};
</script>
