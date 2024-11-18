<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
  } from "flowbite-svelte";
</script>

<div class="container p-4">
  <Navbar>
    <NavBrand href="/">
      <h1 class="text-2xl font-bold my-4">SpaceX Launches</h1>
    </NavBrand>
    <div class=" md:order-2">
      <NavUl class="order-1">
        <NavLi href="/" active={true}>Home</NavLi>
        <NavLi href="/map">Map</NavLi>
      </NavUl>
    </div>

  </Navbar>
  <slot />
</div>
