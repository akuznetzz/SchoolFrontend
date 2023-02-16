<template>
    <div>
        <div class="name">{{ studentName }} </div>
        <input class="input" type="number" v-model="mark">
        <div class="red circle" @click="markedRed"></div>
        <div class="orange circle" @click="markedOrange"></div>
        <div class="green circle" @click="markedGreen"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import JournalService from "@/services/JournalService.js"

export default {
    props: ['date', 'teacher', 'student', 'subject', 'submited'],

    data() {
        return {
            mark: null,
            coloredMark: null,
            slot: null

        }
    },



    computed: {
        ...mapGetters([
            'studentById',
            'journalSlotByDateStudentSubject',
            'today',
            'colorByKey'
        ]),

        studentName() {
            const student = this.studentById(this.student)
            return student.last_name
        }
    },

    methods: {
        markedRed(e) {
            if (this.coloredMark != 1) {
                this.coloredMark = 1
            } else {
                this.coloredMark = 0
            }

        },
        markedOrange(e) {

            if (this.coloredMark != 2) {
                this.coloredMark = 2
            } else {
                this.coloredMark = 0
            }


        },
        markedGreen(e) {

            if (this.coloredMark != 3) {
                this.coloredMark = 3
            } else {
                this.coloredMark = 0
            }
        },

        setSlot(date) {
            let result
            result = this.journalSlotByDateStudentSubject(date, this.student, this.subject)
            if (result) {
                this.slot = result
                this.mark = this.slot.mark
                this.coloredMark = this.slot.colored_mark
            }
            if (result === undefined) {
                this.slot = this.mark = this.coloredMark = null

            }
        }

    },

    watch: {
        coloredMark(val) {
            const name = this.$el.querySelector('.name')

            if (val) {
                name.style.backgroundColor = this.colorByKey(val)
            } else {
                name.style.backgroundColor = 'transparent'
            }
        },

        submited(val) {
            if (val) {
                if (!this.slot) {
                    if (this.mark || this.coloredMark) {
                        JournalService.setJournalSlot({
                            date: this.date,
                            teacher: this.teacher,
                            subject: this.subject,
                            student: this.student,
                            mark: this.mark,
                            colored_mark: this.coloredMark,
                        }).then(resp => this.$store.commit('addJournalSlot', resp.data)).catch(err => console.log(err))
                    }
                } else {
                    if (this.slot.mark != this.mark || this.slot.colored_mark != this.coloredMark) {
                        this.slot.colored_mark = this.coloredMark
                        this.slot.mark = this.mark
                        this.$store.commit('editJournalSlot', this.slot)
                        JournalService.editJournalSlot(this.slot.id, this.slot).catch(err => console.log(err))
                    }
                }
            }
        },

        date(val) {
            this.setSlot(val)
        }
    },

    mounted() {
        if (this.date != this.today) {
            this.setSlot(this.date)
        }
    }
}


</script>

<style scoped>
.input {
    width: 40px;
}

.circle {
    border-radius: 50%;
    width: 27px;
    height: 27px;


}

.circle:hover {
    cursor: pointer;
}

.red {
    background-color: #ff6161;

}

.orange {

    background-color: orange;

}

.green {

    background-color: #44d449;

}
</style>