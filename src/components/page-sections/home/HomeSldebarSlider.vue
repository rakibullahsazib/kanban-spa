<template>
  <SidebarSliderLayout
    title="Home"
  >
    <section>
      <HeaderAddButton
        @click="isCreateWorkspaceModalShown = true"
        title="Workspaces"
      />
      <SingleSelectDropdown
        :options="workspaces"
        :selectedOptionId="selectedWorkspaceId"
        placeholder="Select Workspace"
        :isDropdownShown="currentDropdown === 'slider-workspaces'"
        class="mt-4 text-sm"
      />
    </section>
  </SidebarSliderLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import SidebarSliderLayout from '../../../layouts/SidebarSliderLayout.vue';
import HeaderAddButton from '../../buttons/HeaderAddButton.vue';
import SingleSelectDropdown from '../../inputs/dropdowns/SingleSelectDropdown.vue';

const isCreateWorkspaceModalShown = ref(false)
const workspaces = computed(() => [
  {
    id: 1,
    name: 'Workspace 1',
    icon: 'workspace.svg'
  },
  {
    id: 2,
    name: 'Workspace 2',
    icon: 'workspace.svg'
  }
])
const selectedWorkspaceId = computed(() => 1)
const currentDropdown = computed(() => 'slider-workspaces')
</script>

<style scoped>

</style>