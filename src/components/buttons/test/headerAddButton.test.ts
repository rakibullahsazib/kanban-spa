import { expect, test } from "vitest";
import {render, fireEvent} from '@testing-library/vue'
import HeaderAddButton from '../HeaderAddButton.vue'

test('emit add event on add btn click', async () => {
  const {getByTestId, emitted} = render(HeaderAddButton, {
    props: {
      title: 'Title'
    }
  })
  const btn = getByTestId('Title-add-btn')  
  await fireEvent.click(btn)
  expect(emitted().add).toBeTruthy()
})
