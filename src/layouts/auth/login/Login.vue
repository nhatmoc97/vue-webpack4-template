<template>
  <div class="parent-auth">
  <div class="auth-container">
    <div class="wrapper-auth px-5 py-4">
      <b-form @submit="onLogin">
        <span class="title-auth">Sign In</span>
        <div class="wrap-input">
          <b-form-input class="input-auth" v-model="form.email" type="email" required
                        placeholder="username or email"></b-form-input>
          <span class="focus-input"></span>
        </div>
        <div class="wrap-input">
          <b-form-input class="input-auth" v-model="form.password" type="password" required
                        placeholder="password"></b-form-input>
        </div>
        <b-button class="btn-auth" type="submit">SIGN IN</b-button>
        <div class="auth-with">
          <span class="auth-with-txt">Or login with</span>
        </div>
        <b-row class="social-wrap pt-3 justify-content-center">
          <b-link class="social-item">
            <font-awesome-icon :icon="['fab', 'facebook-f']"/>
          </b-link>
          <b-link class="social-item" style="color: red">
            <font-awesome-icon :icon="['fab', 'google']"/>
          </b-link>
        </b-row>
        <b-link to="/register" class="auth-txt">Sign Up</b-link>
      </b-form>
    </div>
  </div>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onLogin (e) {
      e.preventDefault()
      // save the user to localStorage
      return new Promise((resolve, reject) => {
        const user = {email: this.form.email, password: this.form.password}
        localStorage.setItem('user', JSON.stringify(user))
        console.log(user)
        resolve(user)
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('error')
      })
        .then(() => this.$router.push({path: '/'}))
        .catch(err => alert(err))
    }
  }
}
</script>

<style scoped>
@import "../Authstyle.css";
</style>
