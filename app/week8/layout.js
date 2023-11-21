import { AuthContextProvider } from "./_utils/auth-context";
import {ToastProvider} from './provider/toastProvider' 

 
const Layout = ({ children }) => {
  return (
  <AuthContextProvider>
    <ToastProvider/>
          {children}
  </AuthContextProvider>)
};
 
export default Layout;