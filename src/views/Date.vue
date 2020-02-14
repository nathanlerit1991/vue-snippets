<template>
    <v-container>
        <v-row>
            <v-flex md6>
                <date-range-picker
                    opens="right"
                    :time-picker="time_picker"
                    :locale-data="locale"
                    v-model="dateRange">
                    Select Date:
                </date-range-picker>
            </v-flex>
        </v-row>
    </v-container>
</template>


<script>
    import moment from 'moment'
    import DateRangePicker from 'vue2-daterange-picker'
	import 'vue2-daterange-picker/dist/vue2-daterange-picker.css'
    export default {
        name: 'Dates',
        components: { DateRangePicker },
        data(){
            return{
				dateRange: '',
				time_picker: true,
				locale: {
					direction: 'ltr', //direction of text
					format: 'YYYY-MM-DD HH:mm:ss', //fomart of the dates displayed
					separator: ' - ', //separator between the two ranges
					applyLabel: 'Apply',
					cancelLabel: 'Cancel',
					weekLabel: 'W',
					customRangeLabel: 'Custom Range',
					daysOfWeek: moment.weekdaysMin(), //array of days - see moment documenations for details
					monthNames: moment.monthsShort(), //array of month names - see moment documenations for details
					firstDay: 1 //ISO first day of week - see moment documenations for details
				},
			}
        }
    }
</script>