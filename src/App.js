import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';

/**
 * Root component of the application.
 * @returns {JSX.Element} the application component.
 */
function App() {
  return (
    <div className="App-header">
			<RouterProvider router={router}/>
		</div>
  );
}
export default App;
