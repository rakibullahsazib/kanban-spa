import { expect, test } from "vitest";
import {render, fireEvent } from '@testing-library/vue'
import HeaderAddButton from '../HeaderAddButton.vue'

const headerAddButton = render(HeaderAddButton, {
  props: {
    title: 'Title'
  }
})
test('show button text as passed in props', async () => {
  headerAddButton.getByText('Title')
})
test('emit add event on add btn click', async () => {
  const btn = headerAddButton.getByTestId('Title-add-btn')
  await fireEvent.click(btn)
  expect(headerAddButton.emitted().add).toBeTruthy()
})
