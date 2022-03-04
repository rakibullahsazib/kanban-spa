<template>
  <SidebarSliderLayout
    title="Home"
  >
    <section class="w-56">
      <HeaderAddButton
        @click="isCreateWorkspaceModalShown = true"
        title="Workspaces"
      />
      <div v-if="!workspaces?.length" class="mt-2 text-grey-7 text-xs">
        <p>
          No workspace created yet.
        </p>
        <button
          @click="isCreateWorkspaceModalShown = true"
          class="mt-0.5 text-grey-9 underline focus:outline-none"
        >
          Add a workspace
        </button>
      </div>
      <SingleSelectDropdown
        v-else
        @click.stop="toggleCurrentDropdown('slider-workspaces')"
        :options="workspaces"
        :selectedOptionId="currentWorkspace?.id"
        placeholder="Select Workspace"
        :isDropdownShown="currentDropdown === 'slider-workspaces'"
        class="mt-4 text-sm"
      />
    </section>
  </SidebarSliderLayout>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useMainStore } from '../../../store/root'
import { useWorkspaceStore } from '../../../store/workspace'
import SidebarSliderLayout from '../../../layouts/SidebarSliderLayout.vue';
import HeaderAddButton from '../../buttons/HeaderAddButton.vue';
import SingleSelectDropdown from '../../inputs/dropdowns/SingleSelectDropdown.vue';

const mainStore = useMainStore()
const workspaceStore = useWorkspaceStore()

const workspaces = computed(() => workspaceStore.workspaces)
const currentWorkspace = computed(() => workspaceStore.currentWorkspace)
console.log(workspaces.value, currentWorkspace.value)
const isCreateWorkspaceModalShown = ref(false)

let currentDropdown = computed(() => mainStore.currentDropdown)
const toggleCurrentDropdown = mainStore.toggleCurrentDropdown
</script>

<style scoped>

</style>