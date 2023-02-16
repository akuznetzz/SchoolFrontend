<template>
    <div @change="setTeacherBaseInfo">

        <p>
            <input type="text" name="last-name" v-model="teacher.last_name" required>
            <label for="last-name"> Фамилия</label>
        </p>
        <p>
            <input type="text" name="first-name" v-model="teacher.first_name" required>
            <label for="first-name"> Имя</label>
        </p>
        <p>
            <input type="text" name="middle-name" v-model="teacher.middle_name">
            <label for="middle-name"> Отчество</label>
        </p>
        <p>
            <input type="email" name="email" v-model="teacher.email" required>
            <label for="email"> Email</label>
        </p>
        <p>
            <input type="tel" name="phone" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
                required v-model="teacher.phone">
            <label for="phone"> Телефон</label>
        </p>
        <p>
            <input type="date" name="birthday" v-model="teacher.birthday">
            <label for="birthday"> Дата рождения</label>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props: ['id'],
    data() {
        return {
            teacher: {
                last_name: null,
                first_name: null,
                middle_name: null,
                birthday: null,
                phone: null,
                email: null
            }
        }
    },

    computed: {
        ...mapGetters([
            'teacherById'
        ])
    },

    mounted() {
        if (this.id) {
            const existTeacher = this.teacherById(this.id)
            for (let key in this.teacher) {
                if (key in existTeacher) {
                    this.teacher[key] = existTeacher[key]
                }
            }
        }
    },

    methods: {
        setTeacherBaseInfo() {
            if (this.teacher.first_name &&
                this.teacher.last_name &&
                this.teacher.phone &&
                this.teacher.email) {
                this.$emit('setTeacherBaseInfo', this.teacher)
            }
        }
    }

}
</script>

<style lang="scss" scoped>
div {
    text-align: left;
}
</style>