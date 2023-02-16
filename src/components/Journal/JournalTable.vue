<template>
    <div class="journal__table">
        <div class="journal__header" :style="`grid-template-columns: 110px repeat(${datesWithMark.length},auto);`">
            <div class="header__name"> ФИО</div>
            <div v-for="date in datesWithMark" class="header__date"> {{ date.slice(5) }}</div>
        </div>
        <div class="journal__body" :style="`grid-template-rows: repeat(${groupStudents.length},auto);`">
            <div class="row" v-for="student in groupStudents"
                :style="`grid-template-columns: 110px repeat(${datesWithMark.length},auto);`">
                <div class="student__name">{{ student.last_name }}</div>
                <JournalTableCell class="student__mark" v-for="date, index in datesWithMark" :date="date"
                    :student="student.id" :key="index" />

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import JournalTableCell from '@/components/Journal/JournalTableCell.vue';

export default {
    // props: ['props'],

    components: {
        JournalTableCell
    },

    computed: {

        ...mapGetters([

            'studentsByGroupId',
            'params',
            'markDatesBySubjectStudentDateRange'
        ]),

        groupStudents() {
            return this.studentsByGroupId(this.params.group)
        },

        datesWithMark() {

            let result = []
            this.groupStudents.forEach(item => {
                result = [...result, this.markDatesBySubjectStudentDateRange(this.params.subject, item.id, this.params.start, this.params.end)]
            })


            for (let i = 1; i < result.length; i++) {
                result[i].forEach(item => {
                    if (!result[0].includes(item)) {
                        result[0] = [...result[0], item]
                    }
                })
            }

            result[0].sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
            // console.log(result[0])

            return result[0]


        }


    }
}
</script>

<style  scoped>
.journal__table {
    display: grid;
    grid-template-rows: repeat(2, auto);
}

.journal__header {
    display: grid;
}

.header__name {
    border-top: 1px solid #000;
    border-left: 1px solid #000;

}

.header__date {
    border-top: 1px solid #000;
    border-left: 1px solid #000;
    padding: 0 3px;
}

.header__date:last-child {
    border-right: 1px solid #000;
}

.journal__body {
    display: grid;
}

.row {
    display: grid;
}

.row:last-child {
    border-bottom: 1px solid #000;
}

.student__name {
    border-top: 1px solid #000;
    border-left: 1px solid #000;
}

.student__mark {
    border-top: 1px solid #000;
    border-left: 1px solid #000;
}

.student__mark:last-child {
    border-right: 1px solid #000;
}
</style>