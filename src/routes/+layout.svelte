
<script>
    import "../app.css";
    import "flowbite/dist/flowbite.css";
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger, Button } from "flowbite-svelte";
  </script>
  
  <div class="container mx-auto p-4">
    <Navbar>
      <NavBrand href="/">
        <!-- <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" /> -->
        <!-- <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span> -->
    <h1 class="text-2xl font-bold my-4">SpaceX Launches</h1>

      </NavBrand>
      <div class="flex md:order-2">
        <Button size="sm">Get started</Button>
        <NavHamburger />
      </div>
      <NavUl class="order-1">
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/map">Open Layer</NavLi> 
      </NavUl>
    </Navbar>
    <slot />
  </div>
  