import { expect, test } from "vitest";
import {render, fireEvent } from '@testing-library/vue'
import SearchInput from './SearchInput.vue'

const {getByTestId, getByText, queryByPlaceholderText, emitted} = render(SearchInput, {
  props: {
    id: 'test-id',
    placeholder: 'test-placeholder'
  }
})
test('show placeholder text as passed in props', async () => {
  queryByPlaceholderText('test-placeholder')
})
test('input exists with passed id', async () => {
  const input = getByTestId('search-input')
  expect(input.id).toBe('test-id')
})
test('emit event with input value as payload', async () => {
  const input = getByTestId('search-input')
  await fireEvent.update(input, 'test-value')
  expect(emitted().inputChange).toBeTruthy()
  expect(emitted().inputChange[0]).toEqual(['test-value'])
})
