
import './App.css';
import ProductContextProvider from './components/ProductContext';
import ResizableComponent from './components/ResizableComponent';

function App() {
  return (
    <div className='App'>
      <ProductContextProvider>
        <ResizableComponent />
      </ProductContextProvider>
    </div>
  );
}

export default App;
