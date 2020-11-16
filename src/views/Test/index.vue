<template>
  <div>
    <div class="member">
      <textarea rows="30" v-model="pt1json" />
      <textarea rows="30" v-model="pt2json" />
    </div>
    <div class="rule">
      <!-- <textarea rows="30" v-model="defSkill" /> -->
      <button @click="simu">シミュレーション</button>
    </div>
    <battle-note :code="log" :pt1="pt1" :pt2="pt2"></battle-note>
  </div>
</template>

<script>
import BattleNote from '@/components/BattleNote'
import { pt1, pt2, defSkill } from './const'
/*eslint-disable no-undef */
export default {
  data () {
    return {
      log: [],
      pt1: [],
      pt2: [],
      pt1json: JSON.stringify(pt1, null, 2),
      pt2json: JSON.stringify(pt2, null, 2),
      defSkill: JSON.stringify(defSkill, null, 2)
    }
  },
  components: { BattleNote },
  methods: {
    simu () {
      this.log = Unmiracle.simu(
        JSON.parse(this.pt1json),
        JSON.parse(this.pt2json),
        JSON.parse(this.defSkill), 
        (log, pt1, pt2)=>{
          this.log = log
          this.pt1 = pt1
          this.pt2 = pt2
        }
      )
    }
  }
}
</script>

<style lang="scss" scoped>
.member {
  display: flex;

  textarea {
    padding: 0 20px;
    width: 400px;
  }
}
</style>
