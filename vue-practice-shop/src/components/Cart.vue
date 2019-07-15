<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="item in items" :key="item.id">
      {{ item.title }} - $ {{ item.price }}
      <button class="btn badge badge-danger float-right">
          <span class="glyphicon glyphicon-trash">Delete Item</span>
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['items']
}
</script>

