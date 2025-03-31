// components/ThemeToggle.tsx  
'use client'  

import { useTheme } from '@/app/provider/theme-context.provider'
import { Moon, Sun } from 'lucide-react'  
import { ButtonComponent } from '../Button/Button'

export const ThemeToggle = () => {  
  const { theme, toggleTheme } = useTheme()  

  return (  
    <ButtonComponent   
      onClick={toggleTheme}  
      size='small'
      shape='outlined'
    //   className="fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800"  
    >  
      {theme === 'light' ? <Moon /> : <Sun />}  
    </ButtonComponent>  
  )  
}  