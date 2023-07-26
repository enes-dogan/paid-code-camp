// styles
import './index.css';
import styles from './App.module.css';

// components

function App() {
  return (
    <>
      <h1 className='text-3xl leading-tight text-blue-600 font-Lato text-center bg-red-700'>
        Tailwind CSS
      </h1>
      <h2 className={styles.heading}>Heading styled with css module</h2>
    </>
  );
}

export default App;
