import React, {
    createContext,
    useState
} from 'react'

export const menuPanelContext = createContext(null)

const MenuPanelController = ({children}) => {
    const [currentPanel, setCurrentPanel] = useState(null)
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    return (
        <menuPanelContext.Provider value={{
            currentPanel,
            setPanel: (name) => setCurrentPanel(name),
            isFilterOpen,
            setIsFilterOpen
        }}>
            {children}
        </menuPanelContext.Provider>
    )
}

export default MenuPanelController