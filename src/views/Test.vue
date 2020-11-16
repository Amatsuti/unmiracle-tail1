<template>
  <div class="about">
    <button @click="simu">シミュレーション</button>
    <textarea cols="30" rows="30" v-model="log"></textarea>
  </div>
</template>

<script>
/*eslint-disable no-undef */
export default {
  data () {
    return {
      log: ''
    }
  },
  methods: {
    simu () {
      this.log = Unmiracle.simu([{
        profile: {name:"AAA"},
        skill: [{
          Cmd: "test-cmd/smash",
          Arg: { Lv:1 },
          RID: "S1",
        }],
        ability: [{
          Cmd: "test-cmd/soul",
          Arg: { Lv:1 },
          RID: "A1",
        }],
        ai: [{
          "@call":"test-cmd/smash.ai",
          arguments: { rid: "S1", player: {"@arg":"player"} }
        }]
      }],[{
        profile: {name:"BBB"},
        skill: [{
          Cmd: "test-cmd/fire",
          Arg: { Lv:1 },
          RID: "S1",
        }],
        ability: [{
          Cmd: "test-cmd/soul",
          Arg: { Lv:1 },
          RID: "A1",
        }],
        ai: [{
          "@call":"test-cmd/fire.ai",
          arguments: { rid: "S1", player: {"@arg":"player"} }
        }]
      }],[{
          Cmd: "test-cmd/normal-attack",
          Arg: { Lv:1 },
          RID: "normal-attack",
      },{
          Cmd: "test-cmd/wait",
          Arg: { Lv:1 },
          RID: "wait",
      }])
    }
  }
}
</script>
