<script lang="ts">  
	import SmallScreenNoti from '$lib/SmallScreenNoti.svelte';
    import Navbar from '$lib/Navbar.svelte';
	import SideNavigation from '$lib/SideNavigation.svelte';
	import Navigation from '$lib/Navigation.svelte';
    
    import "../app.postcss";

</script>

<SmallScreenNoti/>

<!-- <div class="container"><div class="outer-nav--return"></div>
      <div id="viewport" class="l-viewport">
        <div class="l-wrapper"> -->

            <!-- </div>
            </div>
  </div> -->


<div class="perspective effect-rotate-left">
    <div class="container"><div class="outer-nav--return"></div>
      <div id="viewport" class="l-viewport">
        <div class="l-wrapper">
          <Navbar/>
          <SideNavigation/>
          <slot/>
        </div>
      </div>
    </div>
    <Navigation/>
</div>