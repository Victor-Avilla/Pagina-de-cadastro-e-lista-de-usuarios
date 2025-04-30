import { Button } from './styles'
import PropTypes from 'prop-types'
const DefaultButton = ({ children, ...props }) => {
    return (
        <Button {...props}>{children}</Button>
    )
}
DefaultButton.propTypes = {
    children: PropTypes.node.isRequired
}
export default DefaultButton