import { expect, test } from "vitest";
import {render, fireEvent } from '@testing-library/vue'
import HeaderAddButton from '../HeaderAddButton.vue'

const {getByTestId, getByText, emitted} = render(HeaderAddButton, {
  props: {
    title: 'Title'
  }
})
test('show button text as passed in props', async () => {
  getByText('Title')
})
test('emit add event on add btn click', async () => {
  const btn = getByTestId('Title-add-btn')
  await fireEvent.click(btn)
  expect(emitted().add).toBeTruthy()
})
