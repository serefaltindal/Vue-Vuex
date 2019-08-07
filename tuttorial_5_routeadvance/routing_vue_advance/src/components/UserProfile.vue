<template>
  <div class="card">
    <img src="./../assets/img_avatar.png" alt="Avatar" style="width:100%">
    <div class="container">
      <h4>
        <b>{{userProfile.name}}@{{userProfile.username}}</b>
      </h4>
      <hr>
      <p>{{userProfile.email}}</p>
      <p>{{userProfile.company.name}}</p>
      <p>{{userProfile.company.catchPhrase}} {{userProfile.company.bs}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserProfile",
  props: {
    id: { type: String, required: true }
  },
  data: function() {
    return {
      userProfile: {}
    };
  },
  created() {
    let userId = this.$route.params.id;
    fetch("https://jsonplaceholder.typicode.com/users/" + userId)
      .then(resp => {
        return resp.json();
      })
      .then(userProfile => {
        this.userProfile = userProfile;
      });
  }
};
</script>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 40%;
  border-radius: 5px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

img {
  border-radius: 5px 5px 0 0;
}

.container {
  padding: 2px 16px;
}
</style>
