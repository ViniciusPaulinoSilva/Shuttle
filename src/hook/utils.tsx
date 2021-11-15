import { createContext, useState, useContext } from 'react';


interface IUtilsContext {
    showHeader: boolean,
    setShowHeader: (isLogin : boolean) => void
}

const UtilsContext = createContext<IUtilsContext>({} as IUtilsContext);

const UtilsProvider: React.FC = ({children}) => {
    const [showHeader, setShowHeader] = useState(false);
    
    return (
        <UtilsContext.Provider
            value={{showHeader, setShowHeader}}
        >
            {children}
        </UtilsContext.Provider>
    )
}

function useUtils(): IUtilsContext {
    const context = useContext(UtilsContext);
  
    if (!context) {
      throw new Error('useUtils must be used within an UtilsProvider');
    }
  
    return context;
  }

export {UtilsProvider, useUtils};