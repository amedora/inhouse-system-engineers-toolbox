# Vue tips

## Exhaustive check

TypeScriptのnever型を活用して、switch文で漏れを防ぐテクニックはSFCにも応用できる。

1. never型を受け取るだけのSFCを作る。
   ```vue
   <script setup lang=ts">
   defineProps<{ check: never }>()
   </script>
   ```
1. v-else-ifの最後でこのコンポーネントを使う。
   ```vue
   <div v-for="card in cards" :key="card.id">
    <div v-if="card.type === 'A'">
      {{ card.name }}
    </div>
    <div v-else>
      <ExhaustiveCheck :check="card" /> <!-- ここで型エラーが出せる -->
    </div>
   </div>
   ```

