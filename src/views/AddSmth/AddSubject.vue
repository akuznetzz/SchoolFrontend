<template>
    <div>
        <PushSubject @push-subject="pushSubject" />
        <SubjectList :subjects="subjects" @remove="remove" />
    </div>
</template>

<script>
import SubjectService from '@/services/SubjectService.js';
import PushSubject from '@/components/Subject/PushSubjectIntoList.vue';
import SubjectList from '@/components/Subject/SubjectList.vue';

export default {
    components: {
        PushSubject,
        SubjectList,
    },

    data() {
        return {
            subjects: [],
        }
    },

    created() {
        SubjectService.getSubject()
            .then(resp => this.subjects = resp.data)
            .catch(err => console.log(err))
    },

    methods: {
        async pushSubject(obj) {
            await SubjectService.setSubject(obj)
            const i = document.getElementById('subjName')
            i.value = ''

            await SubjectService.getSubject()
                .then(resp => this.subjects = resp.data)
                .catch(err => console.log(err))
        },

        async remove(id) {
            await SubjectService.deleteSubject(id)

            await SubjectService.getSubject()
                .then(resp => this.subjects = resp.data)
                .catch(err => console.log(err))
        }
    }


}
</script>

<style scoped>

</style>