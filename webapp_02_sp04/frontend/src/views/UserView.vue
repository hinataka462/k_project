<template>
    <div>
      <h1>User List</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }} - {{ user.email }}
        </li>
      </ul>
      <form @submit.prevent="addUser">
        <input v-model="newUser.name" placeholder="Name" required />
        <input v-model="newUser.email" placeholder="Email" required />
        <button type="submit">Add User</button>
      </form>
    </div>
  </template>
  
  <script>
  import UserService from "../services/UserService";
  
  export default {
    data() {
      return {
        users: [],
        newUser: { name: "", email: "" },
      };
    },
    methods: {
      async fetchUsers() {
  try {
    const response = await UserService.getUsers();
    this.users = response.data; // データ取得後に更新
  } catch (error) {
    console.error("Error fetching users:", error);
  }
},
      addUser() {
        UserService.createUser(this.newUser).then(() => {
          this.fetchUsers();
          this.newUser = { name: "", email: "" };
        });
      },
    },
    mounted() {
      this.fetchUsers();
    },
  };
  </script>
  