import React, {useRef, useState} from "react"

const PresetsCustomAmounts = ({amounts}) => {
    const customAmtRadio = useRef(null)
    const customAmtText = useRef(null)

    const focusInCustomInput = () => {
        customAmtRadio.current.checked = true
    }

    const handleChange = () => {
        if (customAmtRadio.current.checked) {
            customAmtText.current.removeAttribute('disabled')
        } else {
            customAmtText.current.setAttribute('disabled', 'disabled')
        }
    }

    return (
        <>
            {amounts.map((amount, index)=> {
                return <label key={index}>
                    <input
                        // checked={selectedOption == amount}
                        id={`amt_${amount}`}
                        name="amounts"
                        onChange={(event) => handleChange(event)}
                        type="radio"
                        value={amount}
                    />
                    ${amount}
                </label>
            })}
            <label className="custom-radio-group">
                <input
                    id="amt_custom"
                    name="amounts"
                    onChange={(event) => handleChange(event)}
                    ref={customAmtRadio}
                    type="radio"
                    value="Custom"
                />
                <input
                    id="amt_custom_text"
                    onFocus={focusInCustomInput}
                    placeholder="$ Other amount"
                    // tabIndex={customAmtRadio.current && customAmtRadio.current.checked ? '0' : '-1'}
                    type="text"
                    disabled={!customAmtRadio.current || !customAmtRadio.current.checked}
                    ref={customAmtText}
                />
            </label>
        </>
    )
}

export default PresetsCustomAmounts
