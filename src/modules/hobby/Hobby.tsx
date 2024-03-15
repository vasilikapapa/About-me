
import { HobbyType } from "../pages/HobbyList"
import Paper from '@mui/material/Paper'
import { Typography } from "@mui/material"
// Defines a component to display individual hobbies.
export const Hobby = ({
   title,
   description,
   imgSrc
}: HobbyType) => {
  
   return (
 
    <Paper  
        style={{ 
            textAlign: 'center', 
            padding: '20px',
             width: '450px'}}>
                <Typography variant="h4" gutterBottom>
                    {title}
                </Typography>
                <img src={imgSrc} style ={{width: '100%', height: '200px', objectFit: 'contain'}}/>
                <Typography variant="h6" gutterBottom>
                    {description}
                </Typography>
    </Paper>
   )
}