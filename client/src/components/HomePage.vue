<template>



  <div id="app">

    <div class="grid">
      <template v-for="e1 in els1">
        <span class="hour">{{e1.first}}</span> <span class="name">{{e1.last}}</span>
      </template>
    </div>

    <div class="grid" >
      <template v-for="e2 in els2">
        <span class="hour">{{e2.first}}</span> <span class="name">{{e2.last}}</span>
      </template>

    </div>

  </div>

</template>

<script>

new Vue({
  el: '#app',
  data: {
    els1: [],
    els2: []
  },
  mounted() {
    // content of the left box
    this.els1.push({
      first: '9:10',
      last: 'Acituf haih bim nizec ziohra uvi utucivsew koukeji fip kene ejviv wiel oj paphewan ilo newut.'
    })
    this.els1.push({
      first: '19:40',
      last: 'Macun dahhis cekdiwvug iti fieldu ab rewki pa ruoti abfonon cagoh codsi zadufi pu jurwut urmo owzew cawub.'
    })
    this.els1.push({
      first: '23:18',
      last: 'Zerba clegsns dgdrelm cevblrh.'
    })
    // content of the right box
    this.els2.push({
      first: '12:17',
      last: 'Hevkeek pe niwwat omkodo hapwas fepono azahawop ir bilbuel kame usipe cato icakori rosi sommawo.'
    })
    this.els2.push({
      first: '14:10',
      last: 'Hocmaizi weipe low rit todzup evtepcot zesaif unebojmug bageta ri fop sec ibti kukdo caukuocu fugocofo.'
    })
  }
})

</script>

<style>

.grid {
  display: grid;
  grid-template-columns: 6ch auto;
}

#app {
  width: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.hour {
  text-align: right;
  padding: 3px 5px 3px 3px;
}

.name {
  text-align: left;
  padding: 3px 5px 3px 3px;
}

</style>
