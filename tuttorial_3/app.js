Vue.component(("vue-cart"),
    {
        props: {
            cart: {
                type: Array,
                required: true
            },
            title:String
        },        
        methods:{
            removeFromCart(index) {
                console.log("remove from cart method starting");
                this.cart.splice(index, 1);
            },
            saveForLater(index) {
                const item = this.cart.splice(index, 1);
                this.saved.push(item[0]);
            }
        },
        template: ` 
        <div class="cart-wrapper">
         <div class="cart">
            <h4>{{title}}</h4>
            <div class= "item" v-for= "(item, index) in cart" >
                  <div class="image">
                    <a v-bind:href="item.url">
                     <img v-bind:src="item.image" />
                    </a>
                  </div >
                  <div class="info">
                    <h4>{{ item.name }}</h4>
                    <p class="seller">by {{ item.seller }}</p>
                    <p class="status available" v-if="item.isAvailable">In Stock</p>
                    <p class="shipping" v-if="item.isEligible">Eligible for FREE Shipping & FREE Returns</p>
                    <a href="#" v-on:click="removeFromCart(index)">Delete</a>
                    <a href="#" class="secondary" v-on:click="saveForLater(index)">Save for later</a>
                  </div >
                 <p class="price">$ {{ item.price }}</p>
            </div >
          </div>
        </div > `
    });



window.addEventListener("load", () => {


    window.vue = new Vue({
        el: "#app",
        name: "Cart",
        data: {
            isLoading: true,
            subtotal: 0,
            cart: [],
            saved: [],
            items: []
        },
        methods: {
            removeFromCart(index) {
                this.cart.splice(index, 1);
            },
            saveForLater(index) {
                const item = this.cart.splice(index, 1);
                this.saved.push(item[0]);
            },
            removeFromSavedList(index) {
                console.log(index);
                const item = this.saved.splice(index, 1);
                this.items.push(item[0]);
            },
            moveToCart(index) {
                const item = this.saved.splice(index, 1);
                this.cart.push(item[0]);
            }

        },
        computed: {
            calculatePrice: function () {
                this.subtotal = 0;
                for (let i = 0; i < this.cart.length; i++) {
                    console.log(this.cart[i].price);
                    this.subtotal += this.cart[i].price;
                }
                return this.subtotal;
            }
        },
        created() {
            fetch("./data.json")
                .then((res) => { return res.json() })
                .then((res) => {
                    this.isLoading = false;
                    this.cart = res.cart;
                    this.saved = res.saved;
                })
        }
    })

});