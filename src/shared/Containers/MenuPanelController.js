import React, {
    createContext,
    useState
} from 'react'

export const menuPanelContext = createContext(null)

const MenuPanelController = ({children}) => {
    const [currentPanel, setCurrentPanel] = useState(null)

    return (
        <menuPanelContext.Provider value={{
            currentPanel,
            setPanel: (name) => setCurrentPanel(name),
        }}>
            {children}
        </menuPanelContext.Provider>
    )
}

export default MenuPanelController