import { hobbyList } from "./HobbyList"
import { Hobby } from "../hobby/Hobby"
import { NavBar} from "../NavBar"

// Define the Hobbies component
export const Hobbies = () => {
    return (
       // React Fragment to group the list of hobbies without adding extra nodes to the DOM
        <>
        <NavBar/>
        {   // Map over each hobby in the hobbyList array, transforming them into Hobby components
            hobbyList.map((hobby, index) =>
             // For each hobby, create a Hobby component, passing the hobby data as props 
            <Hobby key={index} {...hobby} /> )
            
        }
      
    </>
    )
}