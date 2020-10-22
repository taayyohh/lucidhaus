import React, {
    createContext,
    useState
} from 'react'

export const menuPanelContext = createContext(null)

const MenuPanelController = ({children}) => {
    const [currentPanel, setCurrentPanel] = useState({})

    return (
        <menuPanelContext.Provider value={{
            currentPanel,
            setPanel: (panelNameAndId) => setCurrentPanel(panelNameAndId),
        }}>
            {children}
        </menuPanelContext.Provider>
    )
}

export default MenuPanelController