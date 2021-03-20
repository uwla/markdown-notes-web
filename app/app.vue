<template>
  <div id="app">  
    <aside id="sidebar">
      <button id="sidebar-btn-open" @click="showSidebar = true">
        <i class="fa fa-bars"></i>
      </button>
      <div id="sidebar-content" :class="{ opened: showSidebar }">
        <button id="sidebar-btn-close" @click="showSidebar = false">
          <i class="fa fa-times"></i>
        </button>
        <router-link to="/" id="sidebar-btn-home">
          HOME PAGE
        </router-link>
        <div class="search-bar">
          <input type="text" v-model="search">
        </div>
        <ul class="pages-menu">
          <li v-for="(file, i) in filteredFiles" :key="i"> 
            <router-link :to="'/' + file.path">{{ file.path }}</router-link>  
          </li>
        </ul>
      </div>  
    </aside>
    <div v-show="showPage">
      <markdown-content class="md-body" :text="content" />
    </div>
    <div v-show="showHomePage">
      <h1>NOTES</h1>
      <div class="search-bar">
        <input type="text" v-model="search">
      </div>
      <ul class="pages-menu">
        <li v-for="(file, i) in filteredFiles" :key="i"> 
          <router-link :to="'/' + file.path">{{ file.path }}</router-link>  
        </li>
      </ul>
    </div>
    <div v-show="pageNotFound">
      <h1>PÁGINA NÃO ENCONTRADA</h1>
      <p>Certifique-se de que o arquivo desejado existe.</p>
    </div>
  </div>
</template>
<script src="./app.js"></script>
