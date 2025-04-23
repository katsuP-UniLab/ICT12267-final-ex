<script setup lang="ts"></script>

<template>
  <nav class="bg-white dark:bg-gray-800 antialiased">
    <div class="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-8">
          <ul
            class="hidden lg:flex items-center justify-start gap-6 md:gap-8 py-3 sm:justify-center"
          >
            <li>
              <a
                href="/"
                title=""
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                Home
              </a>
            </li>
            <li class="shrink-0">
              <a
                href="/listing"
                title=""
                class="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                Listing
              </a>
            </li>
            <li class="shrink-0">
              <a
                href="/about"
                title=""
                class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                About Us
              </a>
            </li>
            <li class="shrink-0">
              <a
                href="/contacts"
                title=""
                class="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div
        id="ecommerce-navbar-menu-1"
        class="bg-gray-50 dark:bg-gray-700 dark:border-gray-600 border border-gray-200 rounded-lg py-3 hidden px-4 mt-4"
      >
        <ul class="text-gray-900 dark:text-white text-sm font-medium space-y-3">
          <li>
            <a href="/" class="hover:text-primary-700 dark:hover:text-primary-500">Home</a>
          </li>
          <li>
            <a href="/listing" class="hover:text-primary-700 dark:hover:text-primary-500">
              Listing
            </a>
          </li>
          <li>
            <a href="/about" class="hover:text-primary-700 dark:hover:text-primary-500">About Us</a>
          </li>
          <li>
            <a href="/contacts" class="hover:text-primary-700 dark:hover:text-primary-500">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
