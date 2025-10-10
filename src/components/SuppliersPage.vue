<script setup>
const rows = [
  {name:'Richard Martin', product:'Kit Kat', phone:'7687764556', email:'richard@gmail.com', type:'Taking Return', onway:'13'},
  {name:'Tom Homan', product:'Maaza', phone:'9867545368', email:'tomhoman@gmail.com', type:'Taking Return', onway:'-'},
  {name:'Veandir', product:'Dairy Milk', phone:'9867545566', email:'veandir@gmail.com', type:'Not Taking Return', onway:'-'},
  {name:'Charin', product:'Tomato', phone:'9267355457', email:'charin@gmail.com', type:'Taking Return', onway:'12'},
  {name:'Hoffman', product:'Milk Bikis', phone:'9367546531', email:'hoffman@gmail.com', type:'Taking Return', onway:'-'},
  {name:'Fainden Juke', product:'Marie Gold', phone:'9667545982', email:'fainden@gmail.com', type:'Not Taking Return', onway:'9'},
  {name:'Martin', product:'Saffola', phone:'9867545457', email:'martin@gmail.com', type:'Taking Return', onway:'-'},
  {name:'Joe Nike', product:'Good day', phone:'9567545769', email:'joenike@gmail.com', type:'Taking Return', onway:'-'},
  {name:'Dender Luke', product:'Apple', phone:'9667545980', email:'dender@gmail.com', type:'Taking Return', onway:'7'},
  {name:'Martin', product:'Saffola', phone:'9867545457', email:'martin@gmail.com', type:'Taking Return', onway:'-'},
  {name:'Joe Nike', product:'Good day', phone:'9567545769', email:'joenike@gmail.com', type:'Taking Return', onway:'-'},
  {name:'Dender Luke', product:'Apple', phone:'9667545980', email:'dender@gmail.com', type:'Not Taking Return', onway:'7'},
  {name:'Joe Nike', product:'Good day', phone:'9567545769', email:'joenike@gmail.com', type:'Taking Return', onway:'-'},
  {name:'Joe Nike', product:'Good day', phone:'9567545769', email:'joenike@gmail.com', type:'Taking Return', onway:'-'},
]
</script>

<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Supplier Name</th>
          <th>Product</th>
          <th>Contact Number</th>
          <th>Email</th>
          <th>Type</th>
          <th>On the way</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(r,i) in rows" :key="i">
          <td>{{ r.name }}</td>
          <td>{{ r.product }}</td>
          <td>{{ r.phone }}</td>
          <td>{{ r.email }}</td>
          <td>{{ r.type }}</td>
          <td>{{ r.onway }}</td>
        </tr>
      </tbody>
    </table>

    <div class="footerpager">
      <button class="btn">Previous</button>
      <div class="small">Page 1 of 10</div>
      <button class="btn">Next</button>
    </div>
  </div>
</template>
