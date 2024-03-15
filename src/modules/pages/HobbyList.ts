import painting from '../../images/hobbies/painting.jpg'
import traveling from '../../images/hobbies/traveling.jpg'
import tennis from '../../images/hobbies/tennis.jpg'
import swimming from '../../images/hobbies/swimming.jpg'
import chess from '../../images/hobbies/chess.jpg'
import cycling from '../../images/hobbies/cycling.jpg'

// Define the HobbyType interface 
 export interface HobbyType {
    title: string
    description: string
    imgSrc: string
 }

// Declare an array of hobby objects, each adhering to the HobbyType structure.
// This array serves as a dataset for hobbies to be utilized throughout the application.
 export const hobbyList: HobbyType[] = [
    {
        title: 'Painting',
        description: 'I like painting',
        imgSrc: painting
    },
    {
        title: 'Traveling',
        description: 'I like traveling',
        imgSrc: traveling
    },
    {
        title: 'Tennis',
        description: 'I like tennis',
        imgSrc: tennis
    },
    {
        title: 'Swimming',
        description: 'I like Swimming',
        imgSrc: swimming
    },
    {
        title: 'Chess',
        description: 'I like Chess',
        imgSrc: chess
    },
    {
        title: 'Cycling',
        description: 'I like cycling',
        imgSrc: cycling
    },
    

 ]