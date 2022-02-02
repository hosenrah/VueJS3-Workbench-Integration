<template>
<div :dir="rtl ? 'rtl' : 'ltr'">
  <div>
    <h2 class="wb-type-heading-m">Style usage</h2>
    <button type="button" class="wb-button wb-button--primary wb-button--large">Submit</button>
    <button type="button" class="wb-button wb-button--primary wb-button--medium">Submit</button>
    <button type="button" class="wb-button wb-button--primary wb-button--small">Submit</button>
  </div>
  <br>
  <div>
    <h2 class="wb-type-heading-m">Component usage</h2>
    <wb-select-control>
      <wb-select>
        <label>Model selection</label>
        <select>
          <option selected="selected" value="">Please choose a model</option>
          <option value="A">A Class</option>
          <option value="B">B Class</option>
          <option value="C">C Class</option>
          <option value="E">E Class</option>
        </select>
      </wb-select>
    </wb-select-control>
  </div>
  <br>
  <div>
    <h2 class="wb-type-heading-m">Mixin usage</h2>
    <nav class="wb-breadcrumbs">
      <a class="wb-breadcrumb" href="#products">Products</a>
      <wb-icon class="wb-breadcrumb__icon" name="chevron-right" flip-rtl></wb-icon>
      <a class="wb-breadcrumb" href="#amg">AMG</a>
      <wb-icon class="wb-breadcrumb__icon" name="chevron-right" flip-rtl></wb-icon>
      <a class="wb-breadcrumb">CLA Shooting Brake</a>
    </nav>
  </div>
  <br>
  <div>
    <h2 class="wb-type-heading-m">Spacing</h2>
    <div class="spacer spacer--xxl">I am an xxl spacer</div>
    <div class="spacer spacer--xl">I am an xl spacer</div>
    <div class="spacer spacer--l">I am an l spacer</div>
    <span class="wb-type-copy">such space</span>
  </div>
  <div>
    <h2 class="wb-type-heading-m">LTR Switch</h2>
    <wb-toggle-control class="wb-margin-bottom-xs">
      <label>
        <input name="data-saver" type="checkbox" v-model="rtl"/>
      </label>
    </wb-toggle-control>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WorkbenchComponents',
  data() {
    return {
      rtl: false
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.spacer {
  margin-bottom: 0.4rem;
  padding: 0.4rem;
  border: 1px solid var(--wb-black);

  &--xxl {
    height: var(--wb-spacing-xxl);
  }

  &--xl {
    height: var(--wb-spacing-xl);
  }

  &--l {
    height: var(--wb-spacing-l);
  }
}
</style>
