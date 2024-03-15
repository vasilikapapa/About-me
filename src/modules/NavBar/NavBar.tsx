import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'

// The NavBar component is responsible for navigation within the application.
export const NavBar = () => {
     // useState hook to manage the selected navigation item based on the route.
    const [value, setValue] = useState(0)
    // useNavigate hook from react-router-dom to programmatically navigate between routes.
    const navigate = useNavigate()
    // useLocation hook to access the current URL path, helping in determining the active navigation item.
    const location = useLocation()

    

     // useEffect hook to update the navigation state based on the URL path whenever the location changes.
     useEffect(() => {
        // Determine the new navigation value based on the current path.
        // This sets the navigation item to be active for '/about' or '/hobbies'.
        const newValue = location.pathname === '/about' ? 0 : location.pathname === '/hobbies' ? 1 : 0;
        // Update the state with the new navigation value.
        setValue(newValue);
    }, [location]); // Dependency array with location ensures the effect runs only when the location changes.

    return (
        <Box style={{ width: 500 }}>
            <BottomNavigation
                style={{backgroundColor: 'thistle'}}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    // Update the state with the new value upon user selection.
                    setValue(newValue)
                    // Navigate based on the newValue
                    navigate(newValue === 0 ? '/about' : '/hobbies')
                }}>
                <BottomNavigationAction label="About Me"  className='MuiBottomNavigationActionLabel' style={{ color: 'white', fontWeight: 'bold' }}/>
                <BottomNavigationAction label="Hobbies" className='MuiBottomNavigationActionLabel' style={{ color:'white', fontWeight: 'bold' }} />
            </BottomNavigation>
        </Box>
    );
};
