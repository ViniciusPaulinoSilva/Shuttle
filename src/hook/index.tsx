import { UtilsProvider } from './utils';

const RootProvider: React.FC = ({children}) => {
    
    return(
        <UtilsProvider>
            {children}
        </UtilsProvider>
    );
} 

export default RootProvider;