export interface QuizAnswer {
    /** The ID of the question being answered. */
    questionId: number;
    /** The text that the student entered for their answer. */
    text: string;
    /** Whether or not the student has submitted this answer. */
    submitted: boolean;
    /** Whether or not the students' answer matched the expected. */
    correct: boolean;
    /** points earned if correct */
    points: number;
}
