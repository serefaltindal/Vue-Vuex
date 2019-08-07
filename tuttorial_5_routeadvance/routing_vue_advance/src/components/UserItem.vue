<template>
  <div>
    <router-link :to="profileLink">
      <td>{{user.name}}@{{user.username}}</td>
    </router-link>
    <td>{{user.email}}</td>
    <td>{{user.phone}}</td>
    <td>{{user.website}}</td>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    profileLink: function() {
      return "/user/" + this.user.id;
    }
  },
  data: function() {
    return {};
  },
  methods: {
    clickRow: function(evt) {
      console.log("clickRow " + evt);
    }
  }
};
</script>

<style>

div{
    display: contents;
}
#users {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
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

#user tr {
  width: 100%;
}
#users th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
}
</style>