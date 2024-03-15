import { NavBar } from "../NavBar"
import { ImagesAlb } from "../../images/imagesAlb/ImagesAlb"
import { Paper } from "@mui/material"
import {Typography} from "@mui/material"

export const AboutMe =() =>{
    return (
        <div>
            <NavBar/>
            <ImagesAlb/>
            <Paper  
                style={{ 
                    textAlign: 'center', 
                    padding: '20px', 
                    width: '450px'}}>
                        <Typography variant="h6" gutterBottom>
                            <p>Hi, I'm Vasilika from Albania,a truly special place with mountains, beaches, and a long history, 
                            located near Italy and Greece. It's a beautiful area known for its friendly people and stunning views. </p>
                            <p> I studied Computer Engineering at the University Polytechnic of Tirana back home. In 2020, I moved to the US,
                            and in 2022, I started my master's in Computer Science at UMSL.</p>
                            <p>I like solving problems and bringing ideas to life through coding. 
                              It's rewarding to develop solutions with code that positively impact daily life. 
                            Each challenge presents an opportunity for learning and discovery.
                             Moreover, transforming a concept into a functional application is an incredibly fulfilling experience.</p>
                         </Typography>
            </Paper>
        </div>
       
    )
}