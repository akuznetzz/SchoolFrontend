<template>
    <div>
        <form class="add-teacher" @change.prevent="$emit('change-teacher', teacher)"
            @submit.prevent="$emit('add-teacher', submitButton)">
            <p>
                <input type="text" v-model="teacher.last_name" name="last-name" required>
                <label for="last-name"> Фамилия</label>
            </p>
            <p>
                <input type="text" v-model="teacher.first_name" name="first-name" required>
                <label for="first-name"> Имя</label>
            </p>
            <p>
                <input type="text" v-model="teacher.middle_name" name="middle-name">
                <label for="middle-name"> Отчество</label>
            </p>
            <p>
                <input type="email" v-model="teacher.email" name="email" required>
                <label for="email"> Email</label>
            </p>
            <p>
                <input type="tel" v-model="teacher.phone" name="phone"
                    pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" required>
                <label for="phone"> Телефон</label>
            </p>
            <p>
                <input type="date" v-model="teacher.birthday" name="birthday">
                <label for="birthday"> Дата рождения</label>
            </p>

            <p>
                <AddSubject :subjects="subjects" />
            </p>

            <div v-if="billings.length">
                <div v-for="(billing, index) in billings" :key="index">
                    <span> {{ billing.pay_type.name }}: </span>
                    <span> ставка: {{ billing.rate }}; </span>
                    <span v-if="billing.ratio">коэффициент: {{ billing.ratio }};</span>
                    <span v-if="billing.isFixed">фиксированная</span>
                    <button @click.prevent="removeBilling(billing.id, index)">Удалить</button>
                </div>
            </div>
            <p>
                <AddBilling />
            </p>

            <input class="submit" v-if="!teacher.id" type="submit" name="onemore" value="Добавить и внести ещё">
            <input class="submit" v-if="!teacher.id" type="submit" name="close" value="Добавить и закрыть">
            <button v-if="teacher.id" @click.prevent="leave">Сохранить и выйти</button>



        </form>
    </div>
</template>

<script>
import { eventBus } from '../../main.js'
import AddBilling from '@/components/Billing/AddBilling.vue';
import AddSubject from '@/components/Subject/AddSubjectToTeacher.vue';


export default {
    components: { AddBilling, AddSubject },
    props: ['teacher', 'billings', 'subjects'],
    data() {
        return {
            submitButton: '',
        }
    },

    mounted() {
        const buttons = document.querySelectorAll('.submit')
        buttons.forEach(button => {
            button.addEventListener('pointerdown', (e) => this.submitButton = e.target.name)
        })
    },

    methods: {
        removeBilling(id) {
            eventBus.$emit('remove-billing', id)
        },

        addButtonName(e) {
            this.submitButton = e.target.name
        },

        leave() {
            window.location.href = 'http://127.0.0.1:8080/teachers'

        }
    }

}
</script>

<style scoped>
div form {
    text-align: left;
}
</style>

