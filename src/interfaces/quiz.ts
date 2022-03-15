// import { Answer } from "./answer";
import { Question } from "./question";

/***
 * A representation of a students' answer in a quizzing game
 */
export interface Quiz {
    /** The unique identifier for the quiz. */
    id: number;
    /** The title of the quiz. */
    title: string;
    /** List of questions the quiz contains. */
    questions: Question[];
    // /** List of answers hmmmmmmmm idk if this is right */
    // answers: Answer[];
    /** How many questions the quiz has. */
    length: number;
    /** Description of the quiz. */
    description: string;
}
