<template>
    <div
        class="aside"
        :data-active="toggleState"
    >
        <div class="aside__menu">
            <MainMenu></MainMenu>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import MainMenu from '../../Menu/MainMenu';

    export default {
        computed: {
            ...mapState('Header', ['toggleState']),
        },
        components: {
            MainMenu,
        },
    }
</script>