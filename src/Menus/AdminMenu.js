import React, {useState} from 'react'
import Div               from '../Basic/Div'
import Li                from '../Basic/Li'
import MotionDiv         from '../Basic/MotionDiv'
import StyledLink        from '../Basic/StyledLink'
import Ul                from '../Basic/Ul'
import {adminMenuStyle}  from '../themes/admin'

const AdminMenu = ({theme}) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
    const subMenuVariants = {
        initial: {
            height: 0,
            overflow: 'hidden',
            position: 'absolute',
            transition: {
                duration: .2,
                ease: 'easeIn'
            }
        },
        animate: {
            height: 'auto',
            transition: {
                duration: .2,
                ease: 'easeOut'
            }
        }
    }

    return (
        <MotionDiv as="nav" theme={{...adminMenuStyle, ...theme}} exit={"exits"}>
            <Ul theme={adminMenuStyle.list}>
                <Li theme={adminMenuStyle.listItem}>
                    <StyledLink theme={adminMenuStyle.link} to="/admin/businesses">
                        Manage Businesses
                    </StyledLink>
                </Li>
                <Li theme={adminMenuStyle.listItem}>
                    <Div theme={adminMenuStyle.link} onClick={() => setIsSubMenuOpen(flag => !flag)}>
                        Manage Shop
                    </Div>
                    <MotionDiv
                        initial="initial"
                        animate={isSubMenuOpen ? 'animate' : 'initial'}
                        variants={subMenuVariants}
                        theme={adminMenuStyle.subListWrapper}
                    >
                        <Ul theme={adminMenuStyle.subList}>
                            <Li theme={adminMenuStyle.listItem}>
                                <StyledLink theme={adminMenuStyle.link} to="/admin/products">
                                    Manage Products
                                </StyledLink>
                            </Li>
                            <Li theme={adminMenuStyle.listItem}>
                                <StyledLink theme={adminMenuStyle.link} to="/admin/orders">
                                    Manage Orders
                                </StyledLink>
                            </Li>
                        </Ul>
                    </MotionDiv>
                </Li>
            </Ul>
        </MotionDiv>
    )
}


export default AdminMenu