Vue.component('navbar', {
    props: ['currentPage'],
    methods: {
        mainmain() {
            this.$emit('gotomain')
        }

    },
    template: `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Fake KTP</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" v-on:click="mainmain">Generate KTP <span class="sr-only">(current)</span></a>
            </li>
        </ul>
        <span class="navbar-text">
            FAKEID
        </span>
    </div>
</nav>`
})