<template>
  <div>
    <global-pagetitle color="dark" title="Tableau de bord" subtitle="Statistiques et liens utiles." icon="tachometer"></global-pagetitle>
    <section class="is-fullheight">
      <div class="hero-body">
        <div class="tile is-ancestor">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-primary" style="cursor:pointer;" @click="$router.push({ path: `/prospects` })">
              <div class="columns is-mobile">
                <div class="column">
                  <span class="icon is-large">
                    <i class="fa fa-3x fa-users"></i>
                  </span>
                </div>
                <div class="column is-four-fifths">
                  <p class="title is-3">Prospects</p>
                </div>
              </div>
            </article>
            <article class="tile is-child notification is-primary" style="cursor:pointer;" @click="$router.push({ path: `/prospections` })">
              <div class="columns is-mobile">
                <div class="column">
                  <span class="icon is-large">
                    <i class="fa fa-3x fa-handshake-o"></i>
                  </span>
                </div>
                <div class="column is-four-fifths">
                  <p class="title is-3">Prospections</p>
                </div>
              </div>
            </article>
            <article class="tile is-child notification is-primary" style="cursor:pointer;" @click="$router.push({ path: `/devis` })">
              <div class="columns is-mobile">
                <div class="column">
                  <span class="icon is-large">
                    <i class="fa fa-3x fa-file-text-o"></i>
                  </span>
                </div>
                <div class="column is-four-fifths">
                  <p class="title is-3">Devis</p>
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-warning" style="cursor:pointer;" @click="$router.push({ path: `/clients` })">
              <div class="columns is-mobile">
                <div class="column">
                  <span class="icon is-large">
                    <i class="fa fa-3x fa-address-book"></i>
                  </span>
                </div>
                <div class="column is-four-fifths">
                  <p class="title is-3">Clients</p>
                </div>
              </div>
            </article>
            <article class="tile is-child notification is-warning" style="cursor:pointer;" @click="$router.push({ path: `/visites` })">
              <div class="columns is-mobile">
                <div class="column">
                  <span class="icon is-large">
                    <i class="fa fa-3x fa-clock-o"></i>
                  </span>
                </div>
                <div class="column is-four-fifths">
                  <p class="title is-3">Visites</p>
                </div>
              </div>
            </article>
            <article class="tile is-child notification is-warning" style="cursor:pointer;" @click="$router.push({ path: `/factures` })">
              <div class="columns is-mobile">
                <div class="column">
                  <span class="icon is-large">
                    <i class="fa fa-3x fa-file-text"></i>
                  </span>
                </div>
                <div class="column is-four-fifths">
                  <p class="title is-3">Factures</p>
                </div>
              </div>
            </article>
            <article class="tile is-child notification is-warning" style="cursor:pointer;" @click="$router.push({ path: `/payments` })">
              <div class="columns is-mobile">
                <div class="column">
                  <span class="icon is-large">
                    <i class="fa fa-3x fa-credit-card"></i>
                  </span>
                </div>
                <div class="column is-four-fifths">
                  <p class="title is-3">Paiements</p>
                </div>
              </div>
            </article>
            <article class="tile is-child notification is-warning" style="cursor:pointer;" @click="$router.push({ path: `/typepayments` })">
              <div class="columns is-mobile">
                <div class="column">
                  <span class="icon is-large">
                    <i class="fa fa-3x fa-cc-visa"></i>
                  </span>
                </div>
                <div class="column is-four-fifths">
                  <p class="title is-3">Types paiements</p>
                </div>
              </div>
            </article>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile  is-child notification is-info" style="cursor:pointer;" @click="$router.push({ path: `/produits` })">
              <div class="columns is-mobile">
                <div class="column">
                  <span class="icon is-large">
                    <i class="fa fa-3x fa-shopping-bag"></i>
                  </span>
                </div>
                <div class="column is-four-fifths">
                  <p class="title is-3">Produits</p>
                </div>
              </div>
            </article>
            <article class="tile is-child notification is-info" style="cursor:pointer;" @click="$router.push({ path: `/fournisseurs` })">
              <div class="columns is-mobile">
                <div class="column">
                  <span class="icon is-large">
                    <i class="fa fa-3x fa-building"></i>
                  </span>
                </div>
                <div class="column is-four-fifths">
                  <p class="title is-3">Fournisseurs</p>
                </div>
              </div>
            </article>
            <article class="tile is-child notification is-info" style="cursor:pointer;" @click="$router.push({ path: `/typefournisseurs` })">
              <div class="columns is-mobile">
                <div class="column">
                  <span class="icon is-large">
                    <i class="fa fa-3x fa-share-alt-square"></i>
                  </span>
                </div>
                <div class="column is-four-fifths">
                  <p class="title is-3">Types fournisseurs</p>
                </div>
              </div>
            </article>
            <article class="tile is-child notification is-info" style="cursor:pointer;" @click="$router.push({ path: `/portfolios` })">
              <div class="columns is-mobile">
                <div class="column">
                  <span class="icon is-large">
                    <i class="fa fa-3x fa-picture-o"></i>
                  </span>
                </div>
                <div class="column is-four-fifths">
                  <p class="title is-3">Portfolios</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    export default {
      created(){
        this.$root.color = 'dark';
      }
    }
</script>
