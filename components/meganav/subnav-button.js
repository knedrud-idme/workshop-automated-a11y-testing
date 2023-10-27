import React from "react"
import PropTypes from 'prop-types'

const SubNavButton = React.forwardRef((props, ref) => (
    <h2>
        <button
            className="megamenu-navitem header-main-item"
            id={props.idRef}
            data-testid={props.idRef}
            onClick={(event) => { props.onClick(event) }}
            ref={ref}
            aria-expanded={props['aria-expanded']}
            aria-haspopup='true'
        >
            {props.buttonName}
        </button>
    </h2>
))

SubNavButton.propTypes = {
    buttonName: PropTypes.string,
    idRef: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default SubNavButton
