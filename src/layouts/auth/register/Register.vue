<template>
  <div class="auth-container">
    <div class="wrapper-auth px-5 py-4">
      <b-form @submit="onSignUp">
        <span class="title-auth">Sign Up</span>
        <div class="wrap-input">
          <b-form-input class="input-auth" v-model="form.name" type="text" required
                        placeholder="full name"></b-form-input>
          <span class="focus-input"></span>
        </div>
        <div class="wrap-input">
          <b-form-input class="input-auth" v-model="form.email" type="email" required
                        placeholder="email"></b-form-input>
          <span class="focus-input"></span>
        </div>
        <div class="wrap-input">
          <b-form-input  class="input-auth" v-model="form.password" type="password" required
                        placeholder="password"></b-form-input>
        </div>
        <div class="wrap-input">
          <b-form-input class="input-auth" v-model="form.confirmPassword" type="password" required
                        placeholder="confirm password"></b-form-input>
        </div>
        <b-button class="btn-auth" type="submit">SIGN UP</b-button>
        <div class="auth-with">
          <span class="auth-with-txt">Have account?</span>
        </div>
        <b-link to="/login" class="auth-txt">Sign In</b-link>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  methods: {
    onSignUp (e) {
      e.preventDefault()
      // save the user to localStorage
      return new Promise((resolve, reject) => {
        const user = {
          email: this.form.email,
          password: this.form.password,
          name: this.form.name
        }
        console.log(user)
        resolve(user)
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('error')
      })
        .then(() => this.$router.push({path: '/login'}))
        .catch(err => alert(err))
    }
  }
}
</script>

<style scoped>
@import "../Authstyle.css";
</style>
