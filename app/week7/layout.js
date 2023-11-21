import {ToastProvider} from './provider/toastProvider' 

 
const Layout = ({ children }) => {
  return (
  
    <body>
      <ToastProvider/>
      {children}
    </body>
  
  )
};
 
export default Layout;