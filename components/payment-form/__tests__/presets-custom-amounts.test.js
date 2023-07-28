/**
 * @jest-environment jsdom
 */
import React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

import PresetsCustomAmounts from '../presets-custom-amounts'

const user = userEvent.setup()

describe('Preset amount radio buttons', () => {
    it('acts as one tab stop',  async () => {
        render(
            <form>
                <PresetsCustomAmounts amounts={[10, 25, 50]} />
                <button>Text</button>
            </form>
        )

        const button = screen.getByRole('button')
        const radios = screen.getAllByRole('radio')

        user.tab()

        expect(radios[0]).toHaveFocus()

        await user.tab()

        expect(button).toHaveFocus()
    })

    it('enables a custom field amount', async () => {
        render(
            <form>
                <PresetsCustomAmounts amounts={[10, 25, 50]} />
                <button>Text</button>
            </form>
        )

        const radios = screen.getAllByRole('radio')
        const lastRadio = radios[radios.length - 1]
        const firstRadio = radios[0]
        const customText = screen.getByPlaceholderText('$ Other amount')

        await user.tab()
        expect(firstRadio).toHaveFocus()

        // select last radio
        lastRadio.click()
        expect(lastRadio).toBeChecked()

        await user.tab()
        expect(customText).toHaveFocus()
    })
 })
