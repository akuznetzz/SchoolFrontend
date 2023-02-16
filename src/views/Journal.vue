<template>
    <div>
        <router-link :to="{ name: 'ShowJournal' }">Посмотреть журнал</router-link>

        <base-date @getDate="getDate" />

        <select v-model="teacher">
            <option value="" disabled selected>---</option>
            <option v-for="teacher in allTeachers" :value="teacher.id">{{ teacher.last_name }}</option>
        </select>

        <select v-model="subject">
            <option value="" disabled selected>---</option>
            <option v-for="subject in allSubjects" :value="subject.id">{{ subject.name }}</option>
        </select>

        <select v-model="group">
            <option value="" disabled selected>---</option>
            <option v-for="group in allClasses" :value="group.id">{{ group.name }}</option>
        </select>

        <!-- <br> -->
        <div v-if="group" class="journal__table">
            <div class="journal__header">
                <div class="header__name header__cell">
                    ФИО ученика
                </div>
                <div class="header__mark header__cell">
                    Оценка
                </div>
            </div>
            <div class="journal__body" :style="`grid-template-rows: repeat(${groupStudents.length}, auto)`">
                <FillJournalSlot class="journal__row" v-for="student in groupStudents" :key="student.id"
                    :student="student.id" :date="date" :subject="subject" :teacher="teacher" :submited="submited" />
            </div>
        </div>

        <button class="btn" v-if="teacher && subject && group" @click="fillJournal"> Заполнить журнал</button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FillJournalSlot from '@/components/Journal/FillJournalSlot.vue';

export default {
    data() {
        return {
            teacher: null,
            subject: null,
            group: null,
            date: this.$store.state.date.today,
            submited: false,
        }
    },

    components: {
        FillJournalSlot
    },

    computed: {
        ...mapGetters([
            'allTeachers',
            'allSubjects',
            'allClasses',
            'studentsByGroupId'
        ]),

        groupStudents() {
            return this.studentsByGroupId(this.group)
        }
    },

    methods: {
        fillJournal(e) {
            this.submited = true
            e.target.disabled = true
        },

        getDate(data) {
            this.date = data
        }
    },

    watch: {
        date() {
            if (this.$el.querySelector('.btn')) {
                this.$el.querySelector('.btn').disabled = false
                this.submited = false
            }
        }
    }

}
</script>

<style  scoped>
.journal__table {
    display: grid;
    grid-template-rows: repeat(2, auto);
    width: auto;
    margin: 10px 0;
}

.journal__header {
    display: grid;
    grid-template-columns: 110px 1fr;
}

.header__cell {
    border-top: 1px solid #000;
    border-left: 1px solid #000;
}

.header__cell:last-child {
    border-right: 1px solid #000;

}

.journal__body {
    display: grid;

}

.journal__row {
    display: grid;
    grid-template-columns: 110px repeat(4, auto);
    padding: 2px 0;
    border: 1px solid #000;
    border-bottom: none;

}

.journal__row:last-child {
    border-bottom: 1px solid #000;
}
</style>