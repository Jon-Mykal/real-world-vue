<template>
    <section>
        Welcome to the routed page
        <template v-if="queryParams">   
            <p v-if="success">This was a success {{success}}</p>
            <p v-else>This was not a success</p>
        </template>

    </section>
</template>

<script>
export default {
    props: ['success'],
    computed: {
        queryParams() {
            //console.log(this.$route.query);
            const paramsExist = Object.keys(this.$route.query).length !== 0;
            console.log(paramsExist);
            return paramsExist;
        }
    }
}
</script>