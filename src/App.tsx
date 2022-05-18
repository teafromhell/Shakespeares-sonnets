/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import SonnetsList from './components/SonnetsList/SonnetsList';

import { nanoid } from 'nanoid'

import { LinearProgress } from '@material-ui/core';

export interface ISonnets {
  title: string;
  lines: string[];
  id: string;
  number: number;
  string: string;
}

function App() {
  const [sonnets, setSonnet] = useState<ISonnets[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  useEffect(() => {
    searchPoem()

  }, [])

  const searchPoem = async (): Promise<void> => {
    setLoading(true)
    const response =
      await axios.get(
        `https://poetrydb.org/author/Shakespeare`
      )
    const data = await response.data
    data.map((item: ISonnets): ISonnets[] => {
      let title: string = item.title
      if (title.includes('Sonnet')) {

        const lines: string[] = item.lines

        const number = parseInt(title.replace(/[^\d]/g, ''))
        title = title.split(':')[1].trim()

        setSonnet(prev => [...prev, {
          title: title, lines: lines,
          id: nanoid(), number: number, string: lines.join('')
        }])
      }
      setLoading(false)
      return sonnets
    })
  }
  return (
    <>
      {!loading ? (<SonnetsList sonnets={sonnets} />) : (<LinearProgress />)}
    </>
  );
}

export default App;