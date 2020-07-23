<template>
    <div class="grid">
        <heading></heading>
        <main class="main">
            <p class="paragraph">How do you capture more interesting travel photos with your iPhone? How do
                you avoid
                taking the same cliché vacation photos that everyone else takes? I recently interviewed Steffen Geldner
                – a talented iPhone photographer with a passion for travel. In this article, Steffen reveals 7 tips for
                shooting beautiful travel photos that will preserve the amazing memories of your trip. Read on to
                discover how to take better travel photos with your iPhone!</p>
            <picture class="img">
                <source media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)" srcset="img/img@3x.jpg">
                <source media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 120dpi)" srcset="img/img@2x.jpg">
                <img src="img/img.jpg" alt="Plane above buildings">
            </picture>
            <h2 class="subtitle">1. Research Your Destination To Find The Best Photo Opportunities</h2>
            <p class="paragraph">Before your trip, I recommend researching the destination to find the most interesting
                photo opportunities.</p>
            <p class="paragraph">I always research the location I’m traveling to. I do this extensively and
                obsessively!</p>
            <p class="paragraph">It’s up to you how much research you do. But you should definitely spend a bit of time
                looking up some great places to take pictures.</p>
            <p class="paragraph">So, what kind of research can you do?</p>
            <p class="paragraph">First, you could search for photos that other people have taken at the locations you’re
                planning to visit.</p>
            <p class="paragraph">Search on Instagram or Google to get an idea of the kinds of photos people take
                there.</p>

            <h2 class="subtitle">2. Capture Your Journey To Tell The Complete Story Of Your Travels</h2>
            <p class="paragraph">Travel photography isn’t just about photographing the destination.</p>
            <p class="paragraph">For a more complete photographic story, capture your journey to and from the location
                you’re visiting.</p>
            <p class="paragraph">If you’re traveling by plane, try to get a window seat where you have a view of the
                wing or propeller.</p>
            <p class="paragraph">And of course, you could capture a beautiful aerial view of clouds, mountains, or city
                lights as you’re flying above.</p>
            <p class="paragraph">Your journey will often involve several different types of transport. And they all
                offer great photo opportunities.</p>
            <p class="paragraph">Whether you’re traveling by car, taxi, bus, train, boat, or plane, try to capture some
                interesting photos.</p>
        </main>
        <aside class="sidebar">
            <button @click="openPopUp" class="sidebar__button">send me the tips</button>
        </aside>
        <div class="popup">
            <div class="popup__inner"></div>
            <div class="popup__outer">
                <div class="popup__close">X</div>
                <div class="popup__steps">Steps 1 of 2</div>
                <div class="divider divider--half ">
                    <div class="divider-second-half"></div>
                </div>
                <div class="popup__title">Enter Your Email To Get <span>FREE</span><br>
                    iPhone Photography Email Tips:
                </div>


                <form
                    id="popup"
                    class="form"
                    @submit="checkForm"
                    action="https://iphonephotographyschool.com/"
                    method="post"
                    novalidate="true"
                >

                    <div class="form__input">
                        <input type="text" id="email" v-model="email" required/>
                        <label for="email">Please enter your email here</label>
                    </div>
                    <input
                        type="submit"
                        class="form__button"
                        value="Send Me The Tips »"
                    >
                </form>
            </div>
        </div>
    </div>
</template>
<script>
    import Heading from './Heading'

    export default {
        data() {
            return {
                errors: [],
                email: null
            }
        },
        components: {
            'Heading': Heading
        },
        methods: {
            openPopUp() {
                console.log('clicked');
            },
            checkForm: function (e) {
                const label = document.querySelector('.form label');

                this.errors = [];
                if (!this.email) {
                    this.errors.push(" ");
                    label.innerHTML = 'Please enter email';

                } else if (!this.validEmail(this.email)) {
                    this.errors.push(" ");
                    label.innerHTML = 'Please enter a valid email address';
                }
                if (!this.errors.length) return true;
                e.preventDefault();
            },
            validEmail: function (email) {
                var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            }
        },
        computed: {
            isDisable() {
                return this.email.length > 0;
            }
        }
    }
</script>
<style>
</style>
