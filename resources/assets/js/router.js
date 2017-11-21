module.exports = {
    routes: [
      { path: '/', component: require('./components/home.vue')},
      /**
      **    routes
      **/
      { path: '/prospects', component: require('./components/prospects/home.vue'),
        children: [
          { path: '', component: require('./components/prospects/list.vue') },
          { path: 'add', component: require('./components/prospects/form.vue') },
          { path: 'edit/:id', component: require('./components/prospects/form.vue') },
          { path: 'show/:id', component: require('./components/prospects/show.vue') },
          { path: 'delete/:id', component: require('./components/prospects/delete.vue') }
        ]
      },

      { path: '/prospections', component: require('./components/prospections/home.vue'),
        children: [
          { path: '', component: require('./components/prospections/list.vue') },
          { path: 'add', component: require('./components/prospections/form.vue') },
          { path: 'edit/:id', component: require('./components/prospections/form.vue') },
          { path: 'show/:id', component: require('./components/prospections/show.vue') },
          { path: 'delete/:id', component: require('./components/prospections/delete.vue') }
        ]
      },

      { path: '/devis', component: require('./components/devis/home.vue'),
        children: [
          { path: '', component: require('./components/devis/list.vue') },
          { path: 'add', component: require('./components/devis/form.vue') },
          { path: 'edit/:id', component: require('./components/devis/form.vue') },
          { path: 'show/:id', component: require('./components/devis/show.vue') },
          { path: 'delete/:id', component: require('./components/devis/delete.vue') }
        ]
      },

      { path: '/clients', component: require('./components/clients/home.vue'),
        children: [
          { path: '', component: require('./components/clients/list.vue') },
          { path: 'add', component: require('./components/clients/form.vue') },
          { path: 'edit/:id', component: require('./components/clients/form.vue') },
          { path: 'show/:id', component: require('./components/clients/show.vue') },
          { path: 'delete/:id', component: require('./components/clients/delete.vue') }
        ]
      },

      { path: '/visites', component: require('./components/visites/home.vue'),
        children: [
          { path: '', component: require('./components/visites/list.vue') },
          { path: 'add', component: require('./components/visites/form.vue') },
          { path: 'edit/:id', component: require('./components/visites/form.vue') },
          { path: 'show/:id', component: require('./components/visites/show.vue') },
          { path: 'delete/:id', component: require('./components/visites/delete.vue') }
        ]
      },



      { path: '/factures', component: require('./components/factures/home.vue'),
        children: [
          { path: '', component: require('./components/factures/list.vue') },
          { path: 'add', component: require('./components/factures/form.vue') },
          { path: 'edit/:id', component: require('./components/factures/form.vue') },
          { path: 'show/:id', component: require('./components/factures/show.vue') },
          { path: 'delete/:id', component: require('./components/factures/delete.vue') }
        ]
      },

      { path: '/paiements', component: require('./components/paiements/home.vue'),
        children: [
          { path: '', component: require('./components/paiements/list.vue') },
          { path: 'add', component: require('./components/paiements/form.vue') },
          { path: 'edit/:id', component: require('./components/paiements/form.vue') },
          { path: 'show/:id', component: require('./components/paiements/show.vue') },
          { path: 'delete/:id', component: require('./components/paiements/delete.vue') }
        ]
      },

      { path: '/typepaiements', component: require('./components/typepaiements/home.vue'),
        children: [
          { path: '', component: require('./components/typepaiements/list.vue') },
          { path: 'add', component: require('./components/typepaiements/form.vue') },
          { path: 'edit/:id', component: require('./components/typepaiements/form.vue') },
          { path: 'show/:id', component: require('./components/typepaiements/show.vue') },
          { path: 'delete/:id', component: require('./components/typepaiements/delete.vue') }
        ]
      },

      { path: '/produits', component: require('./components/produits/home.vue'),
        children: [
          { path: '', component: require('./components/produits/list.vue') },
          { path: 'add', component: require('./components/produits/form.vue') },
          { path: 'edit/:id', component: require('./components/produits/form.vue') },
          { path: 'show/:id', component: require('./components/produits/show.vue') },
          { path: 'delete/:id', component: require('./components/produits/delete.vue') }
        ]
      },

      { path: '/portfolios', component: require('./components/portfolios/home.vue'),
        children: [
          { path: '', component: require('./components/portfolios/list.vue') },
          { path: 'add', component: require('./components/portfolios/form.vue') },
          { path: 'edit/:id', component: require('./components/portfolios/form.vue') },
          { path: 'show/:id', component: require('./components/portfolios/show.vue') },
          { path: 'delete/:id', component: require('./components/portfolios/delete.vue') }
        ]
      },

      { path: '/fournisseurs', component: require('./components/fournisseurs/home.vue'),
        children: [
          { path: '', component: require('./components/fournisseurs/list.vue') },
          { path: 'add', component: require('./components/fournisseurs/form.vue') },
          { path: 'edit/:id', component: require('./components/fournisseurs/form.vue') },
          { path: 'show/:id', component: require('./components/fournisseurs/show.vue') },
          { path: 'delete/:id', component: require('./components/fournisseurs/delete.vue') }
        ]
      },

      { path: '/typefournisseurs', component: require('./components/typefournisseurs/home.vue'),
        children: [
          { path: '', component: require('./components/typefournisseurs/list.vue') },
          { path: 'add', component: require('./components/typefournisseurs/form.vue') },
          { path: 'edit/:id', component: require('./components/typefournisseurs/form.vue') },
          { path: 'show/:id', component: require('./components/typefournisseurs/show.vue') },
          { path: 'delete/:id', component: require('./components/typefournisseurs/delete.vue') }
        ]
      },

      { path: '/caisse/alimentations', component: require('./components/caisse/alimentations/home.vue'),
        children: [
          { path: '', component: require('./components/caisse/alimentations/list.vue') },
          { path: 'add', component: require('./components/caisse/alimentations/form.vue') },
          { path: 'edit/:id', component: require('./components/caisse/alimentations/form.vue') },
          { path: 'show/:id', component: require('./components/caisse/alimentations/show.vue') },
          { path: 'delete/:id', component: require('./components/caisse/alimentations/delete.vue') }
        ]
      },

      { path: '/caisse/charges', component: require('./components/caisse/charges/home.vue'),
        children: [
          { path: '', component: require('./components/caisse/charges/list.vue') },
          { path: 'add', component: require('./components/caisse/charges/form.vue') },
          { path: 'edit/:id', component: require('./components/caisse/charges/form.vue') },
          { path: 'show/:id', component: require('./components/caisse/charges/show.vue') },
          { path: 'delete/:id', component: require('./components/caisse/charges/delete.vue') }
        ]
      },
  ]
};
