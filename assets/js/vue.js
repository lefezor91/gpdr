const Accueil = {
  template: "#home",
  name: "Accueil",
};
const Articles = {
  template: "#articles",
  name: "articles",
};
const Transfert = {
  template: "#transfert",
  name: "Transfert",
};
const Historique = {
  template: "<h1>Historique</h1>",
  name: "Historique",
};
const Profil = {
  template: "<h1>Profil</h1>",
  name: "Profil",
};
const CreateArticle = { template: "#create-article" };
const SupplyArticle = { template: "<h3>approvisionner un article</h3>" };
const ListArticle = { template: "<h3>lister les article</h3>" };

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Accueil,
      name: "Accueil",
    },
    {
      path: "/articles",
      component: Articles,
      name: "Articles",
      children: [
        { path: "", component: CreateArticle },
        { path: "supplyarticle", component: SupplyArticle },
        { path: "listarticle", component: ListArticle },
      ],
    },
    { path: "/transfert", component: Transfert, name: "Transfert" },
    { path: "/historique", component: Historique, name: "Historique" },
    { path: "/profil", component: Profil, name: "Profil" },
  ],
});

const vue = new Vue({
  router,
}).$mount("#app");
