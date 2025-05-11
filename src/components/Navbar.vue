<template>
  <nav class="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-50">
    <div class="text-2xl font-bold text-primary">Santapin</div>

    <!-- Navigasi Desktop -->
    <div class="hidden md:flex items-center space-x-6">
      <ul class="flex space-x-6">
        <li><RouterLink to="/" class="nav-link" active-class="text-primary font-semibold">Home</RouterLink></li>
        <li><RouterLink to="/menu" class="nav-link" active-class="text-primary font-semibold">Menu</RouterLink></li>
        <li><RouterLink to="/orders" class="nav-link" active-class="text-primary font-semibold">Orders</RouterLink></li>
        <li><RouterLink to="/cart" class="nav-link" active-class="text-primary font-semibold">Keranjang</RouterLink></li>
      </ul>
      <!-- Tombol Login -->
      <RouterLink to="/login" class="bg-[#814C3C] text-white text-sm font-semibold rounded px-4 py-1.5 hover:bg-[#814C3C] transition">
        Login
      </RouterLink>
    </div>

    <div class="md:hidden"></div>
  </nav>
</template>

<style scoped>
.nav-link {
  @apply text-gray-600 hover:text-primary;
}
</style>