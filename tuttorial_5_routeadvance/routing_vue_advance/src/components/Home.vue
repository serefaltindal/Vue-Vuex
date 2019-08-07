<template>
  <div>
    <template>
      <table id="users">
        <tr>
          <th>Ad-Soyad</th>
          <th>Telefon</th>
          <th>E-mail</th>
          <th>Website</th>
        </tr>
        <tr v-for="user in users" v-bind:key="user.id">
          <user-item v-bind:user="user"></user-item>
        </tr>
      </table>
    </template>
  </div>
</template>
<script>
import UserItem from "./UserItem.vue";

export default {
  name: "Home",
  data: function() {
    return {
      users: []
    };
  },
  created() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(resp => {
        return resp.json();
      })
      .then(users => {
        console.log(users);
        this.users = users;
      });
  },
  components: { UserItem }
};
</script>
<style>
#users {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#users div{
  width: 100%;
}

#users td,
#users th {
  border: 1px solid #ddd;
  padding: 8px;
}

#users tr:nth-child(even) {
  background-color: #f2f2f2;
}

#users tr:hover {
  background-color: #ddd;
}

#users th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>