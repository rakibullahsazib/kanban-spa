import { expect, test } from "vitest";
import {render, fireEvent } from '@testing-library/vue'
import SearchInput from './SearchInput.vue'

const searchInput = render(SearchInput, {
  props: {
    id: 'test-id',
    placeholder: 'test-placeholder'
  }
})
test('show placeholder text as passed in props', async () => {
  searchInput.queryByPlaceholderText('test-placeholder')
})
test('input exists with passed id', async () => {
  const input = searchInput.getByTestId('search-input')
  expect(input.id).toBe('test-id')
})
test('emit event with input value as payload', async () => {
  const input = searchInput.getByTestId('search-input')
  await fireEvent.update(input, 'test-value')
  expect(searchInput.emitted().inputChange).toBeTruthy()
  expect(searchInput.emitted().inputChange[0]).toEqual(['test-value'])
})
