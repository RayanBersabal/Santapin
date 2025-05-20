<template>
  <footer class="bg-[#3D5943] text-[#D9D9D9] text-xs md:text-sm py-8">
    <div class="max-w-6xl mx-auto px-8 md:px-12 flex flex-col md:flex-row items-start gap-8 md:gap-0">

      <!-- Contact Info -->
      <section class="w-full md:w-1/3 text-left px-4">
        <h4 class="font-semibold mb-2">Santapin</h4>
        <address class="not-italic leading-relaxed space-y-1">
          <div>Jl. Makan Enak No. 123</div>
          <div>Jakarta Selatan</div>
          <div>Indonesia</div>
          <div>Tel: (021) 123-4567</div>
          <div>Email: info@santapin.com</div>
        </address>
      </section>

      <!-- Operating Hours -->
      <section class="w-full md:w-1/3 text-left md:text-center px-4 flex flex-col justify-start">
        <div>
          <h4 class="font-semibold mb-2">Jam Operasional</h4>
          <p>Senin - Minggu</p>
          <p>10:00 - 22:00</p>
        </div>
      </section>

      <!-- Social Media -->
      <section class="w-full md:w-1/3 text-left md:text-right px-4 flex flex-col justify-start">
        <div>
          <h4 class="font-semibold mb-2">Social Media</h4>
          <div class="flex md:justify-end space-x-3 text-lg">
            <a href="#" aria-label="Instagram">
              <i class="fab fa-instagram hover:text-white transition duration-200"></i>
            </a>
            <a href="#" aria-label="Facebook">
              <i class="fab fa-facebook hover:text-white transition duration-200"></i>
            </a>
            <a href="#" aria-label="Community">
              <i class="fas fa-users hover:text-white transition duration-200"></i>
            </a>
          </div>
        </div>
      </section>

    </div>

    <!-- Optional: Copyright -->
    <div class="mt-6 text-center text-xs text-[#D9D9D9]/70">
      &copy; 2025 Santapin. All rights reserved.
    </div>
  </footer>
</template>
