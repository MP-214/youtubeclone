import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import {Provider} from 'react-redux'
import { store } from './utils/store';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
function App() {

  const appRouter=createBrowserRouter([{
    path:'/',
    element:<Body/>,
    children:[{
      path:'/',
      element:<MainContainer/>
    },{
      path:'watch',
      element:<WatchPage/>
    }]
  }])
  return (
    <Provider store={store}>
    <div>
    <Head/>
    <RouterProvider router={appRouter}/>
    {/**
     * Header
       Body
        sidebar
          MenuItems
        MainContainer
         Button List
         Video Conatiner
         video Card 
     */}
    
    
    </div>
    </Provider>
  );
}

export default App;
