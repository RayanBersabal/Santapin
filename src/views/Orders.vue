<script setup>
import { useOrdersStore } from '@/stores/ordersStore'
import { computed } from 'vue'

const ordersStore = useOrdersStore()

const activeOrders = computed(() =>
  ordersStore.orders.filter(order => order.status === 'Disiapkan')
)

const pastOrders = computed(() =>
  ordersStore.orders.filter(order => order.status === 'Selesai')
)

console.log('🧾 Loaded orders:', ordersStore.orders)
console.log('📦 All orders:', ordersStore.orders)

</script>

<template>
    <body class="body">
        <section class="px-5">
            <div class="max-w-6xl mx-auto py-6">
                <h2 class="md:text-2xl font-bold text-gray-800 mb-4">Pesanan Aktif</h2>

                <router-link
                    v-for="order in activeOrders"
                    :key="order.id"
                    :to="`/orders-tracking/${order.id}`"
                    class="block"
                >
                    <div class="p-6 bg-white rounded-lg shadow-md mb-3 hover:shadow-xl cursor-pointer transition">
                    <div class="space-y-4">
                        <div class="flex items-center justify-between">
                        <div class="space-y-1">
                            <div class="flex gap-2">
                            <h2 class="font-bold text-gray-700">{{ order.id }}</h2>
                            <p class="text-gray-500">{{ new Date(order.createdAt).toLocaleString('id-ID') }}</p>
                            </div>
                            <p class="text-gray-500">
                            {{ order.items.map(i => `${i.name} x${i.quantity}`).join(', ') }}
                            </p>
                        </div>
                        <div class="flex items-center gap-4">
                            <h2 class="font-bold text-[#814C3C]">Rp{{ order.total.toLocaleString('id-ID') }}</h2>
                            <div class="py-1 px-6 text-lg rounded-full bg-[#2563EB] text-white">Disiapkan</div>
                        </div>
                        </div>
                    </div>
                    </div>
                </router-link>
            </div>



            <div class="max-w-6xl mx-auto pb-6">
                <h2 class="md:text-2xl font-bold text-gray-800 mb-4">Pesanan Sebelumnya</h2>

                <div
                    v-for="order in pastOrders"
                    :key="order.id"
                    class="p-6 bg-white rounded-lg shadow-lg mb-3"
                >
                    <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="space-y-1">
                        <div class="flex gap-4">
                            <h2 class="font-bold text-gray-700">{{ order.id }}</h2>
                            <p class="text-gray-500">{{ new Date(order.createdAt).toLocaleString('id-ID') }}</p>
                        </div>
                        <p class="text-gray-500">
                            {{ order.items.map(i => `${i.name} x${i.quantity}`).join(', ') }}
                        </p>
                        </div>
                        <div class="flex items-center gap-4">
                        <h2 class="font-bold text-[#814C3C]">Rp{{ order.total.toLocaleString('id-ID') }}</h2>
                        <div class="py-1 px-6 text-lg rounded-full bg-[#3D5943] text-white">Selesai</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </section>       
    </body>
</template>

<style scoped>
.body{
    background-color: whitesmoke;
}
</style>