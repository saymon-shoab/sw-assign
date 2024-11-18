
<script>
    import "../app.css";
    import "flowbite/dist/flowbite.css";
    import { Table } from "flowbite-svelte";
    import { onMount } from "svelte";
  
    let launches = [];
  
    // Fetch data from SpaceX API
    onMount(async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/launches");
        if (response.ok) {
          const data = await response.json();
  
          // Enhance the data with success rate
          launches = data.map((launch) => {
            const cores = launch.cores || [];
            const attemptedLandings = cores.reduce(
              (sum, core) => sum + (core.landing_attempt ? 1 : 0),
              0
            );
            const successfulLandings = cores.reduce(
              (sum, core) => sum + (core.landing_success ? 1 : 0),
              0
            );
            const successRate =
              attemptedLandings > 0
                ? ((successfulLandings / attemptedLandings) * 100).toFixed(2)
                : "0.00";
  
            return {
              name: launch.name,
              date: new Date(launch.date_utc).toLocaleDateString(),
              details: launch.details || "No details available",
              patch: launch.links?.patch?.small || "",
              successRate,
            };
          });
        } else {
          console.error("Failed to fetch launches:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching launches:", error);
      }
    });
  </script>
  
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold my-4">SpaceX Launches</h1>
  
    {#if launches.length > 0}
      <Table hoverable={true}>
        <thead>
          <tr>
            <th class="px-6 py-3">Patch</th>
            <th class="px-6 py-3">Name</th>
            <th class="px-6 py-3">Date</th>
            <th class="px-6 py-3">Details</th>
            <th class="px-6 py-3">Success Rate (%)</th>
          </tr>
        </thead>
        <tbody>
          {#each launches as launch}
            <tr>
              <td class="px-6 py-4">
                {#if launch.patch}
                  <img src={launch.patch} alt="Patch" class="w-12 h-12" />
                {:else}
                  <span>No Patch</span>
                {/if}
              </td>
              <td class="px-6 py-4 font-medium text-gray-900">{launch.name}</td>
              <td class="px-6 py-4">{launch.date}</td>
              <td class="px-6 py-4">{launch.details}</td>
              <td class="px-6 py-4">{launch.successRate}</td>
            </tr>
          {/each}
        </tbody>
      </Table>
    {:else}
      <p>Loading launches...</p>
    {/if}
  </div>
  



<!-- <script>
    // @ts-nocheck
  
    import "../app.css";
    import "flowbite/dist/flowbite.css";
    import {
      Navbar,
      NavBrand,
      NavLi,
      NavUl,
      NavHamburger,
      Table
    } from "flowbite-svelte";
    import { launches, fetchLaunches } from "../stores/spaceXStore";
    import { onMount } from "svelte";
  
    let launchData = [];
  
    // Fetch data on component mount
    onMount(async () => {
      await fetchLaunches(); // Trigger the API fetch
      launchData = $launches; // Update the local variable with the store's data
    });
  </script> -->
  
  <!-- <Navbar>
    <NavBrand href="/">
      <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Space X
      </span>
    </NavBrand>
    <div class="flex md:order-2">
      <NavHamburger />
    </div>
    <NavUl class="order-1">
      <NavLi href="/" active={true}>Open Layer</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/docs/components/navbar">Navbar</NavLi>
      <NavLi href="/pricing">Pricing</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  </Navbar>
  
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold my-4">SpaceX Launches</h1>
  
    {#if launchData.length > 0}
      <Table hoverable={true}>
        <thead>
          <tr>
            <th class="px-6 py-3">Name</th>
            <th class="px-6 py-3">Date</th>
            <th class="px-6 py-3">Details</th>
          </tr>
        </thead>
        <tbody>
          {#each launchData.slice(0, 10) as launch}
            <tr>
              <td class="px-6 py-4 font-medium text-gray-900">{launch.name}</td>
              <td class="px-6 py-4">
                {new Date(launch.date_utc).toLocaleDateString()}
              </td>
              <td class="px-6 py-4">
                {launch.details || "No details available"}
              </td>
            </tr>
          {/each}
        </tbody>
      </Table>
    {:else}
      <p class="text-gray-500">No launches found.</p>
    {/if}
  </div>
   -->