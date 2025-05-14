<script setup>

</script>

<template>
    <div class="flex items-center justify-between">
        <!-- Foto produk -->
            <div class="flex items-center space-x-4">
            <img
                src="/src/asset/Nasi Goreng Spesial.jpeg"
                alt="Nama Produk"
                class="w-20 h-20 object-cover rounded-md"
            />
            <div>
                <p class="font-bold text-gray-700">Nasi Goreng Spesial</p>
                <p class="text-gray-500">1x - Rp25.000</p>
            </div>
        </div>
        
        <div class="flex items-center ">
            <div class="flex items-center space-x-2">
                <!-- Kurangi jumlah item -->
                <button class="w-7 h-7 text-lg rounded bg-gray-200 text-gray-700 hover:bg-gray-300">−</button>
                <!-- Quantity Display -->
                <span class="w-6 text-center text-sm">1</span>
                <!-- Tambah jumalah item -->
                <button class="w-7 h-7 text-lg rounded bg-gray-200 text-gray-700 hover:bg-gray-300">+</button>
                <!-- Hapus item -->
                </div>
            <button>
                <img src="../asset/Bin icon.svg" alt="bin icon" class="h-8 opacity-40 hover:opacity-100 md:px-6 sm:px-2">
            </button>
        </div>
    </div>

    <!-- Batas -->
    <div class="border-b-1 border-b-gray-300">
    </div>

</template>

<style scoped>

</style>