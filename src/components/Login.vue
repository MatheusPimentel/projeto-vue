<template>
<div style="background: lightgrey; height: 100vh">
  <div>
    <b-navbar toggleable="md" type="dark" variant="secondary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="#">Aplicação</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-form>
            <b-row style="margin-right: 10px">
              <b-form-input size="sm" class="mr-sm-2" v-model="userLogin.user" type="text" placeholder="Login"></b-form-input>
              <b-form-input size="sm" class="mr-sm-2" v-model="userLogin.password" type="password" placeholder="Senha"></b-form-input>
              <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="success">Entrar</b-button>
            </b-row>
          </b-nav-form>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
  <div class="container">
    <div>
      <b-card title="Cadastre-se"
              img-top
              tag="article"
              style="margin-top: 15%"
              class="mb-2">
        <b-row>
          <b-col>
            <input-register v-model="userRegister.name" :type="typeInput.name.type" :required="required" :placeholder="typeInput.name.placeholder" />
          </b-col>
          <b-col>
            <input-register v-model="userRegister.number" :type="typeInput.number.type" :required="required" :placeholder="typeInput.number.placeholder" />
          </b-col>
        </b-row>
        <b-row style="margin-top: 15px">
          <b-col>
            <input-register v-model="userRegister.email" :type="typeInput.email.type" :required="required" :placeholder="typeInput.email.placeholder" />
          </b-col>
          <b-col>
            <input-register v-model="userRegister.password" :type="typeInput.password.type" :required="required" :placeholder="typeInput.password.placeholder" />
          </b-col>
        </b-row>
        <button-bts  type="success" :onClick="teste" style="margin-top: 15px">Registrar</button-bts>
        {{msg.olaMundo}}
      </b-card>
    </div>
  </div>
</div>
</template>

<script>
import input from './componentsParents/inputForm'
import button from './componentsParents/Button'
import {olaMundo} from '../services/requestService'
export default {
  name: 'login',
  components: {
    'input-register': input,
    'button-bts': button
  },
  data () {
    return {
      userLogin: {},
      userRegister: {},
      required: true,
      msg: {},
      typeInput: {
        name: {
          type: 'text',
          placeholder: 'Nome'
        },
        number: {
          type: 'number',
          placeholder: 'Número'
        },
        email: {
          type: 'email',
          placeholder: 'Email'
        },
        password: {
          type: 'password',
          placeholder: 'Senha'
        }
      }
    }
  },
  methods: {
    teste () {
      olaMundo()
        .then((response) => {
          this.msg = response.data
          console.log(response.data)
        }).catch((err) => {
          console.log(err.response)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
